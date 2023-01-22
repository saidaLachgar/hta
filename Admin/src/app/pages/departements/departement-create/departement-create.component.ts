import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { departementService } from "../departement.service";

@Component({
  selector: "app-departement-create",
  templateUrl: "./departement-create.component.html",
})
export class departementCreateComponent{
  breadCrumbItems: Array<{}>;
  
  constructor(private fb: FormBuilder, public service: departementService) {
    this.breadCrumbItems = [{ label: 'Départements' }, { label: 'Nouveau Départ', active: true }];
    service.loadTeams();
    service.departementForm = this.fb.group({
      titre: ["", Validators.required],
      team: [""],
      longueur: [null],
    });
  }

}
