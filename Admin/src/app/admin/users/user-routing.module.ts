import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UsersListComponent } from './users-list/users-list.component';


const routes: Routes = [
  // {path: '', component: 'users'},
  {path: '', component: UsersListComponent},
  {path: 'add', component: UserCreateComponent},
  {path: 'edit/:id', component: UserUpdateComponent},
  // {path: 'users/details/:id', component: userDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
