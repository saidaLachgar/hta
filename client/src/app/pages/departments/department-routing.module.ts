import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from 'src/app/core/guards/role.guard';
import { departmentCreateComponent } from './department-create/department-create.component';
import { departmentDetailsComponent } from './department-details/department-details.component';
import { departmentUpdateComponent } from './department-update/department-update.component';
import { departmentsListComponent } from './departments-list/departments-list.component';


const routes: Routes = [
  {path: '', component: departmentsListComponent, canActivate: [RoleGuard], data: {access: 'departments_show'}},
  {path: 'add', component: departmentCreateComponent, canActivate: [RoleGuard], data: {access: 'departments_add'}},
  {path: 'update/:id', component: departmentUpdateComponent, canActivate: [RoleGuard], data: {access: 'departments_update'}},
  {path: 'details/:id', component: departmentDetailsComponent, canActivate: [RoleGuard], data: {access: 'departments_details'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class departmentRoutingModule { }
