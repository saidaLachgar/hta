import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { UserService } from "../user.service";
@Component({
  selector: "app-user-create",
  templateUrl: "./user-create.component.html",
})
export class UserCreateComponent {
  breadCrumbItems: Array<{}>;
  
  constructor(private fb: FormBuilder, public userService: UserService) {
    this.breadCrumbItems = [{ label: 'Utilisateurs' }, { label: 'Nouvel utilisateur', active: true }];
    userService.loadTeams();

    userService.userForm = this.fb.group({
      fullName: ["", Validators.required],
      username: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(6)]],
      roles: ["", Validators.required],
      team: [""],
    });
  }
}
