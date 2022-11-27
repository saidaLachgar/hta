import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './dashboards/default/default.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DefaultComponent },
  {
    path: "users",
    loadChildren: () =>
      import("./users/user.module").then((m) => m.userModule),
  },
  {
    path: "teams",
    loadChildren: () =>
      import("./teams/team.module").then((m) => m.teamModule),
  },
  {
    path: "departements",
    loadChildren: () =>
      import("./departements/departement.module").then((m) => m.departementModule),
  },
  {
    path: "communes",
    loadChildren: () =>
      import("./communes/commune.module").then((m) => m.communeModule),
  },
  {
    path: "autorisation",
    loadChildren: () =>
      import("./UserPermissions/user-permissions.module").then((m) => m.UserPermissionsModule),
  },
  {
    path: "historique",
    loadChildren: () =>
      import("./logs/logs.module").then((m) => m.LogsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
