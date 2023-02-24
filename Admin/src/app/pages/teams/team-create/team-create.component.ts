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
    this.breadCrumbItems = [{ label: 'Équipes' }, { label: 'Nouvelle équipe', active: true }];
    teamService.loadMembers();
    teamService.loadDepartments();
    teamService.teamForm = this.fb.group({
      titre: ["", Validators.required],
      departments: [[]],
      membres: [[]],
    });
  }
}
