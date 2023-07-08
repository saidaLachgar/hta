import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
})
export class UserProfileComponent {
  breadCrumbItems: Array<{}>;
  id: number;

  constructor(private route: ActivatedRoute, public userService: UserService) {
    this.breadCrumbItems = [{ label: 'Utilisateurs' }, { label: 'Profile', active: true }];
    this.id = JSON.parse(localStorage.getItem("currentUser")).id;


    userService.userForm = new FormGroup(
      {
        fullName: new FormControl('', Validators.required),
        username: new FormControl('', Validators.required),
        roles: new FormControl('', Validators.required),
        team: new FormControl(""),
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        confirmPassword: new FormControl('', [Validators.required]),
      },
      [CustomValidators.MatchValidator('password', 'confirmPassword')]
    );

    this.userService.getByKey(this.id).subscribe((usr) => {
      userService.loadTeams([usr.team]);
      userService.userForm.patchValue({
        fullName: usr.fullName,
        username: usr.username,
        roles: usr.roles.join(''),
        team: usr.team ? usr.team["@id"] : null,
      });
    });
  }
}


export class CustomValidators {
  static MatchValidator(source: string, target: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const sourceCtrl = control.get(source);
      const targetCtrl = control.get(target);

      return sourceCtrl && targetCtrl && sourceCtrl.value !== targetCtrl.value
        ? { mismatch: true }
        : null;
    };
  }
}