import { Component } from "@angular/core";
import { FormArray, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { AuthenticationService } from "src/app/core/services/auth.service";
import { visiteService } from "../visite.service";

const parseDate = d => new Date(Date.parse(d))
const timeObject = d => { return { hour: d.getHours(), minute: d.getMinutes(), second: d.getSeconds() } };
const dateObject = d => { return { year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate() } };
interface Alert {
  message: string;
  type: string;
}
@Component({
  selector: "app-visite-persist",
  templateUrl: "./visite-persist.component.html",
})
export class visitePersistComponent {
  breadCrumbItems: Array<{}>;
  showError: boolean = false;
  currentEdge: any;
  id: string;
  alert = window.alert;
  alerts: Alert[] = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public service: visiteService,
    public authService: AuthenticationService) {
    this.breadCrumbItems = [{ label: 'Visites' }, { label: 'Fiche visite', active: true }];
    this.service.EditeMode = false;
    service.loadDepartments(false);
    // service.loadTeams();
    service.visiteForm = this.fb.group({
      anomalies: this.fb.array([]),
      date: [""],
      time: [""],
      // team: [""],
      nbSupport: [null],
      department: ["", Validators.required],
      nodeA: ["", Validators.required],
      nodeB: [[]],
    });
    let paramId = this.route.snapshot.paramMap.get("id");
    if (paramId) {
      this.service.EditeMode = true;

      service.getByKey(Number(paramId)).subscribe((obj) => {
        this.service.existingVisit = obj;
        this.id = String(obj.id);

        // fill ng-select
        // service.loadTeams(obj.team ? [obj.team] : []);
        service.loadANodes(obj.node_a ? [obj.node_a] : []);
        service.loadBNodes(obj.node_b ? obj.node_b : []);

        // date / time start
        let time = null; let date = null;
        if (obj.date) {
          date = parseDate(obj.date);
          time = timeObject(date);
        }

        // date: obj.date ?  dateObject(new Date(obj.date)) : null,
        service.visiteForm.patchValue({
          date: dateObject(date),
          time: time,
          // team: obj.team ? obj.team["@id"] : null,
          department: obj.node_a.department ? obj.node_a.department["@id"] : null,
          nodeA: obj.node_a ? obj.node_a["@id"] : null,
          nbSupport: obj.nbSupport ? obj.nbSupport : 0,
          nodeB: obj.node_b.length ? obj.node_b.map((e) => e["@id"]) : [],
        });
        this.currentEdge = {
          ANode: this.service.ANode.value,
          BNode: this.service.BNode.value,
          department: obj.node_a.department["@id"],
          type: true,
          date: obj.date

        }

        this.formListeners();
      });

    } else {
      let d = new Date();
      let currentTime = timeObject(d);
      let today = dateObject(d);
      service.visiteForm.patchValue({
        date: today,
        time: currentTime,
      });
      service.loadANodes();
      service.loadBNodes();
      this.formListeners();
    }

  }

  // Validation && Alerts
  AlertANodeChange() {
    this.addAlert("En changeant le PS, les champs tronçons d'anomalies seront réinitialisés.", "warning")
  }

  AlertDeparChange() {
    let anode = this.service.ANode.value;
    let bnode = this.service.BNode.value;

    let hasNonEmptyNodes = (anode && anode.trim() !== '') || (bnode && bnode.length !== 0);
    let hasNonEmptyEdges = this.hasNonEmptyEdges;
    (hasNonEmptyNodes || hasNonEmptyNodes) && this.addAlert(`En changeant le département, les champs ${hasNonEmptyNodes ? "appareils de coupure" : ""}${hasNonEmptyNodes && hasNonEmptyEdges ? " et " : ""}${hasNonEmptyEdges ? "tronçons d'anomalies" : ""} seront réinitialisés.`, "warning")
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

  formListeners() {
    let na = this.service.ANode;
    let nb = this.service.BNode;
    let dp = this.service.department;
    let date = this.service.date;

    // on change ANode -> reset && reload edges and anomalies
    na.valueChanges.subscribe(() => {
      // reset anomalies edges
      this.anomalies.controls.forEach((control) => {
        control.get('edge').reset();
      });
    });

    [nb, na, date].forEach(input => {
      input.valueChanges.subscribe(() => {
        this.currentEdge = {
          ANode: na.value,
          BNode: nb.value,
          department: dp.value,
          type: true,
          date: date.value
        };
      });
    });

    // on change depar > reset edges  
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

  // logger(sa){console.log(sa);}
}

