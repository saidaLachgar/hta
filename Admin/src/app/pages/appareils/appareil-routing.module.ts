import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from 'src/app/core/guards/role.guard';
import { appareilCreateComponent } from './appareil-create/appareil-create.component';
import { appareilDetailsComponent } from './appareil-details/appareil-details.component';
import { appareilUpdateComponent } from './appareil-update/appareil-update.component';
import { appareilsListComponent } from './appareils-list/appareils-list.component';


const routes: Routes = [
  {path: '', component: appareilsListComponent, canActivate: [RoleGuard], data: {access: 'appareils_show'}},
  {path: 'add', component: appareilCreateComponent, canActivate: [RoleGuard], data: {access: 'appareils_add'}},
  {path: 'update/:id', component: appareilUpdateComponent, canActivate: [RoleGuard], data: {access: 'appareils_update'}},
  {path: 'details/:id', component: appareilDetailsComponent, canActivate: [RoleGuard], data: {access: 'appareils_details'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class appareilRoutingModule { }
