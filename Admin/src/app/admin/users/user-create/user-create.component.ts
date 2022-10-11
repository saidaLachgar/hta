import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { HotToastService } from '@ngneat/hot-toast';

import { User } from 'src/app/core/models';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
})
export class UserCreateComponent implements OnInit {
  loading$: Observable<boolean>;
  breadCrumbItems: Array<{}>;
  public form: FormGroup;

  constructor(private fb: FormBuilder, public userService: UserService, private toast: HotToastService) { 
    this.form = this.fb.group({
      fullName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      roles: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loading$ = this.userService.loading$;
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
    this.userService.add(user).subscribe({
      error: () => toast.error('un problème est survenu, veuillez réessayer'),
      complete() {
        form.reset();
        toast.success('Utilisateur ajouté avec succès');
      }
    })
  }

}
