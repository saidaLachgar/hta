import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from 'src/app/core/guards/role.guard';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UsersListComponent } from './users-list/users-list.component';


const routes: Routes = [
  {path: '', component: UsersListComponent, canActivate: [RoleGuard], data: {access: 'users_show'}},
  {path: 'add', component: UserCreateComponent, canActivate: [RoleGuard], data: {access: 'users_add'}},
  {path: 'update/:id', component: UserUpdateComponent, canActivate: [RoleGuard], data: {access: 'users_update'}},
  {path: 'details/:id', component: UserDetailsComponent, canActivate: [RoleGuard], data: {access: 'users_details'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
