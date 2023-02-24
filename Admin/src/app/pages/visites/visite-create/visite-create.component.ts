import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { visiteService } from "../visite.service";

@Component({
  selector: "app-visite-create",
  templateUrl: "./visite-create.component.html",
})
export class visiteCreateComponent{
  breadCrumbItems: Array<{}>;
  showError: boolean = false;
  
  constructor(private fb: FormBuilder, public service: visiteService) {
    this.breadCrumbItems = [{ label: 'Visites' }, { label: 'Nouveau visite', active: true }];
    service.loadDepartments();
    service.loadANodes();
    service.loadBNodes();
    service.loadTeams();
    service.visiteForm = this.fb.group({
      date: [""],
      team: [""],
      nbSupport: [null],
      department: ["", Validators.required],
      nodeA: ["", Validators.required],
      nodeB: [[]],

    });
  }

}

