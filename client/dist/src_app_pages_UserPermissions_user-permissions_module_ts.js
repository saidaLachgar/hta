"use strict";
(self["webpackChunkskote"] = self["webpackChunkskote"] || []).push([["src_app_pages_UserPermissions_user-permissions_module_ts"],{

/***/ 15854:
/*!**************************************!*\
  !*** ./src/app/core/const/access.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntitiesAccess": () => (/* binding */ EntitiesAccess),
/* harmony export */   "PermissionsIndex": () => (/* binding */ PermissionsIndex)
/* harmony export */ });
const EntitiesAccess = [
    {
        name: "Anomalies",
        value: "anomalies",
        permissions: -1
    },
    {
        name: 'Mission',
        value: 'missions',
        permissions: -1
    },
    {
        name: 'Calendrier',
        value: 'calendrier',
        permissions: 4
    },
    {
        name: 'Visites',
        value: 'visites',
        permissions: -1
    },
    {
        name: 'État du suivi',
        value: 'objectives',
        permissions: [0, 1, 2, 4]
    },
    {
        name: 'Groupe d\'objectif',
        value: 'goal_groups',
        permissions: -1
    },
    {
        name: 'Objectives',
        value: 'goals',
        permissions: -1
    },
    {
        name: 'Postes',
        value: 'postes',
        permissions: -1
    },
    {
        name: 'Statistiques',
        value: 'statistiques',
        permissions: 4
    },
    {
        name: 'Équipes',
        value: 'teams',
        permissions: -1
    },
    {
        name: 'Départ',
        value: 'departments',
        permissions: -1
    },
    {
        name: 'Dps',
        value: 'dps',
        permissions: -1
    },
    {
        name: 'Commune',
        value: 'communes',
        permissions: -1
    },
    {
        name: 'Tronçon',
        value: 'edges',
        permissions: -1
    },
    {
        name: 'Appareils coupeur',
        value: 'nodes',
        permissions: -1
    },
    {
        name: 'Members',
        value: 'users',
        permissions: -1
    },
    {
        name: 'Autorisation',
        value: 'autorisation',
        permissions: 4
    },
    {
        name: 'Historique',
        value: 'logs',
        permissions: 4
    },
    {
        name: 'Source des données',
        value: 'data',
        permissions: 4
    },
];
const PermissionsIndex = [
    { name: 'Modifier', value: 'update' },
    { name: 'Supprimer', value: 'delete' },
    { name: 'Ajouter', value: 'add' },
    { name: 'Details', value: 'details' },
    { name: 'Afficher', value: 'show' }, // -> 4
    // {name:'Exporter', value: 'export'}, // -> 5
    // {name:'Importer', value: 'import'}, // -> 6
    // {name:'Profile', value: 'profile'}, // -> 7
];


/***/ }),

/***/ 59167:
/*!*******************************************!*\
  !*** ./src/app/core/guards/role.guard.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleGuard": () => (/* binding */ RoleGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 67686);



class RoleGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    canActivate(route, state) {
        let authorized = this.authService.isAuthorized(route.data.access);
        if (authorized)
            return true;
        alert("accès refusé");
        this.router.navigate(['/dashboard']);
        return false;
    }
}
RoleGuard.ɵfac = function RoleGuard_Factory(t) { return new (t || RoleGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService)); };
RoleGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RoleGuard, factory: RoleGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 38703:
/*!**************************************************************************!*\
  !*** ./src/app/pages/UserPermissions/user-permissions-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPermissionsRoutingModule": () => (/* binding */ UserPermissionsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_core_guards_role_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/guards/role.guard */ 59167);
/* harmony import */ var _user_permissions_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-permissions.component */ 88464);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);





