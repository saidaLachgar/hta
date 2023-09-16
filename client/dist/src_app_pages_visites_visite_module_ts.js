"use strict";
(self["webpackChunkskote"] = self["webpackChunkskote"] || []).push([["src_app_pages_visites_visite_module_ts"],{

/***/ 40916:
/*!**************************************************************************!*\
  !*** ./src/app/pages/visites/visite-details/visite-details.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "visiteDetailsComponent": () => (/* binding */ visiteDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _visite_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../visite.service */ 30795);
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/auth.service */ 67686);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _related_anomalies_related_anomalies_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../related-anomalies/related-anomalies.component */ 62008);







const _c0 = function (a1) { return ["/departments/details", a1]; };
function visiteDetailsComponent_table_7_a_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ctx_r1.authService.isAuthorized("departments_details") ? _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c0, ctx_r1.visite.node_a.department.id) : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.visite.node_a.department.titre);
} }
const _c1 = function (a1) { return ["/nodes/details", a1]; };
function visiteDetailsComponent_table_7_a_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ctx_r2.authService.isAuthorized("nodes_details") ? _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c1, ctx_r2.visite.node_a.id) : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.visite.node_a.titre);
} }
function visiteDetailsComponent_table_7_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_b_r5 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ctx_r3.authService.isAuthorized("nodes_details") ? _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c1, node_b_r5.id) : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("- ", node_b_r5.titre, "");
} }
const _c2 = function (a1) { return ["/teams/details", a1]; };
function visiteDetailsComponent_table_7_a_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ctx_r4.authService.isAuthorized("teams_details") ? _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c2, ctx_r4.visite.node_a.department.team.id) : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r4.visite.node_a.department.team.titre);
} }
function visiteDetailsComponent_table_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Date :");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "D\u00E9part :");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, visiteDetailsComponent_table_7_a_12_Template, 2, 4, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "De :");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, visiteDetailsComponent_table_7_a_17_Template, 2, 4, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "\u00C0 :");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, visiteDetailsComponent_table_7_div_22_Template, 3, 4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Longueur visit\u00E9e :");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "\u00C9quipe :");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, visiteDetailsComponent_table_7_a_35_Template, 2, 4, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](7, 8, ctx_r0.visite.date, "medium", "Africa/Casablanca"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.visite.node_a.department);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.visite.node_a);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.visite.node_b);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.visite.nbSupport);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("(", ctx_r0.visite.nbSupport * 100, "/", ctx_r0.visite.edge_set_length, "km)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.visite.node_a.department.team);
} }
class visiteDetailsComponent {
    constructor(route, service, authService) {
        this.route = route;
        this.service = service;
        this.authService = authService;
        let id = route.snapshot.paramMap.get("id");
        service.getByKey(id).subscribe(obj => {
            this.visite = obj;
            // anomalies
            this.currentEdge = {
                ANode: obj.node_a["@id"],
                BNode: obj.node_b["@id"],
                department: obj.node_a.department["@id"],
                type: 'false'
            };
        });
    }
}
visiteDetailsComponent.ɵfac = function visiteDetailsComponent_Factory(t) { return new (t || visiteDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_visite_service__WEBPACK_IMPORTED_MODULE_0__.visiteService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService)); };
visiteDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: visiteDetailsComponent, selectors: [["app-visite-details"]], decls: 12, vars: 6, consts: [[1, "container-fluid"], ["title", "D\u00E9tail de l'interruption", 3, "Loading", "breadcrumbItems"], [1, "row"], [1, "card", "mt-4"], [1, "card-body", "pt-5"], [1, "table-responsive"], ["class", "table table-nowrap mb-0", 4, "ngIf"], ["routerLink", "/visite", 1, "btn", "btn-light", "mt-4", "float-end"], [1, "fas", "fa-arrow-circle-left", "me-1"], [3, "currentEdge"], [1, "table", "table-nowrap", "mb-0"], ["scope", "row"], ["target", "_blank", 3, "routerLink", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "text-muted"], ["target", "_blank", 3, "routerLink"]], template: function visiteDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, visiteDetailsComponent_table_7_Template, 36, 12, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Retour \u00E0 la liste");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "app-related-anomalies", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("Loading", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 4, ctx.service.loading$))("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.visite);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("currentEdge", ctx.currentEdge);
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_2__.PagetitleComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _related_anomalies_related_anomalies_component__WEBPACK_IMPORTED_MODULE_3__.relatedAnomaliesComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe], encapsulation: 2 });


/***/ }),

/***/ 9019:
/*!**************************************************************************!*\
  !*** ./src/app/pages/visites/visite-persist/visite-persist.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "visitePersistComponent": () => (/* binding */ visitePersistComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _visite_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../visite.service */ 30795);
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/auth.service */ 67686);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ 15025);
/* harmony import */ var _related_anomalies_related_anomalies_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../related-anomalies/related-anomalies.component */ 62008);











function visitePersistComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ngb-alert", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("closed", function visitePersistComponent_div_3_Template_ngb_alert_closed_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); const alert_r8 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r9.removeAlert(alert_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alert_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("type", alert_r8.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", alert_r8.message, " ");
} }
function visitePersistComponent_ng_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ng-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const depar_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", "/api/departments/" + depar_r11.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](depar_r11.titre);
} }
function visitePersistComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 40, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Ce champ est obligatoire.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function visitePersistComponent_div_32_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Ce champ est obligatoire.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function visitePersistComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, visitePersistComponent_div_32_span_1_Template, 2, 0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.service.ANode.errors.required);
} }
function visitePersistComponent_div_39_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Ce champ est obligatoire.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function visitePersistComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, visitePersistComponent_div_39_span_1_Template, 2, 0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.service.BNode.errors.required);
} }
function visitePersistComponent_button_50_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function visitePersistComponent_button_50_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r15.service.Persist("NEW"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Cr\u00E9er et ajouter un nouveau");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, ctx_r6.service.loading$) || ctx_r6.service.anomalyLoading);
} }
function visitePersistComponent_i_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 44);
} }
const _c0 = function () { return { year: 1900, month: 1, day: 1 }; };
const _c1 = function (a0) { return { "is-invalid": a0 }; };
const parseDate = d => new Date(Date.parse(d));
const timeObject = d => { return { hour: d.getHours(), minute: d.getMinutes(), second: d.getSeconds() }; };
const dateObject = d => { return { year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate() }; };
class visitePersistComponent {
    constructor(fb, route, service, authService) {
        this.fb = fb;
        this.route = route;
        this.service = service;
        this.authService = authService;
        this.showError = false;
        this.alert = window.alert;
        this.alerts = [];
        this.breadCrumbItems = [{ label: 'Visites' }, { label: 'Fiche visite', active: true }];
        service.loadDepartments(false);
        service.loadANodes();
        service.loadBNodes();
        // service.loadTeams();
        service.visiteForm = this.fb.group({
            anomalies: this.fb.array([]),
            date: [""],
            time: [""],
            // team: [""],
            nbSupport: [null],
            department: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            nodeA: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            nodeB: [[]],
        });
        let paramId = this.route.snapshot.paramMap.get("id");
        if (paramId) {
            this.service.EditeMode = true;
            service.getByKey(Number(paramId)).subscribe((obj) => {
                this.service.existingVisit = obj;
                this.id = String(obj.id);
                // fill ng-select
                // service.loadTeams(obj.team ? [obj.team] : []);
                service.loadANodes(obj.node_a ? [obj.node_a] : []);
                service.loadBNodes(obj.node_b ? obj.node_b : []);
                // date / time start
                let time = null;
                let date = null;
                if (obj.date) {
                    date = parseDate(obj.date);
                    time = timeObject(date);
                }
                // date: obj.date ?  dateObject(new Date(obj.date)) : null,
                service.visiteForm.patchValue({
                    date: dateObject(date),
                    time: time,
                    // team: obj.team ? obj.team["@id"] : null,
                    department: obj.node_a.department ? obj.node_a.department["@id"] : null,
                    nodeA: obj.node_a ? obj.node_a["@id"] : null,
                    nbSupport: obj.nbSupport ? obj.nbSupport : 0,
                    nodeB: obj.node_b.length ? obj.node_b.map((e) => e["@id"]) : [],
                });
                this.currentEdge = {
                    ANode: this.service.ANode.value,
                    BNode: this.service.BNode.value,
                    department: obj.node_a.department["@id"],
                    type: true
                };
                this.formListeners();
            });
        }
        else {
            let d = new Date();
            let currentTime = timeObject(d);
            let today = dateObject(d);
            service.visiteForm.patchValue({
                date: today,
                time: currentTime,
            });
            this.formListeners();
        }
    }
    // Validation && Alerts
    AlertANodeChange() {
        this.addAlert("En changeant le PS, les champs tronçons d'anomalies seront réinitialisés.", "warning");
    }
    AlertDeparChange() {
        let anode = this.service.ANode.value;
        let bnode = this.service.BNode.value;
        let hasNonEmptyNodes = (anode && anode.trim() !== '') || (bnode && bnode.length !== 0);
        let hasNonEmptyEdges = this.hasNonEmptyEdges;
        (hasNonEmptyNodes || hasNonEmptyNodes) && this.addAlert(`En changeant le département, les champs ${hasNonEmptyNodes ? "appareils de coupeur" : ""}${hasNonEmptyNodes && hasNonEmptyEdges ? " et " : ""}${hasNonEmptyEdges ? "tronçons d'anomalies" : ""} seront réinitialisés.`, "warning");
    }
    removeAlert(alert) {
        const index = this.alerts.indexOf(alert);
        if (index !== -1) {
            this.alerts.splice(index, 1);
        }
    }
    addAlert(message, type) {
        const index = this.alerts.findIndex(alert => alert.message === message && alert.type === type);
        if (index === -1) {
            window.scrollTo(0, 0);
            const alert = { message, type };
            // add alert if not already exists
            this.alerts.push(alert);
            // remove alert after 30s
            setTimeout(() => this.removeAlert(alert), 15000);
        }
    }
    formListeners() {
        let na = this.service.ANode;
        let nb = this.service.BNode;
        let dp = this.service.department;
        // on change ANode -> reset && reload edges and anomalies
        na.valueChanges.subscribe(() => {
            // reset anomalies edges
            this.anomalies.controls.forEach((control) => {
                control.get('edge').reset();
            });
            //  reload edges and anomalies
            this.currentEdge = {
                ANode: na.value,
                BNode: nb.value,
                department: dp.value,
                type: true
            };
        });
        // on change BNode > reload edges and anomalies
        nb.valueChanges.subscribe(() => {
            na.value && na.value.trim() !== '' && (this.currentEdge = {
                ANode: na.value,
                BNode: nb.value,
                department: dp.value,
                type: true
            });
        });
        // on change depar > reset edges  
        dp.valueChanges.subscribe(() => {
            na.reset();
            nb.reset();
            // reset anomalies edges
            this.anomalies.controls.forEach((control) => {
                control.get('edge').reset();
            });
        });
    }
    // Getters
    get anomalies() {
        return this.service.visiteForm.get("anomalies");
    }
    get hasNonEmptyEdges() {
        return this.anomalies.controls.some((control) => {
            const edgeControl = control.get('edge');
            return edgeControl && edgeControl.value.trim() !== '';
        });
    }
}
visitePersistComponent.ɵfac = function visitePersistComponent_Factory(t) { return new (t || visitePersistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_visite_service__WEBPACK_IMPORTED_MODULE_0__.visiteService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService)); };
visitePersistComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: visitePersistComponent, selectors: [["app-visite-persist"]], decls: 61, vars: 52, consts: [[1, "container-fluid", "pb-5", "mb-5", 3, "formGroup"], ["title", "Formulaire de visite", 3, "Loading", "breadcrumbItems"], [4, "ngFor", "ngForOf"], [1, "row", "mt-4"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "mb-3", "row"], ["for", "name-input", 1, "col-md-2", "col-form-label"], [1, "col-md-10", "row"], [1, "col"], [1, "input-group", "clockpicker"], ["ngbDatepicker", "", "formControlName", "date", 1, "form-control", 3, "minDate", "click"], ["ds", "ngbDatepicker"], [1, "col-auto"], ["seconds", "true", "formControlName", "time", 3, "spinners"], ["for", "input-2", 1, "col-md-2", "col-form-label"], ["id", "input-2", 1, "col-md-10"], ["formControlName", "department", "placeholder", "D\u00E9par..", 3, "open"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback d-block d-block", 4, "ngIf"], ["for", "input-1", 1, "col-md-2", "col-form-label"], ["id", "input-1", 1, "col-md-10", 3, "click"], ["formControlName", "nodeA", "bindLabel", "titre", "bindValue", "@id", "typeToSearchText", "Veuillez saisir 2 caract\u00E8res ou plus", 3, "items", "minTermLength", "readonly", "loading", "ngClass", "typeahead"], ["class", "invalid-feedback d-block", 4, "ngIf"], [1, "col-md-10"], ["formControlName", "nodeB", "bindLabel", "titre", "bindValue", "@id", "typeToSearchText", "Veuillez saisir 2 caract\u00E8res ou plus", 3, "items", "minTermLength", "multiple", "readonly", "loading", "typeahead"], ["for", "nbSupport-input", 1, "col-md-2", "col-form-label"], ["formControlName", "nbSupport", "type", "number", "step", "1", "id", "nbSupport-input", 1, "form-control"], [3, "anomalies", "currentEdge", "parentFormGroup", "showErrors", "addAlert"], [1, "sticky-actions"], [1, "btn", "btn-primary", "float-end", 3, "disabled", "click"], ["class", "btn btn-light me-2 float-end text-primary", 3, "disabled", "click", 4, "ngIf"], [1, "btn", "btn-light", "me-2", "float-end", "text-primary", 3, "disabled", "click"], [1, "fas", "fa-arrow-circle-left", "me-1"], ["type", "button", 1, "btn", "text-danger", "float-end", "me-2", "fw-medium", "btn-light", 3, "disabled", "click"], [1, "mdi", "mdi-trash-can", "align-middle", "me-2"], ["class", "bx bx-loader-alt fa-spin float-end me-3", 4, "ngIf"], [1, "custom-alert", "glow", "mt-3", 3, "type", "closed"], [3, "value"], [1, "invalid-feedback", "d-block", "d-block"], ["postfeedback", ""], [1, "invalid-feedback", "d-block"], [4, "ngIf"], [1, "bx", "bx-loader-alt", "fa-spin", "float-end", "me-3"]], template: function visitePersistComponent_Template(rf, ctx) { if (rf & 1) {
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, visitePersistComponent_div_3_Template, 3, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function visitePersistComponent_Template_input_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](15); return _r1.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "ngb-timepicker", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "D\u00E9part");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "ng-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("open", function visitePersistComponent_Template_ng_select_open_22_listener() { return ctx.service.department.value && ctx.AlertDeparChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, visitePersistComponent_ng_option_23_Template, 2, 2, "ng-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](24, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, visitePersistComponent_div_25_Template, 3, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "De");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function visitePersistComponent_Template_div_click_29_listener() { return ctx.showError = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "ng-select", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](31, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, visitePersistComponent_div_32_Template, 2, 1, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "\u00C0");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "ng-select", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](38, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](39, visitePersistComponent_div_39_Template, 2, 1, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "Nb Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](44, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "app-related-anomalies", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("addAlert", function visitePersistComponent_Template_app_related_anomalies_addAlert_45_listener($event) { return ctx.addAlert($event.message, $event.type); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function visitePersistComponent_Template_button_click_47_listener() { return ctx.service.Persist("EDIT"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](48, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, " Sauvegarder");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](50, visitePersistComponent_button_50_Template, 3, 3, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function visitePersistComponent_Template_button_click_51_listener() { return ctx.service.Persist("LIST"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](52, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](53, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, " Sauvegarder et retourner \u00E0 la liste");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function visitePersistComponent_Template_button_click_55_listener() { return ctx.service.deleteItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](56, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](57, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "Supprimer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](59, visitePersistComponent_i_59_Template, 1, 0, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](60, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.service.visiteForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("Loading", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 33, ctx.service.loading$))("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.alerts);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("minDate", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](49, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("spinners", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](24, 35, ctx.service.departments$));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showError && !ctx.service.department.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](31, 37, ctx.service.ANode$))("minTermLength", 2)("readonly", !ctx.service.department.value)("loading", ctx.service.ANodeLoading)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](50, _c1, ctx.service.ANode.invalid && ctx.service.submitted))("typeahead", ctx.service.ANodeInput$);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.service.submitted && ctx.service.ANode.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](38, 39, ctx.service.BNode$))("minTermLength", 2)("multiple", true)("readonly", !ctx.service.department.value)("loading", ctx.service.BNodeLoading)("typeahead", ctx.service.BNodeInput$);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.service.submitted && ctx.service.BNode.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("anomalies", ctx.anomalies)("currentEdge", ctx.currentEdge)("parentFormGroup", ctx.service.visiteForm)("showErrors", ctx.service.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](48, 41, ctx.service.loading$) || ctx.service.anomalyLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.service.EditeMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](52, 43, ctx.service.loading$) || ctx.service.anomalyLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("d-none", !ctx.service.EditeMode || !ctx.service.existingVisit);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](56, 45, ctx.service.loading$) || ctx.service.anomalyLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.service.submitted && (_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](60, 47, ctx.service.loading$) || ctx.service.anomalyLoading));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_2__.PagetitleComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbInputDatepicker, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbTimepicker, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _related_anomalies_related_anomalies_component__WEBPACK_IMPORTED_MODULE_3__.relatedAnomaliesComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbAlert, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["ɵr"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe], encapsulation: 2 });


/***/ }),

