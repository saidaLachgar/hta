import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AuthenticationService } from "src/app/core/services/auth.service";
import { goalGroupService } from "../goal-group.service";


@Component({
  selector: "app-goal-groups-list",
  templateUrl: "./goal-groups-list.component.html",
})
export class goalGroupListComponent {
  breadCrumbItems: Array<{}>;

  constructor(
    public service: goalGroupService,
    private fb: FormBuilder,
    public authService: AuthenticationService,
  ) {
    service.findAll();
    service.goalGroupForm = fb.group({
      name: [''],
    });
  }
}
