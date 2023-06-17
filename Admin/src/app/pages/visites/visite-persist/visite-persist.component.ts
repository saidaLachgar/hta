import { Component } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { visiteService } from "../visite.service";
import { AuthenticationService } from "src/app/core/services/auth.service";
import { anomalyService } from "../../anomalies/anomaly.service";
import { User } from "src/app/core/models";

const dateObject = d => { return { year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate() } };
interface Alert {
  message: string;
  type: string;
}
@Component({
  selector: "app-visite-create",
  templateUrl: "./visite-create.component.html",
})
export class visitePersistComponent {
  breadCrumbItems: Array<{}>;
  showError: boolean = false;
  alert = window.alert;
  alerts: Alert[] = [];
  currentUser: User ;

  constructor(
    private fb: FormBuilder,
    public service: visiteService,
    public anomalyService: anomalyService,
    public authService: AuthenticationService) {
    this.currentUser = authService.currentUserValue;
    this.breadCrumbItems = [{ label: 'Visites' }, { label: 'Nouveau visite', active: true }];
    service.loadDepartments(false);
    service.loadANodes();
    service.loadBNodes();
    service.loadTeams();
    service.visiteForm = this.fb.group({
      anomalies: this.fb.array([]),
      date: dateObject(new Date()),
      team: [""],
      department: ["", Validators.required],
      nodeA: ["", Validators.required],
      nodeB: [[]],
    });
    this.formListeners();
  }

  // Validation && Alerts
  AlertANodeChange() {
    this.addAlert("En changeant le PS, les champs tronçons d'anomalies seront réinitialisés.", "warning")
  }
  AlertEdgeChange() {
    this.addAlert('Vous devez choisir un Point coupure, pour pouvoir choisir un tronçon !', 'danger')
  }
  AlertDeparChange() {
    let anode = this.service.ANode.value;
    let bnode = this.service.BNode.value;
    let hasNonEmptyNodes = (anode && anode.trim() !== '') || (bnode && bnode.length !== 0);
    let hasNonEmptyEdges = this.hasNonEmptyEdges;
    (hasNonEmptyNodes || hasNonEmptyNodes) && this.addAlert(`En changeant le département, les champs ${hasNonEmptyNodes ? "appareils de coupeur" : ""}${hasNonEmptyNodes && hasNonEmptyEdges ? " et " : ""}${hasNonEmptyEdges ? "tronçons d'anomalies" : ""} seront réinitialisés.`, "warning")
  }
   removeAlert(alert: Alert) {
    const index = this.alerts.indexOf(alert);
    if (index !== -1) {
      this.alerts.splice(index, 1);
    }
  }
  addAlert(message: string, type: string) {
    const index = this.alerts.findIndex(alert =>
      alert.message === message && alert.type === type
    );
    if (index === -1) {
      window.scrollTo(0, 0);
      const alert: Alert = { message, type };
      // add alert if not already exists
      this.alerts.push(alert);
      // remove alert after 30s
      setTimeout(() => this.removeAlert(alert), 15000);
    }
  }
  // Anomalies CRUD
  newAnomaly(): FormGroup {
    return this.fb.group({
      severity: [""],
      status: [false],
      edge: ["", Validators.required],
      title: ["", Validators.required],
    })
  }
  addAnomaly() {
    if (!this.service.ANode.value)
      this.addAlert("Vous devez choisir un Point coupure, pour pouvoir créer une anomalie.", "danger")
    else
      this.anomalies.push(this.newAnomaly());
  }
  removeAnomaly(i: number) {
    this.anomalies.removeAt(i);
  }
  formListeners() {
    let na = this.service.ANode;
    let nb = this.service.BNode;
    let dp = this.service.department;
    // on change ANode reset && reload edges aand anomalies
    na.valueChanges.subscribe(() => {
      // reset anomalies edges
      this.anomalies.controls.forEach((control) => {
        control.get('edge').reset();
      });
      //  reload edges and anomalies
      this.anomalyService.getRelatedAnomalies(na.value, nb.value, dp.value);
    });

    // on change BNode reload edges aand anomalies
    nb.valueChanges.subscribe(() => {
      // if has ps
      na.value && na.value.trim() !== '' &&
        this.anomalyService.getRelatedAnomalies(na.value, nb.value, dp.value);
    });
    // reset edges on change on change depar 
    dp.valueChanges.subscribe(() => {
      na.reset();
      nb.reset();
      // reset anomalies edges
      this.anomalies.controls.forEach((control) => {
        control.get('edge').reset();
      });

    });
  }
// Getters
get anomalies(): FormArray {
  return this.service.visiteForm.get("anomalies") as FormArray
}
get hasNonEmptyEdges() {
  return this.anomalies.controls.some((control) => {
    const edgeControl = control.get('edge');
    return edgeControl && edgeControl.value.trim() !== '';
  });
}
}

