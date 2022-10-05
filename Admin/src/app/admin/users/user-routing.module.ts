import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { SingleUserComponent } from './single-user/single-user.component';
import { UsersListComponent } from './users-list/users-list.component';


const routes: Routes = [
  // {path: '', component: 'users'},
  {path: '', component: UsersListComponent},
  {path: 'users/add', component: AddUserComponent},
  {path: 'users/edit/:id', component: EditUserComponent},
  {path: 'users/details/:id', component: SingleUserComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
