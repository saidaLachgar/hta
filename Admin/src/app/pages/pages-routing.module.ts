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
