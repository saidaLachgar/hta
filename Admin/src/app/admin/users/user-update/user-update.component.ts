import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { HotToastService } from '@ngneat/hot-toast';

import { User } from 'src/app/core/models';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
})
export class UserUpdateComponent implements OnInit {
  loading$: Observable<boolean>;
  user: User;
  breadCrumbItems: Array<{}>;
  public form: FormGroup;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, public userService: UserService, private toast: HotToastService) { 
    this.form = this.fb.group({
      fullName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      roles: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loading$ = this.userService.loading$;
    let id = this.route.snapshot.paramMap.get('id');
    this.userService.getByKey(id).subscribe((usr) => {
      this.user = usr;
      this.form.setValue({
        fullName : usr.fullName,
        username : usr.username,
        password : "",
        roles : usr.roles.join(''),
      });
    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    let form = this.form;
    let toast = this.toast;
    
    if (form.invalid) {
      form.markAllAsTouched();
      return;
    }

    let user = form.value as User;
    user.roles = [user.roles.toString()];
    user.id = this.user.id;
    this.userService.update(user).subscribe({
      error: () => toast.error('un problème est survenu, veuillez réessayer'),
      complete() {
        toast.success('L\'utilisateur a été mis à jour avec succès');
      }
    })
  }

}
