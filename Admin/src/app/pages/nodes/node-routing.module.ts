import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from 'src/app/core/guards/role.guard';
import { nodeCreateComponent } from './node-create/node-create.component';
import { nodeDetailsComponent } from './node-details/node-details.component';
import { nodeUpdateComponent } from './node-update/node-update.component';
import { nodesListComponent } from './nodes-list/nodes-list.component';


const routes: Routes = [
  {path: '', component: nodesListComponent, canActivate: [RoleGuard], data: {access: 'nodes_show'}},
  {path: 'add', component: nodeCreateComponent, canActivate: [RoleGuard], data: {access: 'nodes_add'}},
  {path: 'update/:id', component: nodeUpdateComponent, canActivate: [RoleGuard], data: {access: 'nodes_update'}},
  {path: 'details/:id', component: nodeDetailsComponent, canActivate: [RoleGuard], data: {access: 'nodes_details'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class nodeRoutingModule { }
