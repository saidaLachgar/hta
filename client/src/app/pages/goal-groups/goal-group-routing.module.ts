import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from 'src/app/core/guards/role.guard';
import { goalGroupDetailsComponent } from './goal-group-details/goal-group-details.component';
import { goalGroupListComponent } from './goal-groups-list/goal-groups-list.component';


const routes: Routes = [
  {path: '', component: goalGroupListComponent, canActivate: [RoleGuard], data: {access: 'goal_groups_show'}},
  {path: 'details/:id', component: goalGroupDetailsComponent, canActivate: [RoleGuard], data: {access: 'goal_groups_details'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class goalGroupRoutingModule { }