/***/ 30073:
/*!********************************************************!*\
  !*** ./src/app/pages/visites/visite-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "visiteRoutingModule": () => (/* binding */ visiteRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_core_guards_role_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/guards/role.guard */ 59167);
/* harmony import */ var _visite_details_visite_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./visite-details/visite-details.component */ 40916);
/* harmony import */ var _visites_list_visites_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visites-list/visites-list.component */ 93368);
/* harmony import */ var _visite_persist_visite_persist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./visite-persist/visite-persist.component */ 9019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);







const routes = [
    { path: '', component: _visites_list_visites_list_component__WEBPACK_IMPORTED_MODULE_2__.visitesListComponent, canActivate: [src_app_core_guards_role_guard__WEBPACK_IMPORTED_MODULE_0__.RoleGuard], data: { access: 'visites_show' } },
    { path: 'details/:id', component: _visite_details_visite_details_component__WEBPACK_IMPORTED_MODULE_1__.visiteDetailsComponent, canActivate: [src_app_core_guards_role_guard__WEBPACK_IMPORTED_MODULE_0__.RoleGuard], data: { access: 'visites_details' } },
    { path: 'persist/:id', component: _visite_persist_visite_persist_component__WEBPACK_IMPORTED_MODULE_3__.visitePersistComponent, canActivate: [src_app_core_guards_role_guard__WEBPACK_IMPORTED_MODULE_0__.RoleGuard], data: { access: 'visites_update' } },
    { path: 'persist', component: _visite_persist_visite_persist_component__WEBPACK_IMPORTED_MODULE_3__.visitePersistComponent, canActivate: [src_app_core_guards_role_guard__WEBPACK_IMPORTED_MODULE_0__.RoleGuard], data: { access: 'visites_add' } },
];
class visiteRoutingModule {
}
visiteRoutingModule.ɵfac = function visiteRoutingModule_Factory(t) { return new (t || visiteRoutingModule)(); };
visiteRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: visiteRoutingModule });
visiteRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](visiteRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 70337:
/*!************************************************!*\
  !*** ./src/app/pages/visites/visite.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "visiteModule": () => (/* binding */ visiteModule)
/* harmony export */ });
/* harmony import */ var _visite_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visite-routing.module */ 30073);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ 51382);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-apexcharts */ 86571);
/* harmony import */ var _visites_list_visites_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visites-list/visites-list.component */ 93368);
/* harmony import */ var _visite_persist_visite_persist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./visite-persist/visite-persist.component */ 9019);
/* harmony import */ var _visite_details_visite_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./visite-details/visite-details.component */ 40916);
/* harmony import */ var _related_anomalies_related_anomalies_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../related-anomalies/related-anomalies.module */ 16831);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
// import { UIModule } from 'src/app/shared/ui/ui.module';









