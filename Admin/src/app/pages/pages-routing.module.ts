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
    path: "postes",
    loadChildren: () =>
      import("./postes/poste.module").then((m) => m.posteModule),
  },
  {
    path: "appareils",
    loadChildren: () =>
      import("./appareils/appareil.module").then((m) => m.appareilModule),
  },
  {
    path: "communes",
    loadChildren: () =>
      import("./communes/commune.module").then((m) => m.communeModule),
  },
  {
    path: "visites",
    loadChildren: () =>
      import("./visites/visite.module").then((m) => m.visiteModule),
  },
  {
    path: "travaux",
    loadChildren: () =>
      import("./travaux/travaux.module").then((m) => m.travauxModule),
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
