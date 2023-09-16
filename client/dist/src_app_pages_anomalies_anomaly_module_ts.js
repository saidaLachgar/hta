"use strict";
(self["webpackChunkskote"] = self["webpackChunkskote"] || []).push([["src_app_pages_anomalies_anomaly_module_ts"],{

/***/ 32270:
/*!****************************************************************************!*\
  !*** ./src/app/pages/anomalies/anomalies-list/anomalies-list.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "anomaliesListComponent": () => (/* binding */ anomaliesListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _anomaly_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../anomaly.service */ 24038);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/auth.service */ 67686);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ 15025);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var ngx_ui_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-ui-switch */ 54247);










function anomaliesListComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function anomaliesListComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Ajouter");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function anomaliesListComponent_ng_option_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ng-option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", option_r13.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", option_r13.label, " ");
} }
function anomaliesListComponent_td_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Chargement... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function anomaliesListComponent_td_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Aucune donn\u00E9e trouv\u00E9e ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function anomaliesListComponent_tr_74_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 51);
} }
const _c0 = function (a1) { return ["/users/details", a1]; };
function anomaliesListComponent_tr_74_a_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ctx_r17.authService.isAuthorized("users_details") ? _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c0, item_r14.createdBy.id) : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r14.createdBy.fullName, " ");
} }
const _c1 = function (a1) { return ["/departments/details", a1]; };
function anomaliesListComponent_tr_74_ng_container_12_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ctx_r21.authService.isAuthorized("departments_details") ? _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c1, item_r14.edge.department.id) : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r14.edge.department.titre);
} }
const _c2 = function (a1) { return ["/edges/details", a1]; };
function anomaliesListComponent_tr_74_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, anomaliesListComponent_tr_74_ng_container_12_a_1_Template, 2, 4, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r14.edge.department);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ctx_r18.authService.isAuthorized("edges_details") ? _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](4, _c2, item_r14.edge.id) : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", item_r14.edge.node_a.titre, " - ", item_r14.edge.node_b.titre, "");
} }
const _c3 = function (a1) { return ["details", a1]; };
function anomaliesListComponent_tr_74_div_17_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Voir ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](1, _c3, item_r14.id));
} }
const _c4 = function (a1) { return ["update", a1]; };
function anomaliesListComponent_tr_74_div_17_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Modifier ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](1, _c4, item_r14.id));
} }
function anomaliesListComponent_tr_74_div_17_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function anomaliesListComponent_tr_74_div_17_a_5_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31); const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r29.service.deleteItem(item_r14.id, $event.target); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Supprimer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function anomaliesListComponent_tr_74_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, anomaliesListComponent_tr_74_div_17_a_3_Template, 3, 3, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, anomaliesListComponent_tr_74_div_17_a_4_Template, 3, 3, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, anomaliesListComponent_tr_74_div_17_a_5_Template, 3, 0, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r19.authService.isAuthorized("anomalies_details"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r19.authService.isAuthorized("anomalies_update"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r19.authService.isAuthorized("anomalies_delete"));
} }
function anomaliesListComponent_tr_74_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ui-switch", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("changeEvent", function anomaliesListComponent_tr_74_Template_ui_switch_changeEvent_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r33); const item_r14 = restoredCtx.$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r32.service.updateStatus($event, item_r14.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, anomaliesListComponent_tr_74_i_3_Template, 1, 0, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "ngb-highlight", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, anomaliesListComponent_tr_74_a_10_Template, 5, 4, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, anomaliesListComponent_tr_74_ng_container_12_Template, 5, 6, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "ngb-highlight", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, anomaliesListComponent_tr_74_div_17_Template, 6, 3, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](41);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](53);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", item_r14.status ? item_r14.status : false)("disabled", !ctx_r11.authService.isAuthorized("anomalies_update"))("loading", ctx_r11.service.statusLoading === item_r14.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r11.service.statusLoading === item_r14.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("badge badge-pill font-size-11 badge-soft-", ctx_r11.service.getSeverity(item_r14.severity, true), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r11.service.getSeverity(item_r14.severity, false), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("result", item_r14.title)("term", _r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r14.createdBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r14.edge);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("result", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](15, 15, item_r14.createdAt, "medium", "Africa/Casablanca"))("term", _r5.value + _r7.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r11.authService.isAuthorized("anomalies_details") || ctx_r11.authService.isAuthorized("anomalies_update") || ctx_r11.authService.isAuthorized("anomalies_delete"));
} }
function anomaliesListComponent_ng_container_76_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ngb-pagination", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("pageChange", function anomaliesListComponent_ng_container_76_div_1_Template_ngb_pagination_pageChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r36.service.page = $event; })("pageChange", function anomaliesListComponent_ng_container_76_div_1_Template_ngb_pagination_pageChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r37); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r38.service.onPaginate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pagination_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngIf;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate3"](" Affichage de ", pagination_r34.startIndex, " \u00E0 ", pagination_r34.endIndex, " de ", pagination_r34.totalRecords, " entr\u00E9es ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("collectionSize", pagination_r34.totalRecords)("page", ctx_r35.service.page)("pageSize", ctx_r35.service.pageSize)("maxSize", 5);
} }
function anomaliesListComponent_ng_container_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, anomaliesListComponent_ng_container_76_div_1_Template, 7, 7, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const pagination_r34 = ctx.ngIf;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", pagination_r34.totalRecords > ctx_r12.service.pageSize);
} }
class anomaliesListComponent {
    constructor(service, fb, authService, config) {
        this.service = service;
        this.fb = fb;
        this.authService = authService;
        this.config = config;
        service.findAll();
        service.loadDepartments();
        service.loadUsers();
        service.anomalyForm = fb.group({
            severity: [null],
            status: [null],
            title: [""],
            before: [""],
            after: [""],
            "users.id[]": [""],
            "edge.department.id[]": [""],
        });
        config.notFoundText = 'Aucune donnée trouvée !';
    }
}
anomaliesListComponent.ɵfac = function anomaliesListComponent_Factory(t) { return new (t || anomaliesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_anomaly_service__WEBPACK_IMPORTED_MODULE_0__.anomalyService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectConfig)); };
anomaliesListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: anomaliesListComponent, selectors: [["app-anomalies-list"]], decls: 78, vars: 39, consts: [[1, "container-fluid", "mb-5"], [1, "row", "align-items-center", "justify-content-between", "mb-4"], [1, "col-auto"], ["title", "Liste des anomalies", 3, "breadcrumbItems"], ["class", "btn bg-light text-primary ms-2", "title", "Importer", 4, "ngIf"], ["routerLink", "/anomalies/add", "class", "btn btn-primary ms-2", 4, "ngIf"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "table-responsive", 3, "formGroup", "ngSubmit"], [1, "table", "table-bordered"], ["width", "10%"], ["width", "15%"], ["width", "123px"], ["valign", "middle"], ["formControlName", "status", "placeholder", "Statut..", 3, "searchable"], ["value", "true"], ["value", "false"], ["formControlName", "severity", "placeholder", "Priorit\u00E9..", 3, "searchable"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "Anomalie...", "formControlName", "title", 1, "form-control"], ["searchTitle", ""], ["formControlName", "users.id[]", "bindLabel", "fullName", "bindValue", "id", "placeholder", "Utilisateurs..", "typeToSearchText", "Veuillez saisir 2 caract\u00E8res ou plus", 3, "items", "multiple", "minTermLength", "loading", "typeahead"], ["formControlName", "edge.department.id[]", "bindLabel", "titre", "bindValue", "id", "placeholder", "D\u00E9part..", "typeToSearchText", "Veuillez saisir 2 caract\u00E8res ou plus", 3, "items", "multiple", "minTermLength", "loading", "typeahead"], ["searchDepar", ""], [1, "d-flex", "gap-2"], [1, "input-group", "clockpicker"], ["ngbDatepicker", "", "formControlName", "after", "placeholder", "De...", 1, "form-control", 3, "click"], ["searchDateStart", "", "ds", "ngbDatepicker"], ["ngbDatepicker", "", "formControlName", "before", "placeholder", "\u00C0...", 1, "form-control", 3, "click"], ["searchDateEnd", "", "de", "ngbDatepicker"], ["type", "submit", 1, "btn", "btn-sm", "btn-primary", "d-flex", "align-items-center"], [1, "bx", "bx-search", "me-1"], ["type", "reset", 1, "btn", "btn-sm", "text-primary", "flex", "align-items-center", 3, "click"], [1, "bx", "bx-x", "me-1"], ["class", "text-center", "colspan", "8", 4, "ngIf"], ["valign", "middle", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["title", "Importer", 1, "btn", "bg-light", "text-primary", "ms-2"], [1, "fas", "fa-download"], ["routerLink", "/anomalies/add", 1, "btn", "btn-primary", "ms-2"], [1, "fas", "fa-plus-circle"], [3, "value"], ["colspan", "8", 1, "text-center"], ["uncheckedLabel", "En attente", "checkedLabel", "Termin\u00E9", "checkedTextColor", "#fff", 3, "checked", "disabled", "loading", "changeEvent"], ["class", "fa fa-spinner fa-pulse", 4, "ngIf"], [3, "result", "term"], ["target", "_blank", "class", "d-flex align-items-center", 3, "routerLink", 4, "ngIf"], ["align", "center"], ["ngbDropdown", "", "placement", "bottom-left", 4, "ngIf"], [1, "fa", "fa-spinner", "fa-pulse"], ["target", "_blank", 1, "d-flex", "align-items-center", 3, "routerLink"], [1, "header-profile-user", "bg-transparent", "me-2"], [1, "avatar-title", "rounded-circle", "bg-transparent", "border", "text-muted", "small"], [1, "fas", "fa-user"], ["target", "_blank", 3, "routerLink", 4, "ngIf"], ["target", "_blank", 3, "routerLink"], ["ngbDropdown", "", "placement", "bottom-left"], ["ngbDropdownToggle", "", "data-toggle", "dropdown", "aria-expanded", "true", 1, "fas", "fa-ellipsis-h", "dropdown-toggle", "c-pointer"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-end"], ["class", "dropdown-item", "href", "javascript: void(0);", 3, "routerLink", 4, "ngIf"], ["class", "dropdown-item text-danger", "href", "javascript: void(0);", 3, "click", 4, "ngIf"], ["href", "javascript: void(0);", 1, "dropdown-item", 3, "routerLink"], [1, "fas", "fa-eye", "me-2"], [1, "fas", "fa-edit", "me-2"], ["href", "javascript: void(0);", 1, "dropdown-item", "text-danger", 3, "click"], [1, "fas", "fa-trash", "me-2"], ["class", "row justify-content-md-between align-items-md-center mt-2", 4, "ngIf"], [1, "row", "justify-content-md-between", "align-items-md-center", "mt-2"], [1, "col-sm-12", "col-md-5"], ["id", "tickets-table_info", "role", "status", "aria-live", "polite", 1, "dataTables_info", "mb-2"], [1, "text-md-right", "float-md-end", "pagination-rounded"], [3, "collectionSize", "page", "pageSize", "maxSize", "pageChange"]], template: function anomaliesListComponent_Template(rf, ctx) { if (rf & 1) {
        const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "app-page-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, anomaliesListComponent_button_5_Template, 2, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, anomaliesListComponent_a_6_Template, 3, 0, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function anomaliesListComponent_Template_form_ngSubmit_11_listener() { return ctx.service.onSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Statut");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Priorit\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Anomalie");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Cr\u00E9\u00E9 par");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "D\u00E9part");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "ng-select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "ng-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Termin\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "ng-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "En attente");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "ng-select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, anomaliesListComponent_ng_option_38_Template, 2, 2, "ng-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "input", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](43, "ng-select", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](44, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](46, "ng-select", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](48, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "input", 28, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function anomaliesListComponent_Template_input_click_52_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r40); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](54); return _r6.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "input", 30, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function anomaliesListComponent_Template_input_click_56_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r40); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](58); return _r8.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](61, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, "Rechercher ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function anomaliesListComponent_Template_button_click_63_listener() { return ctx.service.findAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](64, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "R\u00E9initialiser ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](67, anomaliesListComponent_td_67_Template, 2, 0, "td", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](68, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](69, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](70, anomaliesListComponent_td_70_Template, 2, 0, "td", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](71, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](72, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](73, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](74, anomaliesListComponent_tr_74_Template, 18, 19, "tr", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](75, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](76, anomaliesListComponent_ng_container_76_Template, 2, 1, "ng-container", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](77, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.authService.isAuthorized("anomalies_import"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.authService.isAuthorized("anomalies_add"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.service.anomalyForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("searchable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("searchable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.service.severityOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](44, 21, ctx.service.users$))("multiple", true)("minTermLength", 2)("loading", ctx.service.usersLoading)("typeahead", ctx.service.usersInput$);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](48, 23, ctx.service.departments$))("multiple", true)("minTermLength", 2)("loading", ctx.service.departmentLoading)("typeahead", ctx.service.departmentInput$);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](68, 25, !_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](69, 27, ctx.service.anomalies$) && ctx.service.loading$));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](71, 29, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](72, 31, ctx.service.anomalies$) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](73, 33, ctx.service.anomalies$).length === 0 && ctx.service.loaded$));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](75, 35, ctx.service.anomalies$));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](77, 37, ctx.service.pagination$));
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_2__.PagetitleComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["ɵr"], _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbInputDatepicker, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, ngx_ui_switch__WEBPACK_IMPORTED_MODULE_3__.UiSwitchComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbHighlight, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbPagination], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe], encapsulation: 2 });


