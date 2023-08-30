import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from 'src/app/core/guards/role.guard';
import { goalCreateComponent } from './goal-create/goal-create.component';
import { goalDetailsComponent } from './goal-details/goal-details.component';
import { goalUpdateComponent } from './goal-update/goal-update.component';
import { goalsListComponent } from './goals-list/goals-list.component';


const routes: Routes = [
  {path: '', component: goalsListComponent, canActivate: [RoleGuard], data: {access: 'goals_show'}},
  {path: 'add', component: goalCreateComponent, canActivate: [RoleGuard], data: {access: 'goals_add'}},
  {path: 'update/:id', component: goalUpdateComponent, canActivate: [RoleGuard], data: {access: 'goals_update'}},
  {path: 'details/:id', component: goalDetailsComponent, canActivate: [RoleGuard], data: {access: 'goals_details'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class goalRoutingModule { }
