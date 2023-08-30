import { Component } from "@angular/core";

import { ActivatedRoute } from "@angular/router";
import { GoalGroup } from "src/app/core/models";
import { AuthenticationService } from "src/app/core/services/auth.service";
import { goalGroupService } from "../goal-group.service";

@Component({
  selector: "app-goal-group-details",
  templateUrl: "./goal-group-details.component.html",
})
export class goalGroupDetailsComponent {
  goalGroup: GoalGroup;
  breadCrumbItems: Array<{}>;

  constructor(
    private route: ActivatedRoute,
    public goalGroupService: goalGroupService,
    public authService: AuthenticationService,
  ) {
    let id = route.snapshot.paramMap.get("id");
    goalGroupService.getByKey(id).subscribe(obj => this.goalGroup = obj);
  }
}
