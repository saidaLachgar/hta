import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { dpsService } from "../dps.service";

@Component({
  selector: "app-dps-create",
  templateUrl: "./dps-create.component.html",
})
export class dpsCreateComponent{
  breadCrumbItems: Array<{}>;
  
  constructor(private fb: FormBuilder, public service: dpsService) {
    this.breadCrumbItems = [{ label: 'Dps' }, { label: 'Nouveau Dps', active: true }];
    service.loadTeams();
    service.dpsForm = this.fb.group({
      titre: ["", Validators.required],
      nbClients: [null],
      team: [[]],
    });
  }

}
