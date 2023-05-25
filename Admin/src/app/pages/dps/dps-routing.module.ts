import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from 'src/app/core/guards/role.guard';
import { dpsCreateComponent } from './dps-create/dps-create.component';
import { dpsDetailsComponent } from './dps-details/dps-details.component';
import { dpsUpdateComponent } from './dps-update/dps-update.component';
import { dpsListComponent } from './dps-list/dps-list.component';


const routes: Routes = [
  {path: '', component: dpsListComponent, canActivate: [RoleGuard], data: {access: 'dps_show'}},
  {path: 'add', component: dpsCreateComponent, canActivate: [RoleGuard], data: {access: 'dps_add'}},
  {path: 'update/:id', component: dpsUpdateComponent, canActivate: [RoleGuard], data: {access: 'dps_update'}},
  {path: 'details/:id', component: dpsDetailsComponent, canActivate: [RoleGuard], data: {access: 'dps_details'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class dpsRoutingModule { }
