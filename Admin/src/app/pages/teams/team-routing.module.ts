import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from 'src/app/core/guards/role.guard';
import { teamCreateComponent } from './team-create/team-create.component';
import { teamDetailsComponent } from './team-details/team-details.component';
import { teamUpdateComponent } from './team-update/team-update.component';
import { teamsListComponent } from './teams-list/teams-list.component';


const routes: Routes = [
  {path: '', component: teamsListComponent, canActivate: [RoleGuard], data: {access: 'teams_show'}},
  {path: 'add', component: teamCreateComponent, canActivate: [RoleGuard], data: {access: 'teams_add'}},
  {path: 'update/:id', component: teamUpdateComponent, canActivate: [RoleGuard], data: {access: 'teams_update'}},
  {path: 'details/:id', component: teamDetailsComponent, canActivate: [RoleGuard], data: {access: 'teams_details'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class teamRoutingModule { }
