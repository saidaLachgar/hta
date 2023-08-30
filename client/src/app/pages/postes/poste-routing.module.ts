import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from 'src/app/core/guards/role.guard';
import { posteCreateComponent } from './poste-create/poste-create.component';
import { posteDetailsComponent } from './poste-details/poste-details.component';
import { posteUpdateComponent } from './poste-update/poste-update.component';
import { postesListComponent } from './postes-list/postes-list.component';


const routes: Routes = [
  {path: '', component: postesListComponent, canActivate: [RoleGuard], data: {access: 'postes_show'}},
  {path: 'add', component: posteCreateComponent, canActivate: [RoleGuard], data: {access: 'postes_add'}},
  {path: 'update/:id', component: posteUpdateComponent, canActivate: [RoleGuard], data: {access: 'postes_update'}},
  {path: 'details/:id', component: posteDetailsComponent, canActivate: [RoleGuard], data: {access: 'postes_details'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class posteRoutingModule { }