/***/ }),

/***/ 21330:
/*!****************************************************************************!*\
  !*** ./src/app/pages/anomalies/anomaly-create/anomaly-create.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "anomalyCreateComponent": () => (/* binding */ anomalyCreateComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _anomaly_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../anomaly.service */ 24038);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-select/ng-select */ 15025);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);








function anomalyCreateComponent_ng_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ng-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", option_r7.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", option_r7.label, " ");
} }
function anomalyCreateComponent_ng_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ng-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const depar_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", "/api/departments/" + depar_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](depar_r8.titre);
} }
function anomalyCreateComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Ce champ est obligatoire.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function anomalyCreateComponent_ng_option_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ng-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const edge_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", edge_r10["@id"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](edge_r10.node_a.titre + " - " + edge_r10.node_b.titre);
} }
function anomalyCreateComponent_div_34_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ce champ est obligatoire.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function anomalyCreateComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, anomalyCreateComponent_div_34_span_1_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.service.edge.errors.required);
} }
function anomalyCreateComponent_div_40_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ce champ est obligatoire.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function anomalyCreateComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, anomalyCreateComponent_div_40_span_1_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.service.title.errors.required);
} }
function anomalyCreateComponent_i_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 28);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class anomalyCreateComponent {
    constructor(fb, service) {
        this.fb = fb;
        this.service = service;
        this.showError = false;
        this.breadCrumbItems = [{ label: 'Anomalies' }, { label: 'Nouveau anomaly', active: true }];
        service.loadDepartments(false);
        service.anomalyForm = this.fb.group({
            severity: [""],
            status: [false],
            title: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            edge: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            department: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
        });
    }
}
anomalyCreateComponent.ɵfac = function anomalyCreateComponent_Factory(t) { return new (t || anomalyCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_anomaly_service__WEBPACK_IMPORTED_MODULE_0__.anomalyService)); };
anomalyCreateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: anomalyCreateComponent, selectors: [["app-anomaly-create"]], decls: 50, vars: 23, consts: [[1, "container-fluid"], ["title", "Nouveau anomaly", 3, "breadcrumbItems"], [1, "row", "mt-4", 3, "formGroup", "ngSubmit"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "mb-3", "row"], [1, "col-6"], ["formControlName", "severity", "placeholder", "Priorit\u00E9..", 3, "searchable"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "status", "placeholder", "Statut..", 3, "searchable"], [3, "value"], ["formControlName", "department", "placeholder", "D\u00E9par..", 3, "change"], ["class", "invalid-feedback d-block", 4, "ngIf"], ["formControlName", "edge", "placeholder", "Tron\u00E7on..", 3, "readonly", "click"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "input-3"], ["formControlName", "title", "id", "input-3", "type", "text", 1, "form-control", 3, "ngClass"], [1, "row", "justify-content-end"], [1, "col-auto"], ["routerLink", "/anomalies", 1, "btn", "btn-light", "me-2"], [1, "fas", "fa-arrow-circle-left", "me-1"], [1, "btn", "btn-primary"], ["class", "bx bx-loader-alt fa-spin", 4, "ngIf"], [1, "invalid-feedback", "d-block"], ["postfeedback", ""], [1, "invalid-feedback"], [4, "ngIf"], [1, "bx", "bx-loader-alt", "fa-spin"]], template: function anomalyCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function anomalyCreateComponent_Template_form_ngSubmit_2_listener() { return ctx.service.onCreate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Priorit\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ng-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, anomalyCreateComponent_ng_option_11_Template, 2, 2, "ng-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Statut");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ng-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "ng-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Termin\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "ng-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "En attente");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "D\u00E9part");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "ng-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function anomalyCreateComponent_Template_ng_select_change_24_listener($event) { return ctx.service.loadEdgesByDepar($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, anomalyCreateComponent_ng_option_25_Template, 2, 2, "ng-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](26, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, anomalyCreateComponent_div_27_Template, 3, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Tron\u00E7on");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "ng-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function anomalyCreateComponent_Template_ng_select_click_31_listener() { return ctx.showError = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, anomalyCreateComponent_ng_option_32_Template, 2, 2, "ng-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](33, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, anomalyCreateComponent_div_34_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Anomalie");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "textarea", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, anomalyCreateComponent_div_40_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Retour \u00E0 la liste");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](47, anomalyCreateComponent_i_47_Template, 1, 0, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](48, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, " Ajouter");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.service.anomalyForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("searchable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.service.severityOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("searchable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](26, 15, ctx.service.departments$));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showError && !ctx.service.department.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("readonly", !ctx.service.department.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](33, 17, ctx.service.edgesInRange$));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.service.submitted && ctx.service.edge.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](21, _c0, ctx.service.title.invalid && ctx.service.submitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.service.submitted && ctx.service.title.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](48, 19, ctx.service.loading$));
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_1__.PagetitleComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["ɵr"], _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe], encapsulation: 2 });


