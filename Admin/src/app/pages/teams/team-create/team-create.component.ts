import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { teamService } from "../team.service";
@Component({
  selector: "app-team-create",
  templateUrl: "./team-create.component.html",
})
export class teamCreateComponent {
  breadCrumbItems: Array<{}>;
  
  constructor(private fb: FormBuilder, public teamService: teamService) {
    this.breadCrumbItems = [{ label: 'Utilisateurs' }, { label: 'Nouvel utilisateur', active: true }];
    teamService.loadMembers();
    teamService.loadDepartements();
    teamService.teamForm = this.fb.group({
      titre: ["", Validators.required],
      departements: [[]],
      membres: [[]],
    });
  }
}
