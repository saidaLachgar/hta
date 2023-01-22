import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { visiteService } from "../visite.service";

@Component({
  selector: "app-visite-create",
  templateUrl: "./visite-create.component.html",
})
export class visiteCreateComponent{
  breadCrumbItems: Array<{}>;
  
  constructor(private fb: FormBuilder, public service: visiteService) {
    this.breadCrumbItems = [{ label: 'Visites' }, { label: 'Nouveau visite', active: true }];
    service.loadDepartements();
    service.loadSources();
    service.loadDestinations();
    service.loadTeams();
    service.visiteForm = this.fb.group({
      date: [""],
      departement: ["", Validators.required],
      source: [""],
      destination: [""],
      nbSupport: [null],
      team: [""],
    });
  }

}
