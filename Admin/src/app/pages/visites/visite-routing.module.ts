import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from 'src/app/core/guards/role.guard';
import { visiteCreateComponent } from './visite-create/visite-create.component';
import { visiteDetailsComponent } from './visite-details/visite-details.component';
import { visiteUpdateComponent } from './visite-update/visite-update.component';
import { visitesListComponent } from './visites-list/visites-list.component';



const routes: Routes = [
  {path: '', component: visitesListComponent, canActivate: [RoleGuard], data: {access: 'visites_show'}},
  {path: 'add', component: visiteCreateComponent, canActivate: [RoleGuard], data: {access: 'visites_add'}},
  {path: 'update/:id', component: visiteUpdateComponent, canActivate: [RoleGuard], data: {access: 'visites_update'}},
  {path: 'details/:id', component: visiteDetailsComponent, canActivate: [RoleGuard], data: {access: 'visites_details'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class visiteRoutingModule { }
