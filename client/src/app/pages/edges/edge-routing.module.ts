import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from 'src/app/core/guards/role.guard';
import { edgeCreateComponent } from './edge-create/edge-create.component';
import { edgeDetailsComponent } from './edge-details/edge-details.component';
import { edgeUpdateComponent } from './edge-update/edge-update.component';
import { edgesListComponent } from './edges-list/edges-list.component';


const routes: Routes = [
  {path: '', component: edgesListComponent, canActivate: [RoleGuard], data: {access: 'edges_show'}},
  {path: 'add', component: edgeCreateComponent, canActivate: [RoleGuard], data: {access: 'edges_add'}},
  {path: 'update/:id', component: edgeUpdateComponent, canActivate: [RoleGuard], data: {access: 'edges_update'}},
  {path: 'details/:id', component: edgeDetailsComponent, canActivate: [RoleGuard], data: {access: 'edges_details'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class edgeRoutingModule { }
