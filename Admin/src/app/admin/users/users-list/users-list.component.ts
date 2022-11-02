import { Component } from "@angular/core";
import { UserService } from "../user.service";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
})
export class UsersListComponent {
  breadCrumbItems: Array<{}>;
  public hideExport = true;

  constructor(public userService: UserService, private fb: FormBuilder) {
    this.userService.findAll();
    userService.userForm = this.fb.group({
      fullName: [""],
      username: [""],
      roles: [""],
    });
  }
}
