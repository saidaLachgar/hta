import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from 'src/app/core/guards/role.guard';
import { missionDetailsComponent } from './mission-details/mission-details.component';
import { missionListComponent } from './mission-list/mission-list.component';
import { missionPersistComponent } from './mission-persist/mission-persist.component';

const routes: Routes = [
  {path: '', component: missionListComponent, canActivate: [RoleGuard], data: {access: 'missions_show'}},
  {path: 'details/:id', component: missionDetailsComponent, canActivate: [RoleGuard], data: {access: 'missions_details'}},
  {path: 'persist/:id/:copy', component: missionPersistComponent, canActivate: [RoleGuard], data: {access: 'missions_update'}},
  {path: 'persist/:id', component: missionPersistComponent, canActivate: [RoleGuard], data: {access: 'missions_update'}},
  {path: 'persist', component: missionPersistComponent, canActivate: [RoleGuard], data: {access: 'missions_add'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class missionRoutingModule { }
