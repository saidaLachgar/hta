import { Component } from "@angular/core";
import { UserService } from "../user.service";
import { FormBuilder } from "@angular/forms";
import { AuthenticationService } from "src/app/core/services/auth.service";
import { NgSelectConfig } from "@ng-select/ng-select";

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
})
export class UsersListComponent {
  breadCrumbItems: Array<{}>;

  constructor(
    public userService: UserService,
    private fb: FormBuilder,
    private config: NgSelectConfig,
    public authService: AuthenticationService
  ) {
    this.userService.findAll();
    userService.loadTeams();
    userService.userForm = this.fb.group({
      fullName: [""],
      username: [""],
      roles: [""],
      "team.id[]": [""],
    });

    config.notFoundText = "Aucune donnée trouvée !";
  }
}
