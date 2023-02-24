import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { NgSelectConfig } from "@ng-select/ng-select";
import { AuthenticationService } from "src/app/core/services/auth.service";
import { teamService } from "../team.service";

@Component({
  selector: "app-teams-list",
  templateUrl: "./teams-list.component.html",
})
export class teamsListComponent {
  breadCrumbItems: Array<{}>;

  constructor(
    public teamService: teamService,
    private fb: FormBuilder,
    public authService: AuthenticationService,
    private config: NgSelectConfig
  ) {
    teamService.findAll();
    teamService.loadMembers();
    teamService.loadDepartments();

    teamService.teamForm = fb.group({
      titre: [''],
      "departments.id[]": [''],
      "membres.id[]": [''],
    });

    config.notFoundText = 'Aucune donnée trouvée !';


  }
}
