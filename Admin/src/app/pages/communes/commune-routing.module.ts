import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from 'src/app/core/guards/role.guard';
import { communeDetailsComponent } from './commune-details/commune-details.component';
import { communesListComponent } from './communes-list/communes-list.component';


const routes: Routes = [
  {path: '', component: communesListComponent, canActivate: [RoleGuard], data: {access: 'communes_show'}},
  {path: 'details/:id', component: communeDetailsComponent, canActivate: [RoleGuard], data: {access: 'communes_details'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class communeRoutingModule { }