/***/ }),

/***/ 99498:
/*!******************************************************************************!*\
  !*** ./src/app/pages/anomalies/anomaly-details/anomaly-details.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "anomalyDetailsComponent": () => (/* binding */ anomalyDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _anomaly_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../anomaly.service */ 24038);
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/auth.service */ 67686);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);






const _c0 = function (a1) { return ["/users/details", a1]; };
function anomalyDetailsComponent_tbody_7_a_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx_r1.authService.isAuthorized("users_details") ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c0, ctx_r1.anomaly.createdBy.id) : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.anomaly.createdBy.fullName, " ");
} }
const _c1 = function (a1) { return ["/departments/details", a1]; };
function anomalyDetailsComponent_tbody_7_ng_container_26_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx_r3.authService.isAuthorized("departments_details") ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c1, ctx_r3.anomaly.edge.department.id) : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.anomaly.edge.department.titre);
} }
const _c2 = function (a1) { return ["/edges/details", a1]; };
function anomalyDetailsComponent_tbody_7_ng_container_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, anomalyDetailsComponent_tbody_7_ng_container_26_a_1_Template, 2, 4, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.anomaly.edge.department);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx_r2.authService.isAuthorized("edges_details") ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c2, ctx_r2.anomaly.edge.id) : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r2.anomaly.edge.node_a.titre, " - ", ctx_r2.anomaly.edge.node_b.titre, "");
} }
function anomalyDetailsComponent_tbody_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Statut :");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Priorit\u00E9 :");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Anomalie :");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Cr\u00E9\u00E9 par :");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, anomalyDetailsComponent_tbody_7_a_21_Template, 5, 4, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "D\u00E9part :");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, anomalyDetailsComponent_tbody_7_ng_container_26_Template, 5, 6, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Date :");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](32, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.anomaly.status ? "Termin\u00E9" : "En attente", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("badge badge-pill font-size-11 badge-soft-", ctx_r0.service.getSeverity(ctx_r0.anomaly.severity, true), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.service.getSeverity(ctx_r0.anomaly.severity, false), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.anomaly.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.anomaly.createdBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.anomaly.edge);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](32, 9, ctx_r0.anomaly.createdAt, "medium", "Africa/Casablanca"), " ");
} }
class anomalyDetailsComponent {
    constructor(route, service, authService) {
        this.route = route;
        this.service = service;
        this.authService = authService;
        let id = route.snapshot.paramMap.get("id");
        service.getByKey(id).subscribe(obj => this.anomaly = obj);
    }
}
anomalyDetailsComponent.ɵfac = function anomalyDetailsComponent_Factory(t) { return new (t || anomalyDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_anomaly_service__WEBPACK_IMPORTED_MODULE_0__.anomalyService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService)); };
anomalyDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: anomalyDetailsComponent, selectors: [["app-anomaly-details"]], decls: 11, vars: 5, consts: [[1, "container-fluid"], ["title", "D\u00E9tail de l'interruption", 3, "Loading", "breadcrumbItems"], [1, "card", "mt-4"], [1, "card-body", "pt-5"], [1, "table-responsive"], [1, "table", "table-nowrap", "mb-0"], [4, "ngIf"], ["routerLink", "/anomalies", 1, "btn", "btn-light", "mt-4", "float-end"], [1, "fas", "fa-arrow-circle-left", "me-1"], ["valign", "middle"], ["scope", "row"], ["target", "_blank", "class", "d-flex align-items-center", 3, "routerLink", 4, "ngIf"], ["target", "_blank", 1, "d-flex", "align-items-center", 3, "routerLink"], [1, "header-profile-user", "bg-transparent", "me-2"], [1, "avatar-title", "rounded-circle", "bg-transparent", "border", "text-muted", "small"], [1, "fas", "fa-user"], ["target", "_blank", 3, "routerLink", 4, "ngIf"], ["target", "_blank", 3, "routerLink"]], template: function anomalyDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, anomalyDetailsComponent_tbody_7_Template, 33, 13, "tbody", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Retour \u00E0 la liste");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("Loading", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 3, ctx.service.loading$))("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.anomaly);
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_2__.PagetitleComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe], encapsulation: 2 });


