
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from 'src/app/core/guards/role.guard';
import { UserPermissionsComponent } from './user-permissions.component';

const routes: Routes = [
    {path: '', component: UserPermissionsComponent, canActivate: [RoleGuard], data: {access: 'autorisation_show'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPermissionsRoutingModule { }
