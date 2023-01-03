import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { NgbDatepickerNavigateEvent } from "@ng-bootstrap/ng-bootstrap";
import * as moment from 'moment';
import { Departement, Poste } from "src/app/core/models";
import { visiteService } from "../visite.service";

interface calendar {
  date?: Date|string;
  day?: string;
  value?: Visite;
}
interface Visite {
  id?: number;
  demandeur?: string;
  posteSource?: Poste;
  departement?: Departement;
  installationDemandee?: string;
  natureTravaux?: string;
  typeIndispo?: string;
  date?:string;
}
moment.locale('fr'); 

@Component({
  selector: "app-visites-list",
  templateUrl: "./visites-list.component.html",
})
export class VisitesListComponent {
  readonly maxYear: number = parseInt(moment().format("YYYY")) + 80;
  readonly minYear: number = parseInt(moment().format("YYYY")) - 80;
  breadCrumbItems: Array<{}>;
  calendar: calendar[] = [];
  form: FormGroup;
  date:moment.Moment = moment();
  month: string = this.date.format("M");
  year: string = this.date.format("YYYY");
  selectedDate: string = this.date.format("MMMM") +" "+ this.year;
  dep: string;
  
  constructor(
    private route: ActivatedRoute,
    public service: visiteService,
    private fb: FormBuilder
  ) {
    let params = this.route.snapshot.paramMap;
    params.get('m') && console.log(params);
    params.get('m') && (this.date = moment(params.get('y')+"-"+params.get('m')+"-01", 'YYYY-MM-DD'))
           && (this.dep = params.get('d'));


    this.form = fb.group({
      month: [this.month],
      year: [this.year],
      departement: ['']
    });

    this.makeCalendar();
    this.fillCalendar();
    console.log(this.calendar);
    service.loadDepartements();
  }

  makeCalendar(date:Date = undefined){
    var a = moment(date).startOf('month');
    var b = moment(date).endOf('month');

    for (var m = moment(a); m.isBefore(b); m.add(1, 'days')) {
        // console.log(m.format('YYYY-MM-DD'));
        this.calendar.push({
          date:  m.format('D/M/YYYY'),
          day:  m.format('dddd'),
        });
    }
  }
  fillCalendar(){
    let data:Visite[] = [
      {
        id:1,
        date:"2022-12-05T17:58:15+00:00",
      },
      {
        id:2,
        date:"2022-12-06T16:58:15+00:00",
      },
      {
        id:3,
        date:"2022-12-07T15:58:15+00:00",
      },
      {
        id:4,
        date:"2022-12-08T14:58:15+00:00",
      },
      {
        id:5,
        date:"2022-12-09T13:58:15+00:00",
      },
      {
        id:6,
        date:"2022-12-10T12:58:15+00:00",
      },
      {
        id:7,
        date:"2022-12-11T11:58:15+00:00",
      },
    ]
    data.forEach(visite => {
      let programmedDate = new Date(visite.date);
      let index = moment(programmedDate).format("D");
      this.calendar[index].value = visite;
    });
    console.log(this.calendar);
  }

  dateNavigate($event: NgbDatepickerNavigateEvent) {
    console.log($event.next.month);
    console.log($event.next.year);
    // old value is contained in $event.current
  }
}
