import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from 'src/app/core/guards/role.guard';
import { travauxCreateComponent } from './travaux-create/travaux-create.component';
import { travauxDetailsComponent } from './travaux-details/travaux-details.component';
import { travauxListComponent } from './travaux-list/travaux-list.component';
import { travauxUpdateComponent } from './travaux-update/travaux-update.component';


const routes: Routes = [
  {path: '', component: travauxListComponent, canActivate: [RoleGuard], data: {access: 'travaux_show'}},
  {path: 'add', component: travauxCreateComponent, canActivate: [RoleGuard], data: {access: 'travaux_add'}},
  {path: 'update/:id', component: travauxUpdateComponent, canActivate: [RoleGuard], data: {access: 'travaux_update'}},
  {path: 'details/:id', component: travauxDetailsComponent, canActivate: [RoleGuard], data: {access: 'travaux_details'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class travauxRoutingModule { }