const routes = [
    { path: '', component: _user_permissions_component__WEBPACK_IMPORTED_MODULE_1__.UserPermissionsComponent, canActivate: [src_app_core_guards_role_guard__WEBPACK_IMPORTED_MODULE_0__.RoleGuard], data: { access: 'autorisation_show' } },
];
class UserPermissionsRoutingModule {
}
UserPermissionsRoutingModule.ɵfac = function UserPermissionsRoutingModule_Factory(t) { return new (t || UserPermissionsRoutingModule)(); };
UserPermissionsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: UserPermissionsRoutingModule });
UserPermissionsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UserPermissionsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 88464:
/*!*********************************************************************!*\
  !*** ./src/app/pages/UserPermissions/user-permissions.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPermissionsComponent": () => (/* binding */ UserPermissionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 99457);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 85029);
/* harmony import */ var src_app_core_const_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/const/access */ 15854);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _user_permissions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-permissions.service */ 41429);
/* harmony import */ var _ngneat_hot_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngneat/hot-toast */ 82456);
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/auth.service */ 67686);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var src_app_core_pipes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/pipes */ 95605);













function UserPermissionsComponent_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 8);
} }
function UserPermissionsComponent_ng_container_8_li_4_ng_template_6_div_1_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function UserPermissionsComponent_ng_container_8_li_4_ng_template_6_div_1_ng_container_4_div_1_Template_input_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22); const r_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4).$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r20.onChange($event, r_r6.role); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const permission_r18 = ctx.$implicit;
    const access_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    const r_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formArrayName", r_r6.role)("value", access_r10.value + "_" + permission_r18.value)("checked", ctx_r17.isChecked(access_r10.value + "_" + permission_r18.value, r_r6.role));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", permission_r18.name, " ");
} }
function UserPermissionsComponent_ng_container_8_li_4_ng_template_6_div_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, UserPermissionsComponent_ng_container_8_li_4_ng_template_6_div_1_ng_container_4_div_1_Template, 4, 4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r12.PermissionsIndex);
} }
function UserPermissionsComponent_ng_container_8_li_4_ng_template_6_div_1_ng_template_5_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function UserPermissionsComponent_ng_container_8_li_4_ng_template_6_div_1_ng_template_5_ng_container_0_Template_input_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r28); const r_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4).$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r26.onChange($event, r_r6.role); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const access_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    const r_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formArrayName", r_r6.role)("value", access_r10.value + "_" + ctx_r25.PermissionsIndex[access_r10.permissions].value)("checked", ctx_r25.isChecked(access_r10.value + "_" + ctx_r25.PermissionsIndex[access_r10.permissions].value, r_r6.role));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r25.PermissionsIndex[access_r10.permissions].name, " ");
} }
function UserPermissionsComponent_ng_container_8_li_4_ng_template_6_div_1_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, UserPermissionsComponent_ng_container_8_li_4_ng_template_6_div_1_ng_template_5_ng_container_0_Template, 4, 4, "ng-container", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "typeof");
} if (rf & 2) {
    const access_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 2, access_r10.permissions) === "number")("ngIfElse", _r15);
} }
function UserPermissionsComponent_ng_container_8_li_4_ng_template_6_div_1_ng_template_7_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function UserPermissionsComponent_ng_container_8_li_4_ng_template_6_div_1_ng_template_7_div_0_Template_input_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r37); const r_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4).$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r35.onChange($event, r_r6.role); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const key_r33 = ctx.$implicit;
    const access_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    const r_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formArrayName", r_r6.role)("value", access_r10.value + "_" + ctx_r32.PermissionsIndex[key_r33].value)("checked", ctx_r32.isChecked(access_r10.value + "_" + ctx_r32.PermissionsIndex[key_r33].value, r_r6.role));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r32.PermissionsIndex[key_r33].name, " ");
} }
function UserPermissionsComponent_ng_container_8_li_4_ng_template_6_div_1_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, UserPermissionsComponent_ng_container_8_li_4_ng_template_6_div_1_ng_template_7_div_0_Template, 4, 4, "div", 31);
} if (rf & 2) {
    const access_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", access_r10.permissions);
} }
function UserPermissionsComponent_ng_container_8_li_4_ng_template_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h5", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, UserPermissionsComponent_ng_container_8_li_4_ng_template_6_div_1_ng_container_4_Template, 2, 1, "ng-container", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, UserPermissionsComponent_ng_container_8_li_4_ng_template_6_div_1_ng_template_5_Template, 2, 4, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, UserPermissionsComponent_ng_container_8_li_4_ng_template_6_div_1_ng_template_7_Template, 1, 1, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const access_r10 = ctx.$implicit;
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](access_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", access_r10.permissions === -1)("ngIfElse", _r13);
} }
function UserPermissionsComponent_ng_container_8_li_4_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, UserPermissionsComponent_ng_container_8_li_4_ng_template_6_div_1_Template, 10, 3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r8.EntitiesAccess);
} }
function UserPermissionsComponent_ng_container_8_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, UserPermissionsComponent_ng_container_8_li_4_ng_template_6_Template, 2, 1, "ng-template", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r6 = ctx.$implicit;
    const j_r7 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngbNavItem", j_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](r_r6.label);
} }
function UserPermissionsComponent_ng_container_8_i_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 33);
} }
function UserPermissionsComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ul", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, UserPermissionsComponent_ng_container_8_li_4_Template, 7, 2, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, UserPermissionsComponent_ng_container_8_i_9_Template, 1, 0, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, " Sauvegarder ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const UserPermissions_r2 = ctx.ngIf;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("activeId", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", UserPermissions_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngbNavOutlet", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.submitted && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 4, ctx_r1.service.loading$));
} }
const Equals = (x, y) => {
    const xu = [...new Set(x).values()]; // unique values of x
    const yu = [...new Set(y).values()]; // unique values of y
    return xu.length != yu.length ? false : xu.every(x => yu.includes(x));
};
class UserPermissionsComponent {
    constructor(service, fb, toast, auth) {
        this.service = service;
        this.fb = fb;
        this.toast = toast;
        this.auth = auth;
        this.submitted = false;
        this.EntitiesAccess = src_app_core_const_access__WEBPACK_IMPORTED_MODULE_0__.EntitiesAccess;
        this.PermissionsIndex = src_app_core_const_access__WEBPACK_IMPORTED_MODULE_0__.PermissionsIndex;
        this.form = fb.group({});
        this.UserPermissions$ = service.getAll()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(data => {
            let formGroups = {};
            data.forEach(group => {
                formGroups[group.role] = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormArray([]);
                if (group.permissions) {
                    group.permissions.forEach(permission => {
                        formGroups[group.role].push(new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(permission)); // Selected
                    });
                }
            });
            this.form = fb.group(formGroups);
            this.OldPermissions = data;
        }));
    }
    isChecked(value, formArrayName) {
        const formArray = this.form.get(formArrayName);
        return formArray.controls.filter((item) => item.value == value).length;
    }
    onChange(e, formArrayName) {
        const formArray = this.form.get(formArrayName);
        const target = e.target;
        if (target.checked)
            formArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(target.value)); // Selected
        else
            formArray.controls.forEach((item, i) => {
                if (item.value == target.value) {
                    formArray.removeAt(i);
                    return;
                }
            });
    }
    /**
   * Persist : update
   */
    onSubmit() {
        this.submitted = true;
        let values = this.form.value;
        let toast = this.toast;
        let observables = [];
        this.OldPermissions.forEach(group => {
            if (
            // group.permissions &&// not null
            !Equals(group.permissions, values[group.role]) // is updated
            ) {
                console.log("create an observable");
                let newPermissions = Object.assign({}, group);
                newPermissions.permissions = values[group.role];
                observables.push(this.service.update(newPermissions));
            }
        });
        if (observables.length) {
            observables.push(this.auth.refreshToken());
            (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.forkJoin)(observables)
                .subscribe({
                error: () => toast.error("un problème est survenu, veuillez réessayer"),
                complete() {
                    toast.success("Les permissions ont été mises à jour avec succès");
                    this.submitted = false;
                    setTimeout(() => location.reload(), 1000);
                },
            });
        }
    }
}
UserPermissionsComponent.ɵfac = function UserPermissionsComponent_Factory(t) { return new (t || UserPermissionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_user_permissions_service__WEBPACK_IMPORTED_MODULE_1__.UserPermissionsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngneat_hot_toast__WEBPACK_IMPORTED_MODULE_9__.HotToastService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService)); };
UserPermissionsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: UserPermissionsComponent, selectors: [["app-users-list"]], decls: 10, vars: 8, consts: [[1, "container-fluid"], ["title", "Autorisation des utilisateurs", 3, "breadcrumbItems"], [1, "row", "mt-4", 3, "formGroup", "ngSubmit"], [1, "col-12"], [1, "card"], [1, "card-body"], ["class", "bx bx-loader-alt fa-spin text-center fs-1 text-primary d-block m-5", 4, "ngIf"], [4, "ngIf"], [1, "bx", "bx-loader-alt", "fa-spin", "text-center", "fs-1", "text-primary", "d-block", "m-5"], [1, "row"], ["ngbNav", "", 1, "nav-tabs", 3, "activeId"], ["nav", "ngbNav"], [3, "ngbNavItem", 4, "ngFor", "ngForOf"], [3, "ngbNavOutlet"], [1, "row", "justify-content-end"], [1, "col-auto"], [1, "btn", "btn-primary"], ["class", "bx bx-loader-alt fa-spin", 4, "ngIf"], [3, "ngbNavItem"], ["ngbNavLink", ""], [1, "d-block", "d-sm-none"], [1, "fas", "fa-home"], [1, "d-none", "d-sm-block"], ["ngbNavContent", ""], ["class", "col-6 mt-4", 4, "ngFor", "ngForOf"], [1, "col-6", "mt-4"], [1, "mb-3"], [1, "ms-3"], [4, "ngIf", "ngIfElse"], ["second", ""], ["third", ""], [4, "ngFor", "ngForOf"], ["type", "checkbox", 3, "formArrayName", "value", "checked", "change"], [1, "bx", "bx-loader-alt", "fa-spin"]], template: function UserPermissionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function UserPermissionsComponent_Template_form_ngSubmit_2_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "fieldset", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, UserPermissionsComponent_i_6_Template, 1, 0, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, UserPermissionsComponent_ng_container_8_Template, 12, 6, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.submitted && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 4, ctx.service.loading$));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 6, ctx.UserPermissions$));
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_3__.PagetitleComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbNav, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbNavOutlet, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbNavContent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormArrayName], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe, src_app_core_pipes__WEBPACK_IMPORTED_MODULE_4__.TypeofPipe], encapsulation: 2 });


/***/ }),

/***/ 80073:
/*!******************************************************************!*\
  !*** ./src/app/pages/UserPermissions/user-permissions.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPermissionsModule": () => (/* binding */ UserPermissionsModule)
/* harmony export */ });
/* harmony import */ var _user_permissions_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-permissions.component */ 88464);
/* harmony import */ var _user_permissions_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-permissions-routing.module */ 38703);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 51382);
/* harmony import */ var src_app_core_pipes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/pipes */ 95605);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);





class UserPermissionsModule {
}
UserPermissionsModule.ɵfac = function UserPermissionsModule_Factory(t) { return new (t || UserPermissionsModule)(); };
UserPermissionsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: UserPermissionsModule });
UserPermissionsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _user_permissions_routing_module__WEBPACK_IMPORTED_MODULE_1__.UserPermissionsRoutingModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](UserPermissionsModule, { declarations: [_user_permissions_component__WEBPACK_IMPORTED_MODULE_0__.UserPermissionsComponent,
        src_app_core_pipes__WEBPACK_IMPORTED_MODULE_3__.TypeofPipe], imports: [_user_permissions_routing_module__WEBPACK_IMPORTED_MODULE_1__.UserPermissionsRoutingModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_UserPermissions_user-permissions_module_ts.js.map