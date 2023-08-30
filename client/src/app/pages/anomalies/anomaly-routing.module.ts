import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from 'src/app/core/guards/role.guard';
import { anomalyCreateComponent } from './anomaly-create/anomaly-create.component';
import { anomalyDetailsComponent } from './anomaly-details/anomaly-details.component';
import { anomalyUpdateComponent } from './anomaly-update/anomaly-update.component';
import { anomaliesListComponent } from './anomalies-list/anomalies-list.component';



const routes: Routes = [
  {path: '', component: anomaliesListComponent, canActivate: [RoleGuard], data: {access: 'anomalies_show'}},
  {path: 'add', component: anomalyCreateComponent, canActivate: [RoleGuard], data: {access: 'anomalies_add'}},
  {path: 'update/:id', component: anomalyUpdateComponent, canActivate: [RoleGuard], data: {access: 'anomalies_update'}},
  {path: 'details/:id', component: anomalyDetailsComponent, canActivate: [RoleGuard], data: {access: 'anomalies_details'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class anomalyRoutingModule { }
