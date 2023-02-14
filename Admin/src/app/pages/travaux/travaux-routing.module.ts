import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from 'src/app/core/guards/role.guard';
import { travauxDetailsComponent } from './travaux-details/travaux-details.component';
import { travauxListComponent } from './travaux-list/travaux-list.component';
import { travauxPersistComponent } from './travaux-persist/travaux-persist.component';


const routes: Routes = [
  {path: '', component: travauxListComponent, canActivate: [RoleGuard], data: {access: 'travaux_show'}},
  {path: 'details/:id', component: travauxDetailsComponent, canActivate: [RoleGuard], data: {access: 'travaux_details'}},
  {path: 'persist/:id/:copy', component: travauxPersistComponent, canActivate: [RoleGuard], data: {access: 'travaux_update'}},
  {path: 'persist/:id', component: travauxPersistComponent, canActivate: [RoleGuard], data: {access: 'travaux_update'}},
  {path: 'persist', component: travauxPersistComponent, canActivate: [RoleGuard], data: {access: 'travaux_add'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class travauxRoutingModule { }