class visiteModule {
}
visiteModule.ɵfac = function visiteModule_Factory(t) { return new (t || visiteModule)(); };
visiteModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: visiteModule });
visiteModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _visite_routing_module__WEBPACK_IMPORTED_MODULE_0__.visiteRoutingModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDatepickerModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbTimepickerModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbPopoverModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbAlertModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_8__.NgApexchartsModule,
            _related_anomalies_related_anomalies_module__WEBPACK_IMPORTED_MODULE_5__.relatedAnomaliesModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](visiteModule, { declarations: [_visites_list_visites_list_component__WEBPACK_IMPORTED_MODULE_2__.visitesListComponent,
        _visite_persist_visite_persist_component__WEBPACK_IMPORTED_MODULE_3__.visitePersistComponent,
        _visite_details_visite_details_component__WEBPACK_IMPORTED_MODULE_4__.visiteDetailsComponent], imports: [_visite_routing_module__WEBPACK_IMPORTED_MODULE_0__.visiteRoutingModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDatepickerModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbTimepickerModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbPopoverModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbAlertModule,
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_8__.NgApexchartsModule,
        _related_anomalies_related_anomalies_module__WEBPACK_IMPORTED_MODULE_5__.relatedAnomaliesModule] }); })();


/***/ }),

/***/ 30795:
/*!*************************************************!*\
  !*** ./src/app/pages/visites/visite.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "visiteService": () => (/* binding */ visiteService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _ngrx_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/data */ 97544);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 64008);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 81220);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 18252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 9820);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 98785);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 48027);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 85029);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 29026);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 10592);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_shared_components_confirm_dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/components/confirm-dialog/confirm-dialog.service */ 7393);
/* harmony import */ var _departments_department_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../departments/department.service */ 66761);
/* harmony import */ var _anomalies_anomaly_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../anomalies/anomaly.service */ 24038);
/* harmony import */ var _communes_commune_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../communes/commune.service */ 87777);
/* harmony import */ var _nodes_node_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../nodes/node.service */ 32360);
/* harmony import */ var _ngneat_hot_toast__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngneat/hot-toast */ 82456);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 13252);















