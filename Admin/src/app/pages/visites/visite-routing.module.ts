import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from 'src/app/core/guards/role.guard';
// import { VisiteCreateComponent } from './visite-create/visite-create.component';
// import { VisiteDetailsComponent } from './visite-details/visite-details.component';
// import { VisiteUpdateComponent } from './visite-update/visite-update.component';
import { VisitesListComponent } from './visites-list/visites-list.component';


const routes: Routes = [
  {path: '', component: VisitesListComponent, canActivate: [RoleGuard], data: {access: 'visites_show'}},
  // {path: 'add', component: VisiteCreateComponent, canActivate: [RoleGuard], data: {access: 'visites_add'}},
  // {path: 'update/:id', component: VisiteUpdateComponent, canActivate: [RoleGuard], data: {access: 'visites_update'}},
  // {path: 'details/:id', component: VisiteDetailsComponent, canActivate: [RoleGuard], data: {access: 'visites_details'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisiteRoutingModule { }
