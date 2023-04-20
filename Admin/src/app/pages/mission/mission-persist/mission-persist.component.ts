import { Component } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { pairwise } from "rxjs/operators";
import { Anomaly, Mission, User } from "src/app/core/models";
import { AuthenticationService } from "src/app/core/services/auth.service";
import { anomalyService } from "../../anomalies/anomaly.service";
import { missionService } from "../mission.service";

const zeroPad = num => String(num).padStart(2, '0');
const parseDate = d => new Date(Date.parse(d))
const timeObject = d => { return { hour: d.getHours(), minute: d.getMinutes(), second: d.getSeconds() } };
const dateObject = d => { return { year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate() } };

interface Alert {
  message: string;
  type: string;
}
@Component({
  selector: "app-mission-persist",
  templateUrl: "./mission-persist.component.html",
})
export class missionPersistComponent {
  breadCrumbItems: Array<{}>;
  showError: boolean = false;
  showAdvanced: boolean = false;
  id: string;
  currentUser: User;
  alert = window.alert;
  alerts: Alert[] = [];

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    public service: missionService,
    public anomalyService: anomalyService,
    public authService: AuthenticationService) {
    this.currentUser = authService.currentUserValue;
    this.breadCrumbItems = [{ label: 'Travaux' }, { label: 'Nouveaux travaux', active: true }];
    service.loadDepartments(false);
    service.loadActions();

    service.missionForm = this.fb.group({
      date: [""],
      dateStart: [""],
      dateEnd: [""],
      causes: [""],
      node_a: ["", Validators.required],
      node_b: [[]],
      type: [null],
      department: [""],
      actions: this.fb.array([]),
      anomalies: this.fb.array([]),
    });

    let paramId = this.route.snapshot.paramMap.get("id");
    let copy = this.route.snapshot.paramMap.get("copy");

    if (paramId) {
      this.service.EditeMode = true;

      let getItem = copy ? service.clone(paramId) : service.getByKey(Number(paramId));
      getItem.subscribe((obj) => {
        this.service.interruption = obj;
        this.id = String(obj.id);

        // fill ng-select
        service.loadANodes(obj.node_a ? [obj.node_a] : []);
        service.loadBNodes(obj.node_b ? obj.node_b : []);


        // date / time start
        let dateStrat = null; let TimeStart = null;
        if (obj.dateStart) {
          dateStrat = parseDate(obj.dateStart);
          TimeStart = timeObject(dateStrat);
        }
        // date / time ends
        let TimeEnds = obj.dateEnd ? timeObject(parseDate(obj.dateEnd)) : null;

        // patch values
        service.missionForm.patchValue({
          date: dateObject(dateStrat),
          dateStart: TimeStart,
          dateEnd: TimeEnds,
          causes: String(obj.causes), // ! not working !! 
          type: String(obj.type),
          department: obj.node_a.department ? obj.node_a.department["@id"] : null,
          node_a: obj.node_a ? obj.node_a["@id"] : null,
          node_b: obj.node_b.length ? obj.node_b.map((e) => e["@id"]) : [],
        });
        this.service.getRelatedAnomalies();
        this.formListeners();
      });

    } else {
      let d = new Date();
      let currentTime = timeObject(d);
      let today = dateObject(d);

      service.missionForm.patchValue({
        date: today,
        dateStart: currentTime,
      });
      service.loadANodes();
      service.loadBNodes();
      this.formListeners();
    }

  }

  // add actions
  onActionsChange(e) {
    const checkArray: FormArray = this.service.missionForm.get('actions') as FormArray;
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
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
    else if (this.service.type.value == null)
      this.addAlert("Vous devez choisir le type de coupure !", "danger")
    else
      this.anomalies.push(this.newAnomaly());
  }
  removeAnomaly(i: number) {
    this.anomalies.removeAt(i);
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
  formListeners() {
    // on change ANode reset && reload edges aand anomalies
    this.service.ANode.valueChanges.subscribe(() => {
      // reset anomalies edges
      this.anomalies.controls.forEach((control) => {
        control.get('edge').reset();
      });
      //  reload edges and anomalies
      this.service.getRelatedAnomalies();
    });

    // on change BNode reload edges aand anomalies
    this.service.BNode.valueChanges.subscribe(() => {
      // if has ps
      this.service.ANode.value && this.service.ANode.value.trim() !== '' &&
        this.service.getRelatedAnomalies();
    });
    // reset edges on change on change depar 
    this.service.department.valueChanges.subscribe(() => {
      this.service.ANode.reset();
      this.service.BNode.reset();
      // reset anomalies edges
      this.anomalies.controls.forEach((control) => {
        control.get('edge').reset();
      });

    });
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


  // Getters
  get anomalies(): FormArray {
    return this.service.missionForm.get("anomalies") as FormArray
  }
  get hasNonEmptyEdges() {
    return this.anomalies.controls.some((control) => {
      const edgeControl = control.get('edge');
      return edgeControl && edgeControl.value.trim() !== '';
    });
  }

}