/***/ }),

/***/ 1128:
/*!***********************************************************!*\
  !*** ./src/app/pages/anomalies/anomaly-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "anomalyRoutingModule": () => (/* binding */ anomalyRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_core_guards_role_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/guards/role.guard */ 59167);
/* harmony import */ var _anomaly_create_anomaly_create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./anomaly-create/anomaly-create.component */ 21330);
/* harmony import */ var _anomaly_details_anomaly_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./anomaly-details/anomaly-details.component */ 99498);
/* harmony import */ var _anomaly_update_anomaly_update_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./anomaly-update/anomaly-update.component */ 77732);
/* harmony import */ var _anomalies_list_anomalies_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./anomalies-list/anomalies-list.component */ 32270);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);








const routes = [
    { path: '', component: _anomalies_list_anomalies_list_component__WEBPACK_IMPORTED_MODULE_4__.anomaliesListComponent, canActivate: [src_app_core_guards_role_guard__WEBPACK_IMPORTED_MODULE_0__.RoleGuard], data: { access: 'anomalies_show' } },
    { path: 'add', component: _anomaly_create_anomaly_create_component__WEBPACK_IMPORTED_MODULE_1__.anomalyCreateComponent, canActivate: [src_app_core_guards_role_guard__WEBPACK_IMPORTED_MODULE_0__.RoleGuard], data: { access: 'anomalies_add' } },
    { path: 'update/:id', component: _anomaly_update_anomaly_update_component__WEBPACK_IMPORTED_MODULE_3__.anomalyUpdateComponent, canActivate: [src_app_core_guards_role_guard__WEBPACK_IMPORTED_MODULE_0__.RoleGuard], data: { access: 'anomalies_update' } },
    { path: 'details/:id', component: _anomaly_details_anomaly_details_component__WEBPACK_IMPORTED_MODULE_2__.anomalyDetailsComponent, canActivate: [src_app_core_guards_role_guard__WEBPACK_IMPORTED_MODULE_0__.RoleGuard], data: { access: 'anomalies_details' } },
];
class anomalyRoutingModule {
}
anomalyRoutingModule.ɵfac = function anomalyRoutingModule_Factory(t) { return new (t || anomalyRoutingModule)(); };
anomalyRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: anomalyRoutingModule });
anomalyRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](anomalyRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 77732:
/*!****************************************************************************!*\
  !*** ./src/app/pages/anomalies/anomaly-update/anomaly-update.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "anomalyUpdateComponent": () => (/* binding */ anomalyUpdateComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _anomaly_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../anomaly.service */ 24038);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ 15025);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);