const zeroPad = (num, places = 2) => String(num).padStart(places, '0');
const DateTimeToString = (date, time) => new Date(date.year, date.month - 1, date.day, time.hour, time.minute, time.second).toISOString();
const DateToString = (date) => date !== "" ? `${date.year}-${zeroPad(date.month)}-${zeroPad(date.day)}` : "";
class visiteService extends _ngrx_data__WEBPACK_IMPORTED_MODULE_6__.EntityCollectionServiceBase {
    constructor(serviceElementsFactory, confirmDialogService, departmentService, anomalyService, communeService, nodeService, toast, http, router) {
        super("visites", serviceElementsFactory);
        this.serviceElementsFactory = serviceElementsFactory;
        this.confirmDialogService = confirmDialogService;
        this.departmentService = departmentService;
        this.anomalyService = anomalyService;
        this.communeService = communeService;
        this.nodeService = nodeService;
        this.toast = toast;
        this.http = http;
        this.router = router;
        this.pageSize = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.pageSize;
        this.server = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.serverURL;
        this.existingVisit = false;
        this.EditeMode = false;
        this.ANodeLoading = false;
        this.ANodeInput$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
        this.BNodeLoading = false;
        this.BNodeInput$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
        this.departmentLoading = false;
        this.departmentInput$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
        this.teamLoading = false;
        this.teamInput$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
        this.submitted = false;
        this.page = 1;
        this.anomalyLoading = false;
    }
    /**
     * Get records
     */
    findAll() {
        this.findByCriteria({ page: 1 });
    }
    loadTeams(defaultVal = []) {
        this.teams$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.concat)((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(defaultVal), // default items
        this.teamInput$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.filter)((val) => val != null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.tap)(() => this.teamLoading = true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.switchMap)(term => this.http.get(`${this.server}/api/teams?properties[]=id&properties[]=titre&titre=` + term)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(response => response["hydra:member"]), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)([])), // empty list on error
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.tap)(() => this.teamLoading = false)))));
    }
    loadDepartments(byTerm = true) {
        if (byTerm) {
            this.departments$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.concat)((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)([]), // default items
            this.departmentInput$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.filter)((val) => val != null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.tap)(() => this.departmentLoading = true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.switchMap)(term => this.departmentService.getWithQuery("properties[]=id&properties[]=titre&titre=" + term).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)([])), // empty list on error
            (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.tap)(() => this.departmentLoading = false)))));
        }
        else {
            this.departments$ = this.departmentService.getWithQuery("properties[]=id&properties[]=titre");
        }
    }
    loadANodes(defaultVal = []) {
        this.ANode$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.concat)((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(defaultVal), // default items
        this.ANodeInput$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.filter)((val) => val != null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.tap)(() => this.ANodeLoading = true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.switchMap)(term => this.nodeService.getWithQuery("properties[]=id&properties[]=titre&titre=" + term +
            (this.department ? "&department.id=" + this.department.value.match(/\d+/)[0] : "") +
            (this.departments ? "&properties[department][]=titre&" + this.departments.map(value => `department.id[]=${value}`).join('&') : "")).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)([])), // empty list on error
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.tap)(() => this.ANodeLoading = false)))));
    }
    loadBNodes(defaultVal = []) {
        this.BNode$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.concat)((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(defaultVal), // default items
        this.BNodeInput$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.filter)((val) => val != null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.tap)(() => this.BNodeLoading = true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.switchMap)(term => this.nodeService.getWithQuery("properties[]=id&properties[]=titre&titre=" + term +
            (this.department ? "&department.id=" + this.department.value.match(/\d+/)[0] : "") +
            (this.departments ? "&properties[department][]=titre&" + this.departments.map(value => `department.id[]=${value}`).join('&') : "")).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)([])), // empty list on error
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.tap)(() => this.BNodeLoading = false)))));
    }
    /**
     * Get pagination
     */
    getPagination() {
        this.pagination$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(); // reset pagination
        // console.log("getPagination")
        this.pagination$ = this.selectors$.entityActions$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(action => action.payload.pagination));
    }
    /**
     * Delete item
     * @param id visite id
     * @param target html element
     */
    deleteItem(id = null, target = null) {
        this.confirmDialogService.setConfirmation("Vous êtes sûr de vouloir supprimer?", () => {
            this.delete(id ? id : this.existingVisit.id)
                .pipe(this.toast.observe({
                loading: "Suppression...",
                success: () => {
                    target ? target.closest("tr").remove() : this.router.navigate(['/visites']);
                    return "supprimé avec succès";
                },
                error: "un problème est survenu, veuillez réessayer",
            }))
                .subscribe();
        });
    }
    /**
     * Search
     */
    onSearch() {
        this.page = 1;
        this.lastSearchedParams = this.visiteForm.value;
        this.findByCriteria(Object.assign({ page: 1 }, this.lastSearchedParams));
    }
    /**
     * Persist : Create / update
     */
    Persist(Action) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            this.submitted = true;
            if (this.visiteForm.invalid)
                return;
            this.submitted = false;
            let id = null;
            if (!this.EditeMode) {
                this.EditeMode = Action == 'EDIT';
            }
            else {
                // update Taff
                id = this.existingVisit ? this.existingVisit.id : null;
            }
            let form = this.visiteForm.value;
            let _this = this;
            let toast = this.toast;
            let visite = {
                date: form.date ? DateTimeToString(form.date, form.time) : null,
                team: form.team ? form.team : null,
                nbSupport: form.nbSupport ? form.nbSupport : 0,
                department: form.department ? form.department : null,
                nodeA: form.nodeA ? form.nodeA : null,
                nodeB: form.nodeB && form.nodeB.length ? form.nodeB : [],
            };
            let anomalies = form.anomalies;
            this.anomalyLoading = true;
            anomalies.length && (yield this.anomalyService.bulkCreate(anomalies).toPromise());
            this.anomalyLoading = false;
            // compare last query with the new one to avoid unnecessary requests
            if (id) {
                visite["id"] = id;
                this.update(visite).subscribe({
                    error: () => toast.error("un problème est survenu, veuillez réessayer"),
                    complete() {
                        toast.success("L'interuption a été sauvegardée avec succès ");
                        Action == 'LIST' && _this.router.navigate(['/visites']);
                        _this.submitted = false;
                    },
                });
            }
            else {
                this.add(visite).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.tap)(data => this.existingVisit = data))
                    .subscribe({
                    error: () => toast.error("un problème est survenu, veuillez réessayer"),
                    complete() {
                        toast.success("L'interuption ajoutée avec succès");
                        Action == 'NEW' && location.reload();
                        Action == 'LIST' && _this.router.navigate(['/visites']);
                        _this.submitted = false;
                    },
                });
            }
            let anomalyFormArray = this.visiteForm.get("anomalies");
            while (anomalyFormArray.length !== 0)
                anomalyFormArray.removeAt(0);
            this.anomalyService.getRelatedAnomalies(form.nodeA, form.nodeB, form.department);
        });
    }
    /**
     * find By Criteria
     * @param obj query parameters
     */
    findByCriteria(obj) {
        this.visites$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)([]); // clear table
        // format date
        if (Object.keys(obj).length > 1) {
            // console.log(obj);
            const updateObj = (key) => obj[key] && delete Object.assign(obj, { ["date[" + key + "]"]: DateToString(obj[key]) })[key];
            updateObj("before");
            updateObj("after");
        }
        // remove empty values
        let queryParams = Object.keys(obj)
            .filter((k) => obj[k] != "" && obj[k] != null)
            .reduce((a, k) => (Object.assign(Object.assign({}, a), { [k]: obj[k] })), {});
        this.visites$ = this.getWithQuery(queryParams);
        this.getPagination();
    }
    /**
     * on Paginate
     * @param page page to search for
     */
    onPaginate(page) {
        this.findByCriteria(Object.assign({ page: page }, this.lastSearchedParams));
    }
    get departments() {
        let departments = this.visiteForm.controls["node_a.department.id[]"];
        return departments ? departments.value : null;
    }
    get designation() {
        return this.visiteForm.get("designation");
    }
    get department() {
        return this.visiteForm.get("department");
    }
    get BNode() {
        return this.visiteForm.get("nodeB");
    }
    get ANode() {
        return this.visiteForm.get("nodeA");
    }
}
visiteService.ɵfac = function visiteService_Factory(t) { return new (t || visiteService)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵinject"](_ngrx_data__WEBPACK_IMPORTED_MODULE_6__.EntityCollectionServiceElementsFactory), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵinject"](src_app_shared_components_confirm_dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_1__.ConfirmDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵinject"](_departments_department_service__WEBPACK_IMPORTED_MODULE_2__.departmentService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵinject"](_anomalies_anomaly_service__WEBPACK_IMPORTED_MODULE_3__.anomalyService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵinject"](_communes_commune_service__WEBPACK_IMPORTED_MODULE_4__.communeService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵinject"](_nodes_node_service__WEBPACK_IMPORTED_MODULE_5__.nodeService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵinject"](_ngneat_hot_toast__WEBPACK_IMPORTED_MODULE_19__.HotToastService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.Router)); };
visiteService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjectable"]({ token: visiteService, factory: visiteService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 93368:
/*!**********************************************************************!*\
  !*** ./src/app/pages/visites/visites-list/visites-list.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "visitesListComponent": () => (/* binding */ visitesListComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _visite_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../visite.service */ 30795);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/auth.service */ 67686);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ 15025);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-apexcharts */ 86571);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 13252);













