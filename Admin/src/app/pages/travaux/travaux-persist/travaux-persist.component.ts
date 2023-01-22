import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { merge } from "rxjs";
import { Anomalie, Travaux, User } from "src/app/core/models";
import { AuthenticationService } from "src/app/core/services/auth.service";
import { travauxService } from "../travaux.service";

const zeroPad = num => String(num).padStart(2, '0');
const parseDate = d => new Date(Date.parse(d))
const timeObject = d => { return { hour: d.getHours(), minute: d.getMinutes(), second: d.getSeconds() } };
const dateObject = d => { return { year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate() } };
const timeTostring = time => zeroPad(time.hour) + ':' + zeroPad(time.minute) + ':' + zeroPad(time.second);
@Component({
  selector: "app-travaux-persist",
  templateUrl: "./travaux-persist.component.html",
})
export class travauxPersistComponent {
  breadCrumbItems: Array<{}>;
  dateStart: string = "";
  dateEnd: string = "";
  id: string;
  EditeMode: boolean = false;
  currentUser: User;
  anomalies: Anomalie[] = [];

  constructor(private route: ActivatedRoute, private fb: FormBuilder, public service: travauxService, private authService: AuthenticationService) {
    this.currentUser = authService.currentUserValue;
    this.breadCrumbItems = [{ label: 'Travaux' }, { label: 'Nouvelle interruption', active: true }];

    service.travauxForm = this.fb.group({
      date: [""],
      dateStart: [""],
      dateEnd: [""],
      causes: [""],
      source: ["1"],
      ps: [""],
      type: [null],
      departement: [""],
      appareil: [""],
    });

    let paramId = this.route.snapshot.paramMap.get("id");
    if (paramId) {
      this.id = this.route.snapshot.paramMap.get('id');
      this.EditeMode = true;

      service.getByKey(Number(this.id)).subscribe((obj) => {
        this.service.interruption = obj;

        // fill ng-select
        service.loadDepartements(obj.departement ? [obj.departement] : []);
        service.loadAppareils(obj.appareil ? [obj.appareil] : []);
        service.loadPs(obj.ps ? [obj.ps] : []);

        // date / time start
        let dateStrat = null; let TimeStart = null;
        if(obj.dateStart){
          dateStrat = parseDate(obj.dateStart);
          TimeStart = timeObject(dateStrat);
          this.dateStart = timeTostring(TimeStart);
        }
        // date / time ends
        let TimeEnds = null
        if(obj.dateEnd){
          TimeEnds = timeObject(parseDate(obj.dateEnd));
          this.dateEnd = timeTostring(TimeEnds);
        }

        // patch values
        service.travauxForm.patchValue({
          date: dateObject(dateStrat),
          dateStart: TimeStart,
          dateEnd: TimeEnds ,
          causes: String(obj.causes), // not working !! 
          // source: ,
          type: String(obj.type),
          ps: obj.ps ? obj.ps["@id"] : null,
          departement: obj.departement ? obj.departement["@id"] : null,
          appareil: obj.appareil ? obj.appareil["@id"] : null,
        });
        this.formListeners();
      });

    } else {
      let d = new Date();
      let currentTime = timeObject(d);
      let today = dateObject(d);
      this.dateStart = timeTostring(currentTime);

      service.travauxForm.patchValue({
        date: today,
        dateStart: currentTime,
      });
      service.loadAppareils();
      service.loadPs();
      service.loadDepartements();
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

    merge(
      ...Object.keys(this.service.travauxForm.controls).map(
        k => this.service.travauxForm.controls[k].valueChanges
      )
    ).subscribe((data) => {
      setTimeout(() => {
        // return;
        // create new Taff
        if (!this.EditeMode) {
          this.service.Persist();
          this.EditeMode = true;
        } else {
          // update Taff
          this.service.interruption && this.service.Persist((this.service.interruption as Travaux).id);
        }

      });
    })
  }

  addAnomaly(value: string) {
    !(value === null || value.match(/^ *$/) !== null) && this.anomalies.push({
      checked: false,
      title: value,
      createdBy: "/api/users/" + this.currentUser.id,
    })
  }
  removeAnomaly(value: number) {
    this.anomalies.splice(value, 1);
  }
  checkAnomaly(value: boolean, index: number) {
    this.anomalies[index].checked = value;
  }

}