function anomalyUpdateComponent_ng_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ng-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", option_r7.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", option_r7.label, " ");
} }
function anomalyUpdateComponent_ng_option_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ng-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const depar_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", "/api/departments/" + depar_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](depar_r8.titre);
} }
function anomalyUpdateComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Ce champ est obligatoire.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function anomalyUpdateComponent_ng_option_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ng-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const edge_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", edge_r10["@id"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](edge_r10.node_a.titre + " - " + edge_r10.node_b.titre);
} }
function anomalyUpdateComponent_div_36_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ce champ est obligatoire.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function anomalyUpdateComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, anomalyUpdateComponent_div_36_span_1_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.service.edge.errors.required);
} }
function anomalyUpdateComponent_div_42_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ce champ est obligatoire.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function anomalyUpdateComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, anomalyUpdateComponent_div_42_span_1_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.service.title.errors.required);
} }
function anomalyUpdateComponent_i_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 29);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class anomalyUpdateComponent {
    constructor(route, fb, service) {
        this.route = route;
        this.fb = fb;
        this.service = service;
        this.showError = false;
        this.breadCrumbItems = [{ label: 'Anomalies' }, { label: 'Mise à jour de anomalie', active: true }];
        this.id = Number(this.route.snapshot.paramMap.get('id'));
        service.loadDepartments(false);
        service.anomalyForm = fb.group({
            severity: [""],
            status: [false],
            title: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            edge: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            department: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
        });
        service.getByKey(this.id).subscribe((obj) => {
            // service.loadEdges(obj.edge ? [obj.edge] : []);
            service.anomalyForm.setValue({
                severity: obj.severity,
                status: obj.status,
                title: obj.title,
                department: obj.edge.department ? obj.edge.department["@id"] : null,
                edge: obj.edge ? obj.edge["@id"] : null,
            });
        });
    }
}
anomalyUpdateComponent.ɵfac = function anomalyUpdateComponent_Factory(t) { return new (t || anomalyUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_anomaly_service__WEBPACK_IMPORTED_MODULE_0__.anomalyService)); };
anomalyUpdateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: anomalyUpdateComponent, selectors: [["app-anomaly-update"]], decls: 52, vars: 29, consts: [[1, "container-fluid"], ["title", "Mettre \u00E0 jour de anomaly", 3, "Loading", "breadcrumbItems"], [1, "row", "mt-4", 3, "formGroup", "ngSubmit"], [1, "col-12", 3, "disabled"], [1, "card"], [1, "card-body"], [1, "mb-3", "row"], [1, "col-6"], ["formControlName", "severity", "placeholder", "Priorit\u00E9..", 3, "searchable"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "status", "placeholder", "Statut..", 3, "searchable"], [3, "value"], ["formControlName", "department", "placeholder", "D\u00E9par..", 3, "change"], ["class", "invalid-feedback d-block", 4, "ngIf"], ["formControlName", "edge", "placeholder", "Tron\u00E7on..", 3, "readonly", "click"], ["class", "invalid-feedback", 4, "ngIf"], [1, "col-12"], ["for", "input-3"], ["formControlName", "title", "id", "input-3", "type", "text", 1, "form-control", 3, "ngClass"], [1, "row", "justify-content-end"], [1, "col-auto"], ["routerLink", "/anomalies", 1, "btn", "btn-light", "me-2"], [1, "fas", "fa-arrow-circle-left", "me-1"], [1, "btn", "btn-primary"], ["class", "bx bx-loader-alt fa-spin", 4, "ngIf"], [1, "invalid-feedback", "d-block"], ["postfeedback", ""], [1, "invalid-feedback"], [4, "ngIf"], [1, "bx", "bx-loader-alt", "fa-spin"]], template: function anomalyUpdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function anomalyUpdateComponent_Template_form_ngSubmit_3_listener() { return ctx.service.onUpdate(ctx.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "fieldset", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Priorit\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ng-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, anomalyUpdateComponent_ng_option_13_Template, 2, 2, "ng-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Statut");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "ng-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "ng-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Termin\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "ng-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "En attente");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "D\u00E9part");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "ng-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function anomalyUpdateComponent_Template_ng_select_change_26_listener($event) { return ctx.service.loadEdgesByDepar($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, anomalyUpdateComponent_ng_option_27_Template, 2, 2, "ng-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](28, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, anomalyUpdateComponent_div_29_Template, 3, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Tron\u00E7on");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "ng-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function anomalyUpdateComponent_Template_ng_select_click_33_listener() { return ctx.showError = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, anomalyUpdateComponent_ng_option_34_Template, 2, 2, "ng-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](35, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, anomalyUpdateComponent_div_36_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Anomalie");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "textarea", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, anomalyUpdateComponent_div_42_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Retour \u00E0 la liste");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, anomalyUpdateComponent_i_49_Template, 1, 0, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](50, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, " Sauvegarder");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("Loading", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 17, ctx.service.loading$))("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.service.anomalyForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 19, ctx.service.loading$));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("searchable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.service.severityOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("searchable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](28, 21, ctx.service.departments$));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showError && !ctx.service.department.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("readonly", !ctx.service.department.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](35, 23, ctx.service.edgesInRange$));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.service.submitted && ctx.service.edge.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](27, _c0, ctx.service.title.invalid && ctx.service.submitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.service.submitted && ctx.service.title.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.service.submitted && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](50, 25, ctx.service.loading$));
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_1__.PagetitleComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["ɵr"], _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe], encapsulation: 2 });


