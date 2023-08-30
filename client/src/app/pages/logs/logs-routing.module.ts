import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from 'src/app/core/guards/role.guard';
import { LogsComponent } from './logs-list.component';


const routes: Routes = [
  {path: '', component: LogsComponent, canActivate: [RoleGuard], data: {access: 'logs_show'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
