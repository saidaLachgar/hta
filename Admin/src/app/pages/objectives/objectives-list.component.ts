import { Component } from "@angular/core";
import { ObjectivesService } from "./objectives.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-objectives-list",
  templateUrl: "./objectives-list.component.html",
})
export class ObjectivesComponent {
  breadCrumbItems: Array<{}>;
  data$: Observable<any[]>;
  months: string[];
  current_year: number;

  constructor( public service:ObjectivesService ) {
    this.months = ["Janv.","Févr.","Mars","Avr.","Mai","Juin","Juill.","Août","Sept.","Oct.","Nov.","Déc."];
    this.current_year = new Date().getFullYear();
    this.data$ = service.getData(this.current_year);
  }

  updateAchievement(achievement_id){

  }
  addAchievement(month, goal_id ){

  }

}

