import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Anomaly, Mission, User } from "src/app/core/models";
import { AuthenticationService } from "src/app/core/services/auth.service";
import { missionService } from "../mission.service";

const zeroPad = num => String(num).padStart(2, '0');
const parseDate = d => new Date(Date.parse(d))
const timeObject = d => { return { hour: d.getHours(), minute: d.getMinutes(), second: d.getSeconds() } };
const dateObject = d => { return { year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate() } };
const timeTostring = time => zeroPad(time.hour) + ':' + zeroPad(time.minute) + ':' + zeroPad(time.second);
@Component({
  selector: "app-mission-persist",
  templateUrl: "./mission-persist.component.html",
})
export class missionPersistComponent {
  breadCrumbItems: Array<{}>;
  dateStart: string = "";
  dateEnd: string = "";
  showError: boolean = false;
  id: string;
  EditeMode: boolean = false;
  currentUser: User;
  anomalies: Anomaly[] = [];

  constructor(private route: ActivatedRoute, private fb: FormBuilder, public service: missionService, private authService: AuthenticationService) {
    this.currentUser = authService.currentUserValue;
    this.breadCrumbItems = [{ label: 'Travaux' }, { label: 'Nouveaux travaux', active: true }];

    service.missionForm = this.fb.group({
      date: [""],
      dateStart: [""],
      dateEnd: [""],
      causes: [""],
      nodeA: ["", Validators.required],
      nodeB: [[]],
      type: [null],
      department: [""],
      node: [""],
    });

    let paramId = this.route.snapshot.paramMap.get("id");
    let copy = this.route.snapshot.paramMap.get("copy");

    if (paramId) {
      this.EditeMode = true;

      let getItem = copy ? service.clone(paramId) : service.getByKey(Number(paramId));
      getItem.subscribe((obj) => {
        this.service.interruption = obj;
        this.id = String(obj.id);

        // fill ng-select
        service.loadDepartments(obj.node_a.department ? [obj.node_a.department] : []);
        service.loadANodes(obj.node_a ? [obj.node_a] : []);
        service.loadBNodes(obj.node_b ? obj.node_b : []);

        // date / time start
        let dateStrat = null; let TimeStart = null;
        if (obj.dateStart) {
          dateStrat = parseDate(obj.dateStart);
          TimeStart = timeObject(dateStrat);
          this.dateStart = timeTostring(TimeStart);
        }
        // date / time ends
        let TimeEnds = null
        if (obj.dateEnd) {
          TimeEnds = timeObject(parseDate(obj.dateEnd));
          this.dateEnd = timeTostring(TimeEnds);
        }

        // patch values
        service.missionForm.patchValue({
          date: dateObject(dateStrat),
          dateStart: TimeStart,
          dateEnd: TimeEnds,
          causes: String(obj.causes), // not working !! 
          // source: ,
          type: String(obj.type),
          department: obj.node_a.department ? obj.node_a.department["@id"] : null,
          node_a: obj.node_a ? obj.node_a["@id"] : null,
          node_b: obj.node_b.length ? obj.node_b.map((e) => e["@id"]) : [],
        });
        this.formListeners();
      });

    } else {
      let d = new Date();
      let currentTime = timeObject(d);
      let today = dateObject(d);
      this.dateStart = timeTostring(currentTime);

      service.missionForm.patchValue({
        date: today,
        dateStart: currentTime,
      });
      service.loadANodes();
      service.loadBNodes();
      service.loadDepartments();
      this.formListeners();
    }

  }


  formListeners() {
    this.service.dateStart.valueChanges.subscribe(value => {
      value && (this.dateStart = timeTostring(value));
    });
    this.service.dateEnd.valueChanges.subscribe(value => {
      value && (this.dateEnd = timeTostring(value));
    });

    // merge(
    //   ...Object.keys(this.service.missionForm.controls).map(
    //     k => this.service.missionForm.controls[k].valueChanges
    //   )
    // ).subscribe((data) => {
    //   setTimeout(() => {
    //     // return;
    //     // create new Taff


    //   });
    // })
  }

  Submit(Action) {
    if (!this.EditeMode) {
      this.service.Persist(null, Action);
      this.EditeMode = Action == 'EDIT';
    } else {
      // update Taff
      this.service.interruption && this.service.Persist((this.service.interruption as Mission).id, Action);
    }
  }

  addAnomaly(value: string) {
    !(value === null || value.match(/^ *$/) !== null) && this.anomalies.push({
      status: false,
      title: value,
      createdBy: "/api/users/" + this.currentUser.id,
    })
  }
  removeAnomaly(value: number) {
    this.anomalies.splice(value, 1);
  }
  checkAnomaly(value: boolean, index: number) {
    this.anomalies[index].status = value;
  }

}
