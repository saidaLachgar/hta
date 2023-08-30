import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { NgSelectConfig } from "@ng-select/ng-select";
import { AuthenticationService } from "src/app/core/services/auth.service";
import { goalService } from "../goal.service";

@Component({
  selector: "app-goals-list",
  templateUrl: "./goals-list.component.html",
})
export class goalsListComponent {
  breadCrumbItems: Array<{}>;

  constructor(
    public service: goalService,
    private fb: FormBuilder,
    public authService: AuthenticationService,
    private config: NgSelectConfig
  ) {
    service.findAll();
    service.loadGoalGroups();

    service.goalForm = fb.group({
      name: [''],
      target_years: [''],
      target_achievement: [null],
      "goal_group.id[]": [''],
    });

    config.notFoundText = 'Aucune donnée trouvée !';

  }
}
