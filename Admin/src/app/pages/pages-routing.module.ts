import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { DefaultComponent } from './dashboards/default/default.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard' },
  {
    path: "dashboard",
    loadChildren: () =>
      import("./dashboards/dashboards.module").then((m) => m.DashboardsModule),
  },
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
    path: "departments",
    loadChildren: () =>
      import("./departments/department.module").then((m) => m.departmentModule),
  },
  {
    path: "dps",
    loadChildren: () =>
      import("./dps/dps.module").then((m) => m.dpsModule),
  },
  {
    path: "postes",
    loadChildren: () =>
      import("./postes/poste.module").then((m) => m.posteModule),
  },
  {
    path: "nodes",
    loadChildren: () =>
      import("./nodes/node.module").then((m) => m.nodeModule),
  },
  {
    path: "communes",
    loadChildren: () =>
      import("./communes/commune.module").then((m) => m.communeModule),
  },
  {
    path: "edges",
    loadChildren: () =>
      import("./edges/edge.module").then((m) => m.edgeModule),
  },
  {
    path: "anomalies",
    loadChildren: () =>
      import("./anomalies/anomaly.module").then((m) => m.anomalyModule),
  },
  {
    path: "visites",
    loadChildren: () =>
      import("./visites/visite.module").then((m) => m.visiteModule),
  },
  {
    path: "objectives",
    loadChildren: () =>
      import("./objectives/objective.module").then((m) => m.objectiveModule),
  },
  {
    path: "goals",
    loadChildren: () =>
      import("./goals/goal.module").then((m) => m.goalModule),
  },
  {
    path: "goal-group",
    loadChildren: () =>
      import("./goal-groups/goal-group.module").then((m) => m.goalGroupModule),
  },
  {
    path: "mission",
    loadChildren: () =>
      import("./mission/mission.module").then((m) => m.missionModule),
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
  {
    path: "statistiques",
    loadChildren: () =>
      import("./statistiques/statistiques.module").then((m) => m.StatistiquesModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
