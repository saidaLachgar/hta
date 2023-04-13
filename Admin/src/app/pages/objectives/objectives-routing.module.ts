import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from 'src/app/core/guards/role.guard';
import { ObjectivesComponent } from './objectives-list.component';


const routes: Routes = [
  {path: '', component: ObjectivesComponent, canActivate: [RoleGuard], data: {access: 'objectives_show'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
