"use strict";
(self["webpackChunkskote"] = self["webpackChunkskote"] || []).push([["src_app_pages_pages_module_ts"],{

/***/ 64205:
/*!***********************************************!*\
  !*** ./src/app/pages/pages-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesRoutingModule": () => (/* binding */ PagesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);



// import { DefaultComponent } from './dashboards/default/default.component';
const routes = [
    { path: '', redirectTo: 'dashboard' },
    {
        path: "dashboard",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("default-node_modules_ng-apexcharts___ivy_ngcc___fesm2015_ng-apexcharts_js"), __webpack_require__.e("src_app_pages_dashboards_dashboards_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./dashboards/dashboards.module */ 77480)).then((m) => m.DashboardsModule),
    },
    {
        path: "users",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("src_app_pages_users_user_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./users/user.module */ 27965)).then((m) => m.userModule),
    },
    {
        path: "teams",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("default-src_app_pages_teams_team_service_ts"), __webpack_require__.e("src_app_pages_teams_team_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./teams/team.module */ 46561)).then((m) => m.teamModule),
    },
    {
        path: "departments",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("default-node_modules_ngx-lightbox___ivy_ngcc___index_js-src_app_core_guards_role_guard_ts-src-e668ec"), __webpack_require__.e("src_app_pages_departments_department_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./departments/department.module */ 89249)).then((m) => m.departmentModule),
    },
    {
        path: "dps",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("default-node_modules_ngx-lightbox___ivy_ngcc___index_js-src_app_core_guards_role_guard_ts-src-e668ec"), __webpack_require__.e("src_app_pages_dps_dps_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./dps/dps.module */ 52634)).then((m) => m.dpsModule),
    },
    {
        path: "postes",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("src_app_pages_postes_poste_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./postes/poste.module */ 90294)).then((m) => m.posteModule),
    },
    {
        path: "nodes",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("default-src_app_core_guards_role_guard_ts-src_app_pages_nodes_node_service_ts"), __webpack_require__.e("src_app_pages_nodes_node_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./nodes/node.module */ 69009)).then((m) => m.nodeModule),
    },
    {
        path: "communes",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("src_app_pages_communes_commune_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./communes/commune.module */ 36387)).then((m) => m.communeModule),
    },
    {
        path: "edges",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("default-src_app_core_guards_role_guard_ts-src_app_pages_nodes_node_service_ts"), __webpack_require__.e("default-src_app_pages_edges_edge_service_ts"), __webpack_require__.e("src_app_pages_edges_edge_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./edges/edge.module */ 67331)).then((m) => m.edgeModule),
    },
    {
        path: "anomalies",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("default-node_modules_ng-apexcharts___ivy_ngcc___fesm2015_ng-apexcharts_js"), __webpack_require__.e("default-src_app_core_guards_role_guard_ts-src_app_pages_nodes_node_service_ts"), __webpack_require__.e("default-src_app_pages_edges_edge_service_ts"), __webpack_require__.e("default-node_modules_ngx-ui-switch___ivy_ngcc___ui-switch_es2015_js-src_app_pages_anomalies_a-93b9d7"), __webpack_require__.e("src_app_pages_anomalies_anomaly_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./anomalies/anomaly.module */ 80642)).then((m) => m.anomalyModule),
    },
    {
        path: "visites",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("default-node_modules_ng-apexcharts___ivy_ngcc___fesm2015_ng-apexcharts_js"), __webpack_require__.e("default-src_app_core_guards_role_guard_ts-src_app_pages_nodes_node_service_ts"), __webpack_require__.e("default-src_app_pages_edges_edge_service_ts"), __webpack_require__.e("default-node_modules_ngx-ui-switch___ivy_ngcc___ui-switch_es2015_js-src_app_pages_anomalies_a-93b9d7"), __webpack_require__.e("default-src_app_pages_related-anomalies_related-anomalies_module_ts"), __webpack_require__.e("src_app_pages_visites_visite_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./visites/visite.module */ 70337)).then((m) => m.visiteModule),
    },
    {
        path: "objectives",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("default-src_app_core_guards_role_guard_ts-src_app_pages_goals_goal_service_ts"), __webpack_require__.e("src_app_pages_objectives_objective_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./objectives/objective.module */ 40101)).then((m) => m.objectiveModule),
    },
    {
        path: "goals",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("default-src_app_core_guards_role_guard_ts-src_app_pages_goals_goal_service_ts"), __webpack_require__.e("src_app_pages_goals_goal_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./goals/goal.module */ 70361)).then((m) => m.goalModule),
    },
    {
        path: "goal-group",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("src_app_pages_goal-groups_goal-group_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./goal-groups/goal-group.module */ 39259)).then((m) => m.goalGroupModule),
    },
    {
        path: "mission",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("default-node_modules_ng-apexcharts___ivy_ngcc___fesm2015_ng-apexcharts_js"), __webpack_require__.e("default-src_app_core_guards_role_guard_ts-src_app_pages_nodes_node_service_ts"), __webpack_require__.e("default-src_app_pages_edges_edge_service_ts"), __webpack_require__.e("default-node_modules_ngx-ui-switch___ivy_ngcc___ui-switch_es2015_js-src_app_pages_anomalies_a-93b9d7"), __webpack_require__.e("default-src_app_pages_related-anomalies_related-anomalies_module_ts"), __webpack_require__.e("src_app_pages_mission_mission_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./mission/mission.module */ 9651)).then((m) => m.missionModule),
    },
    {
        path: "autorisation",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("src_app_pages_UserPermissions_user-permissions_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./UserPermissions/user-permissions.module */ 80073)).then((m) => m.UserPermissionsModule),
    },
    {
        path: "historique",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("src_app_pages_logs_logs_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./logs/logs.module */ 4248)).then((m) => m.LogsModule),
    },
    {
        path: "statistiques",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("default-node_modules_ng-apexcharts___ivy_ngcc___fesm2015_ng-apexcharts_js"), __webpack_require__.e("default-src_app_pages_teams_team_service_ts"), __webpack_require__.e("src_app_pages_statistiques_statistiques_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./statistiques/statistiques.module */ 7510)).then((m) => m.StatistiquesModule),
    },
];
class PagesRoutingModule {
}
PagesRoutingModule.ɵfac = function PagesRoutingModule_Factory(t) { return new (t || PagesRoutingModule)(); };
PagesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PagesRoutingModule });
PagesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PagesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 22302:
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesModule": () => (/* binding */ PagesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages-routing.module */ 64205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);



class PagesModule {
}
PagesModule.ɵfac = function PagesModule_Factory(t) { return new (t || PagesModule)(); };
PagesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PagesModule });
PagesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _pages_routing_module__WEBPACK_IMPORTED_MODULE_0__.PagesRoutingModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PagesModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _pages_routing_module__WEBPACK_IMPORTED_MODULE_0__.PagesRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_pages_module_ts.js.map