import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from 'src/app/core/guards/role.guard';
import { visiteDetailsComponent } from './visite-details/visite-details.component';
import { visitesListComponent } from './visites-list/visites-list.component';
import { visitePersistComponent } from './visite-persist/visite-persist.component';



const routes: Routes = [
  {path: '', component: visitesListComponent, canActivate: [RoleGuard], data: {access: 'visites_show'}},
  {path: 'details/:id', component: visiteDetailsComponent, canActivate: [RoleGuard], data: {access: 'visites_details'}},
  {path: 'persist/:id', component: visitePersistComponent, canActivate: [RoleGuard], data: {access: 'visites_update'}},
  {path: 'persist', component: visitePersistComponent, canActivate: [RoleGuard], data: {access: 'visites_add'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class visiteRoutingModule { }
