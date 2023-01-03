import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { merge } from "rxjs";
import { Anomalie, Travaux, User } from "src/app/core/models";
import { AuthenticationService } from "src/app/core/services/auth.service";
import { travauxService } from "../travaux.service";

const zeroPad = num => String(num).padStart(2, '0');
const timeTostring = time => zeroPad(time.hour) + ':' + zeroPad(time.minute) + ':' + zeroPad(time.second);

@Component({
  selector: "app-travaux-create",
  templateUrl: "./travaux-create.component.html",
})
export class travauxCreateComponent implements OnInit {
  breadCrumbItems: Array<{}>;
  dateStart: string = "";
  dateEnd: string = "";
  EditeMode: boolean = false;
  currentUser: User;
  anomalies: Anomalie[] = [];

  constructor(private fb: FormBuilder, public service: travauxService, private authService: AuthenticationService) {
    this.currentUser = authService.currentUserValue;
    this.breadCrumbItems = [{ label: 'Travaux' }, { label: 'Nouvelle interruption', active: true }];
    let d = new Date();
    let currentTime = { hour: d.getHours(), minute: d.getMinutes(), second: d.getSeconds() };
    let today = { year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate() };
    this.dateStart = timeTostring(currentTime);

    service.loadAppareils();
    service.loadDepartements();
    service.travauxForm = this.fb.group({
      date: [today],
      dateStart: [currentTime],
      dateEnd: [""],
      causes: [null],
      source: ["1"],
      ps: [""],
      type: [null],
      departement: [""],
      appareil: [""],
    });
    // service.initialValues = service.travauxForm.value;
    // service.dateStart.setValue();
  }

  ngOnInit() {
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
