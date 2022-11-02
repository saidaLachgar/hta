import { Component } from '@angular/core';
import {  FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
})
export class UserUpdateComponent {
  breadCrumbItems: Array<{}>;
  id: number;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, public userService: UserService) { 
    this.breadCrumbItems = [{ label: 'Utilisateurs' }, { label: 'Mettre à jour l\'utilisateur', active: true }];
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    userService.userForm = this.fb.group({
      fullName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      roles: ['', Validators.required],
    });
    this.userService.getByKey(this.id).subscribe((usr) => {
      userService.userForm.setValue({
        fullName : usr.fullName,
        username : usr.username,
        password : "",
        roles : usr.roles.join(''),
      });
    });
  }
}
