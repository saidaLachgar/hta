import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from 'src/app/core/guards/role.guard';
import { departementCreateComponent } from './departement-create/departement-create.component';
import { departementDetailsComponent } from './departement-details/departement-details.component';
import { departementUpdateComponent } from './departement-update/departement-update.component';
import { departementsListComponent } from './departements-list/departements-list.component';


const routes: Routes = [
  {path: '', component: departementsListComponent, canActivate: [RoleGuard], data: {access: 'departements_show'}},
  {path: 'add', component: departementCreateComponent, canActivate: [RoleGuard], data: {access: 'departements_add'}},
  {path: 'update/:id', component: departementUpdateComponent, canActivate: [RoleGuard], data: {access: 'departements_update'}},
  {path: 'details/:id', component: departementDetailsComponent, canActivate: [RoleGuard], data: {access: 'departements_details'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class departementRoutingModule { }