/***/ }),

/***/ 80642:
/*!***************************************************!*\
  !*** ./src/app/pages/anomalies/anomaly.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "anomalyModule": () => (/* binding */ anomalyModule)
/* harmony export */ });
/* harmony import */ var _anomaly_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anomaly-routing.module */ 1128);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-apexcharts */ 86571);
/* harmony import */ var ngx_ui_switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-ui-switch */ 54247);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 51382);
/* harmony import */ var _anomalies_list_anomalies_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./anomalies-list/anomalies-list.component */ 32270);
/* harmony import */ var _anomaly_create_anomaly_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./anomaly-create/anomaly-create.component */ 21330);
/* harmony import */ var _anomaly_details_anomaly_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./anomaly-details/anomaly-details.component */ 99498);
/* harmony import */ var _anomaly_update_anomaly_update_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./anomaly-update/anomaly-update.component */ 77732);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);











class anomalyModule {
}
anomalyModule.ɵfac = function anomalyModule_Factory(t) { return new (t || anomalyModule)(); };
anomalyModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: anomalyModule });
anomalyModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _anomaly_routing_module__WEBPACK_IMPORTED_MODULE_0__.anomalyRoutingModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            ngx_ui_switch__WEBPACK_IMPORTED_MODULE_1__.UiSwitchModule.forRoot({
                size: 'small',
            }),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDatepickerModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_9__.NgApexchartsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](anomalyModule, { declarations: [_anomalies_list_anomalies_list_component__WEBPACK_IMPORTED_MODULE_3__.anomaliesListComponent,
        _anomaly_create_anomaly_create_component__WEBPACK_IMPORTED_MODULE_4__.anomalyCreateComponent,
        _anomaly_update_anomaly_update_component__WEBPACK_IMPORTED_MODULE_6__.anomalyUpdateComponent,
        _anomaly_details_anomaly_details_component__WEBPACK_IMPORTED_MODULE_5__.anomalyDetailsComponent], imports: [_anomaly_routing_module__WEBPACK_IMPORTED_MODULE_0__.anomalyRoutingModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, ngx_ui_switch__WEBPACK_IMPORTED_MODULE_1__.UiSwitchModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDatepickerModule,
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_9__.NgApexchartsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_anomalies_anomaly_module_ts.js.map