const _c0 = function (a0, a1) { return { "badge-soft-success": a0, "badge-soft-danger": a1 }; };
const _c1 = function (a0, a1, a2) { return { "mdi-arrow-up": a0, "mdi-arrow-down": a1, "d-none": a2 }; };
function visitesListComponent_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Distance parcourue");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "small", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Ann\u00E9e courante");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "strong", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "small", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "small", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Mois en cours");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "strong", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Anomalies ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "small", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "(mois en cours)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](30, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "De la p\u00E9riode pr\u00E9c\u00E9dente");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "strong", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "h5", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Total des visites ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "small", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "(par objectif annuel)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "78%");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](46, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "Vistes par communes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "small", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "(ann\u00E9e courante)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](53, "apx-chart", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r22 = ctx.ngIf;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", data_r22.nbSupportYear, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("/", data_r22.annualVisitLgth, " km");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", data_r22.nbSupportMonth, " km");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](17, _c0, data_r22.percentageChange >= 0, data_r22.percentageChange < 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](30, 14, data_r22.percentageChange, "1.1-2"), "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](20, _c1, data_r22.percentageChange > 0, data_r22.percentageChange < 0, data_r22.percentageChange == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r22.anomaliesCurrent);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("series", ctx_r19.Chartdata.series)("chart", ctx_r19.Chartdata.chart)("plotOptions", ctx_r19.Chartdata.plotOptions)("dataLabels", ctx_r19.Chartdata.dataLabels)("xaxis", ctx_r19.Chartdata.xaxis)("colors", ctx_r19.Chartdata.colors)("grid", ctx_r19.Chartdata.grid);
} }
function visitesListComponent_div_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "svg", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "g", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "rect", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "animate", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "rect", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "animate", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "rect", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "animate", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "rect", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "animate", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function visitesListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, visitesListComponent_div_1_ng_container_1_Template, 54, 24, "ng-container", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, visitesListComponent_div_1_ng_template_3_Template, 12, 0, "ng-template", null, 42, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, ctx_r0.visitsStats$))("ngIfElse", _r20);
} }
function visitesListComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Ajouter");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function visitesListComponent_ng_template_50_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().item;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" - ", item_r23.department.titre, "");
} }
function visitesListComponent_ng_template_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, visitesListComponent_ng_template_50_span_1_Template, 2, 1, "span", 40);
} if (rf & 2) {
    const item_r23 = ctx.item;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r23.titre, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r8.service.departments && ctx_r8.service.departments.length > 1);
} }
function visitesListComponent_ng_template_51_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().item;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" - ", item_r26.department.titre, "");
} }
function visitesListComponent_ng_template_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, visitesListComponent_ng_template_51_span_1_Template, 2, 1, "span", 40);
} if (rf & 2) {
    const item_r26 = ctx.item;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r26.titre, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r9.service.departments && ctx_r9.service.departments.length > 1);
} }
function visitesListComponent_ng_template_56_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().item;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" - ", item_r29.department.titre, "");
} }
function visitesListComponent_ng_template_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, visitesListComponent_ng_template_56_span_1_Template, 2, 1, "span", 40);
} if (rf & 2) {
    const item_r29 = ctx.item;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r29.titre, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r11.service.departments && ctx_r11.service.departments.length > 1);
} }
function visitesListComponent_ng_template_57_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().item;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" - ", item_r32.department.titre, "");
} }
function visitesListComponent_ng_template_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, visitesListComponent_ng_template_57_span_1_Template, 2, 1, "span", 40);
} if (rf & 2) {
    const item_r32 = ctx.item;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r32.titre, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r12.service.departments && ctx_r12.service.departments.length > 1);
} }
function visitesListComponent_td_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Chargement... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function visitesListComponent_td_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Aucune donn\u00E9e trouv\u00E9e ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c2 = function (a1) { return ["/departments/details", a1]; };
function visitesListComponent_tr_81_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ctx_r37.authService.isAuthorized("departments_details") ? _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c2, item_r35.node_a.department.id) : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r35.node_a.department.titre);
} }
const _c3 = function (a1) { return ["/nodes/details", a1]; };
function visitesListComponent_tr_81_a_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ctx_r38.authService.isAuthorized("nodes_details") ? _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c3, item_r35.node_a.id) : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r35.node_a.titre);
} }
function visitesListComponent_tr_81_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_b_r47 = ctx.$implicit;
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ctx_r39.authService.isAuthorized("nodes_details") ? _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c3, node_b_r47.id) : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("- ", node_b_r47.titre, "");
} }
const _c4 = function (a1) { return ["/teams/details", a1]; };
function visitesListComponent_tr_81_a_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ctx_r40.authService.isAuthorized("teams_details") ? _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c4, item_r35.node_a.department.team.id) : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r35.node_a.department.team.titre);
} }
function visitesListComponent_tr_81_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", item_r35.undone_anomalies, "/", item_r35.total_anomalies, " Anomalies");
} }
function visitesListComponent_tr_81_ng_template_22_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Pas d'anomalies");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} }
function visitesListComponent_tr_81_ng_template_22_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Toutes r\u00E9solues");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function visitesListComponent_tr_81_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, visitesListComponent_tr_81_ng_template_22_ng_container_0_Template, 5, 0, "ng-container", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, visitesListComponent_tr_81_ng_template_22_ng_template_1_Template, 4, 0, "ng-template", null, 91, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);
    const item_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r35.total_anomalies == 0)("ngIfElse", _r51);
} }
const _c5 = function (a1) { return ["details", a1]; };
function visitesListComponent_tr_81_div_25_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Voir ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](1, _c5, item_r35.id));
} }
const _c6 = function (a1) { return ["persist", a1]; };
function visitesListComponent_tr_81_div_25_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Modifier ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](1, _c6, item_r35.id));
} }
function visitesListComponent_tr_81_div_25_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function visitesListComponent_tr_81_div_25_a_5_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r61); const item_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit; const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r59.service.deleteItem(item_r35.id, $event.target); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Supprimer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function visitesListComponent_tr_81_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, visitesListComponent_tr_81_div_25_a_3_Template, 3, 3, "a", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, visitesListComponent_tr_81_div_25_a_4_Template, 3, 3, "a", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, visitesListComponent_tr_81_div_25_a_5_Template, 3, 0, "a", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r44.authService.isAuthorized("visites_details"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r44.authService.isAuthorized("visites_update"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r44.authService.isAuthorized("visites_delete"));
} }
const _c7 = function () { return []; };
function visitesListComponent_tr_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "ngb-highlight", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, visitesListComponent_tr_81_a_5_Template, 2, 4, "a", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, visitesListComponent_tr_81_a_7_Template, 2, 4, "a", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, visitesListComponent_tr_81_div_9_Template, 3, 4, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "ngb-highlight", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, " Support");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "small", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, visitesListComponent_tr_81_a_18_Template, 2, 4, "a", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "a", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, visitesListComponent_tr_81_ng_container_21_Template, 5, 2, "ng-container", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, visitesListComponent_tr_81_ng_template_22_Template, 3, 2, "ng-template", null, 84, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "td", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, visitesListComponent_tr_81_div_25_Template, 6, 3, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r35 = ctx.$implicit;
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](23);
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](36);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](40);
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("result", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](3, 14, item_r35.date, "medium", "Africa/Casablanca"))("term", _r2.value + _r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r35.node_a.department);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r35.node_a);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", item_r35.node_b);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("result", item_r35.nbSupport)("term", _r13.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("(", item_r35.nbSupport * 100, "/", item_r35.edge_set_length, "km)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r35.node_a.department.team);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ctx_r17.authService.isAuthorized("visites_details") ? _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](18, _c5, item_r35.id) : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](20, _c7));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r35.undone_anomalies > 0 && item_r35.undone_anomalies != item_r35.total_anomalies)("ngIfElse", _r42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r17.authService.isAuthorized("visites_details") || ctx_r17.authService.isAuthorized("visites_update") || ctx_r17.authService.isAuthorized("visites_delete"));
} }
function visitesListComponent_ng_container_83_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ngb-pagination", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("pageChange", function visitesListComponent_ng_container_83_div_1_Template_ngb_pagination_pageChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r65); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r64.service.page = $event; })("pageChange", function visitesListComponent_ng_container_83_div_1_Template_ngb_pagination_pageChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r65); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r66.service.onPaginate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pagination_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngIf;
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate3"](" Affichage de ", pagination_r62.startIndex, " \u00E0 ", pagination_r62.endIndex, " de ", pagination_r62.totalRecords, " entr\u00E9es ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("collectionSize", pagination_r62.totalRecords)("page", ctx_r63.service.page)("pageSize", ctx_r63.service.pageSize)("maxSize", 5);
} }
function visitesListComponent_ng_container_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, visitesListComponent_ng_container_83_div_1_Template, 7, 7, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const pagination_r62 = ctx.ngIf;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", pagination_r62.totalRecords > ctx_r18.service.pageSize);
} }
class visitesListComponent {
    constructor(service, fb, authService, http, config) {
        this.service = service;
        this.fb = fb;
        this.authService = authService;
        this.http = http;
        this.config = config;
        this.server = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.serverURL;
        service.findAll();
        service.loadTeams();
        service.loadANodes();
        service.loadBNodes();
        service.loadDepartments();
        this.ReportStats();
        service.visiteForm = fb.group({
            nbSupport: [null],
            before: [""],
            after: [""],
            "node_a.department.id[]": [""],
            "node_a.id[]": [''],
            "node_b.id[]": [''],
            "node_a.department.team.id[]": [""],
        });
        config.notFoundText = 'Aucune donnée trouvée !';
        this.Chartdata = {
            chart: {
                height: 220,
                type: 'bar',
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                }
            },
            dataLabels: {
                enabled: false
            },
            series: [{
                    data: [380, 430, 450, 475, 550, 584]
                }],
            colors: ['#269ffb'],
            xaxis: {
                // tslint:disable-next-line: max-line-length
                categories: ['LAMZOUDIA', 'Chichaoua', 'SIDI BOUZID', 'Saidate', 'SIDI MED DALIL', 'Ahdil'],
            },
            grid: {
                borderColor: '#f1f1f1'
            },
        };
    }
    ReportStats() {
        this.visitsStats$ = this.http.get(`${this.server}/api/analytics/visits-stats/`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(data => {
            console.log(data);
            let currentMonthTasks = data["anomaliesPrev"] * 1;
            let lastMonthTasks = data["anomaliesCurrent"] * 1;
            data["percentageChange"] = 0;
            // Calculate the percentage change
            if (lastMonthTasks) {
                data["percentageChange"] = ((currentMonthTasks - lastMonthTasks) / lastMonthTasks) * 100;
            }
            return data;
        }));
    }
}
visitesListComponent.ɵfac = function visitesListComponent_Factory(t) { return new (t || visitesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_visite_service__WEBPACK_IMPORTED_MODULE_1__.visiteService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectConfig)); };
visitesListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: visitesListComponent, selectors: [["app-visites-list"]], decls: 85, vars: 52, consts: [[1, "container-fluid", "mb-5"], ["class", "row", 4, "ngIf"], [1, "row", "align-items-center", "justify-content-between", "mb-4"], [1, "col-auto"], ["title", "Liste des visites", 3, "breadcrumbItems"], ["routerLink", "/visites/persist", "class", "btn btn-primary ms-2", 4, "ngIf"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "table-responsive", 3, "formGroup", "ngSubmit"], [1, "table", "table-bordered"], [2, "min-width", "200px"], [2, "min-width", "130px"], ["width", "123px"], ["valign", "middle"], [1, "d-flex", "gap-2"], [1, "input-group", "clockpicker"], ["ngbDatepicker", "", "formControlName", "after", "placeholder", "De...", 1, "form-control", 3, "click"], ["searchDateStart", "", "ds", "ngbDatepicker"], ["ngbDatepicker", "", "formControlName", "before", "placeholder", "\u00C0...", 1, "form-control", 3, "click"], ["searchDateEnd", "", "de", "ngbDatepicker"], ["formControlName", "node_a.department.id[]", "bindLabel", "titre", "bindValue", "id", "placeholder", "D\u00E9part..", "typeToSearchText", "Veuillez saisir 2 caract\u00E8res ou plus", 3, "items", "multiple", "minTermLength", "loading", "typeahead"], ["searchDepar", ""], ["formControlName", "node_a.id[]", "bindValue", "id", "placeholder", "De..", "typeToSearchText", "Veuillez saisir 2 caract\u00E8res ou plus", 3, "items", "multiple", "minTermLength", "readonly", "loading", "typeahead"], ["searchANode", ""], ["ng-label-tmp", ""], ["ng-option-tmp", ""], ["formControlName", "node_b.id[]", "bindValue", "id", "placeholder", "\u00C0..", "typeToSearchText", "Veuillez saisir 2 caract\u00E8res ou plus", 3, "items", "multiple", "minTermLength", "readonly", "loading", "typeahead"], ["searchBNode", ""], ["type", "text", "placeholder", "Longueur visit\u00E9e...", "formControlName", "nbSupport", 1, "form-control"], ["searchNbSupport", ""], ["formControlName", "node_a.department.team.id[]", "bindLabel", "titre", "bindValue", "id", "placeholder", "\u00C9quipe..", "typeToSearchText", "Veuillez saisir 2 caract\u00E8res ou plus", 3, "items", "multiple", "minTermLength", "loading", "typeahead"], ["searchTeam", ""], ["type", "submit", 1, "btn", "btn-sm", "btn-primary", "d-flex", "align-items-center"], [1, "bx", "bx-search", "me-1"], ["type", "reset", 1, "btn", "btn-sm", "text-primary", "flex", "align-items-center", 3, "click"], [1, "bx", "bx-x", "me-1"], ["class", "text-center", "colspan", "8", 4, "ngIf"], ["valign", "middle", 4, "ngFor", "ngForOf"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], ["statsLoading", ""], [1, "col-xl-6", "d-flex", "flex-column"], [1, "card", "card-body", "py-2", "flex-grow-0"], [1, "col-lg-7", "p-1"], [1, "border", "p-3", "rounded-3"], [1, "fw-medium", "mb-1"], [1, "col-6"], [1, "text-muted"], [1, "h2", "d-block"], [1, "col-lg-5", "p-1"], [1, "fw-medium", "mb-2"], [1, "mt-2", "mb-2"], [1, "font-size-11", "me-2", "badge", 3, "ngClass"], [1, "mdi", 3, "ngClass"], [1, "h2", "mb-0"], [1, "card", "card-body", "flex-1"], [1, "py-2"], [1, "float-end"], [1, "progress", "animated-progess", "progress-sm"], ["role", "progressbar", "aria-valuenow", "78", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", 2, "width", "78%"], [1, "col-xl-6"], [1, "card", "card-body", "pb-0"], [1, "fw-medium", "mb-0"], ["dir", "ltr", 1, "apex-charts", 3, "series", "chart", "plotOptions", "dataLabels", "xaxis", "colors", "grid"], [1, "card", "card-body"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "200px", "height", "310px", "viewBox", "0 0 100 100", "preserveAspectRatio", "xMidYMid", 2, "margin", "auto", "opacity", "0.2", "display", "block"], ["transform", "rotate(180 50 50)"], ["x", "15", "y", "15", "width", "10", "height", "40", "fill", "#e8e8e8"], ["attributeName", "height", "values", "50;70;30;50", "keyTimes", "0;0.33;0.66;1", "dur", "5.2631578947368425s", "repeatCount", "indefinite", "calcMode", "spline", "keySplines", "0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1", "begin", "-2.1052631578947367s"], ["x", "35", "y", "15", "width", "10", "height", "40", "fill", "#dce4eb"], ["attributeName", "height", "values", "50;70;30;50", "keyTimes", "0;0.33;0.66;1", "dur", "5.2631578947368425s", "repeatCount", "indefinite", "calcMode", "spline", "keySplines", "0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1", "begin", "-1.0526315789473684s"], ["x", "55", "y", "15", "width", "10", "height", "40", "fill", "#bbcedd"], ["attributeName", "height", "values", "50;70;30;50", "keyTimes", "0;0.33;0.66;1", "dur", "5.2631578947368425s", "repeatCount", "indefinite", "calcMode", "spline", "keySplines", "0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1", "begin", "-3.1578947368421053s"], ["x", "75", "y", "15", "width", "10", "height", "40", "fill", "#85a2b6"], ["attributeName", "height", "values", "50;70;30;50", "keyTimes", "0;0.33;0.66;1", "dur", "5.2631578947368425s", "repeatCount", "indefinite", "calcMode", "spline", "keySplines", "0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1", "begin", "-5.2631578947368425s"], ["routerLink", "/visites/persist", 1, "btn", "btn-primary", "ms-2"], [1, "fas", "fa-plus-circle"], ["colspan", "8", 1, "text-center"], [3, "result", "term"], ["target", "_blank", 3, "routerLink", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["href", "javascript: void(0);", "fragment", "anomalies-list", 3, "routerLink"], ["NoAnomalies", ""], ["align", "center"], ["ngbDropdown", "", "placement", "bottom-left", 4, "ngIf"], ["target", "_blank", 3, "routerLink"], [1, "badge", "badge-soft-danger", "c-pointer", "rounded-pill", "border-danger", "border", "px-3", "py-2", "font-size-13", "w-100"], [1, "fas", "fa-exclamation-triangle", "me-2"], [1, "text-body"], ["AllResolved", ""], [1, "badge", "badge-soft-info", "c-pointer", "rounded-pill", "border-info", "border", "px-3", "py-2", "font-size-13", "w-100"], [1, "fas", "fa-info-circle", "me-2"], [1, "badge", "badge-soft-success", "c-pointer", "rounded-pill", "border-success", "border", "px-3", "py-2", "font-size-13", "w-100"], [1, "fas", "fa-check-circle", "me-2"], ["ngbDropdown", "", "placement", "bottom-left"], ["ngbDropdownToggle", "", "data-toggle", "dropdown", "aria-expanded", "true", 1, "fas", "fa-ellipsis-h", "dropdown-toggle", "c-pointer"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-end"], ["class", "dropdown-item", "href", "javascript: void(0);", 3, "routerLink", 4, "ngIf"], ["class", "dropdown-item text-danger", "href", "javascript: void(0);", 3, "click", 4, "ngIf"], ["href", "javascript: void(0);", 1, "dropdown-item", 3, "routerLink"], [1, "fas", "fa-eye", "me-2"], [1, "fas", "fa-edit", "me-2"], ["href", "javascript: void(0);", 1, "dropdown-item", "text-danger", 3, "click"], [1, "fas", "fa-trash", "me-2"], ["class", "row justify-content-md-between align-items-md-center mt-2", 4, "ngIf"], [1, "row", "justify-content-md-between", "align-items-md-center", "mt-2"], [1, "col-sm-12", "col-md-5"], ["id", "tickets-table_info", "role", "status", "aria-live", "polite", 1, "dataTables_info", "mb-2"], [1, "text-md-right", "float-md-end", "pagination-rounded"], [3, "collectionSize", "page", "pageSize", "maxSize", "pageChange"]], template: function visitesListComponent_Template(rf, ctx) { if (rf & 1) {
        const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, visitesListComponent_div_1_Template, 5, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "app-page-title", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, visitesListComponent_a_6_Template, 3, 0, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function visitesListComponent_Template_form_ngSubmit_11_listener() { return ctx.service.onSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "D\u00E9part");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "De");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "\u00C0");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Longueur visit\u00E9e");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "\u00C9quipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Anomalies");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "input", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function visitesListComponent_Template_input_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r68); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](37); return _r3.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "input", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function visitesListComponent_Template_input_click_39_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r68); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](41); return _r5.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](43, "ng-select", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](45, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "ng-select", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](49, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](50, visitesListComponent_ng_template_50_Template, 2, 2, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](51, visitesListComponent_ng_template_51_Template, 2, 2, "ng-template", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "ng-select", 28, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](55, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](56, visitesListComponent_ng_template_56_Template, 2, 2, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](57, visitesListComponent_ng_template_57_Template, 2, 2, "ng-template", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](59, "input", 30, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](62, "ng-select", 32, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](64, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](65, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](68, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69, "Rechercher ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function visitesListComponent_Template_button_click_70_listener() { return ctx.service.findAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](71, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72, "R\u00E9initialiser ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](74, visitesListComponent_td_74_Template, 2, 0, "td", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](75, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](76, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](77, visitesListComponent_td_77_Template, 2, 0, "td", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](78, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](79, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](80, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](81, visitesListComponent_tr_81_Template, 26, 21, "tr", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](82, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](83, visitesListComponent_ng_container_83_Template, 2, 1, "ng-container", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](84, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.authService.isAuthorized("statistiques_show"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.authService.isAuthorized("visites_add"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.service.visiteForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](45, 30, ctx.service.departments$))("multiple", true)("minTermLength", 2)("loading", ctx.service.departmentLoading)("typeahead", ctx.service.departmentInput$);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](49, 32, ctx.service.ANode$))("multiple", true)("minTermLength", 2)("readonly", !ctx.service.departments)("loading", ctx.service.ANodeLoading)("typeahead", ctx.service.ANodeInput$);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](55, 34, ctx.service.BNode$))("multiple", true)("minTermLength", 2)("readonly", !ctx.service.departments)("loading", ctx.service.BNodeLoading)("typeahead", ctx.service.BNodeInput$);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](64, 36, ctx.service.teams$))("multiple", true)("minTermLength", 2)("loading", ctx.service.teamLoading)("typeahead", ctx.service.teamInput$);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](75, 38, !_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](76, 40, ctx.service.visites$) && ctx.service.loading$));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](78, 42, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](79, 44, ctx.service.visites$) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](80, 46, ctx.service.visites$).length === 0 && ctx.service.loaded$));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](82, 48, ctx.service.visites$));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](84, 50, ctx.service.pagination$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_3__.PagetitleComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbInputDatepicker, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["ɵh"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["ɵf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, ng_apexcharts__WEBPACK_IMPORTED_MODULE_11__.ChartComponent, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkWithHref, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbHighlight, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbPagination], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_visites_visite_module_ts.js.map