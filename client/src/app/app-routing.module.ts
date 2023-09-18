import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthGuard } from "./core/guards/auth.guard";
import { LayoutComponent } from "./layouts/layout.component";
import { Page404Component } from "./extrapages/page404/page404.component";
import { LoggedInGuard } from "./core/guards/logged-in.guard";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    loadChildren: () =>
      import("./pages/pages.module").then((m) => m.PagesModule),
    canActivate: [AuthGuard],
  },
  {
    path: "account",
    loadChildren: () =>
      import("./account/account.module").then((m) => m.AccountModule),
    canActivate: [LoggedInGuard],
  },
  {
    path: "pages",
    loadChildren: () =>
      import("./extrapages/extrapages.module").then((m) => m.ExtrapagesModule),
    canActivate: [AuthGuard]
  },
  { path: "**", component: Page404Component },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,  { 
      useHash: true,
      scrollPositionRestoration: "top",
      relativeLinkResolution: "legacy",
      anchorScrolling: 'enabled',
      scrollOffset: [0, 80] 
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
