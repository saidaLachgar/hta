"use strict";
(self["webpackChunkskote"] = self["webpackChunkskote"] || []).push([["src_app_pages_departments_department_module_ts"],{

/***/ 66629:
/*!************************************************************************************!*\
  !*** ./src/app/pages/departments/department-create/department-create.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "departmentCreateComponent": () => (/* binding */ departmentCreateComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _department_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../department.service */ 66761);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ 15025);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);








function departmentCreateComponent_div_11_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ce champ est obligatoire.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function departmentCreateComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, departmentCreateComponent_div_11_span_1_Template, 2, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.service.titre.errors.required);
} }
function departmentCreateComponent_button_34_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function departmentCreateComponent_button_34_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](36); _r2.value = ""; return ctx_r7.service.selectedFile = null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "R\u00E9initialiser");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function departmentCreateComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "b", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", file_r9.name, " (", (file_r9.size / (1024 * 1024)).toFixed(2) + "MB", ")");
} }
function departmentCreateComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Seuls les fichiers de type images sont accept\u00E9s.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function departmentCreateComponent_i_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 37);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class departmentCreateComponent {
    constructor(fb, service) {
        this.fb = fb;
        this.service = service;
        this.breadCrumbItems = [{ label: 'Départ' }, { label: 'Nouveau Départ', active: true }];
        service.loadTeams();
        service.departmentForm = this.fb.group({
            titre: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            team: [""],
            longueur: [null],
            courantMax: [null],
        });
    }
}
departmentCreateComponent.ɵfac = function departmentCreateComponent_Factory(t) { return new (t || departmentCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_department_service__WEBPACK_IMPORTED_MODULE_0__.departmentService)); };
departmentCreateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: departmentCreateComponent, selectors: [["app-department-create"]], decls: 47, vars: 16, consts: [[1, "container-fluid"], ["title", "Nouveau D\u00E9part", 3, "breadcrumbItems"], [1, "row", "mt-4", 3, "formGroup", "ngSubmit"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "mb-3", "row"], ["for", "name-input", 1, "col-md-2", "col-form-label"], [1, "col-md-10"], ["formControlName", "titre", "type", "text", "id", "name-input", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["formControlName", "team", "bindLabel", "titre", "bindValue", "@id", "typeToSearchText", "Veuillez saisir 2 caract\u00E8res ou plus", 3, "items", "minTermLength", "loading", "typeahead"], ["for", "courantMax-input", 1, "col-md-2", "col-form-label"], ["formControlName", "courantMax", "type", "number", "step", "0.01", "id", "courantMax-input", 1, "form-control"], ["for", "longueur-input", 1, "col-md-2", "col-form-label"], ["formControlName", "longueur", "type", "number", "step", "0.01", "id", "longueur-input", 1, "form-control"], [1, "mb-4", "row", "form-group"], [1, "col-lg-2", "col-form-label", "text-lg-right"], [1, "col-lg-10"], ["type", "button", 1, "btn", "btn-sm", "btn-info", 3, "click"], ["type", "button", "class", "btn bg-soft btn-sm bg-info text-info ms-2", 3, "click", 4, "ngIf"], ["type", "file", "accept", "image/*", 2, "opacity", "0", 3, "change"], ["upload", ""], ["class", "bg-light d-flex p-2 text-muted rounded mt-2", 4, "ngFor", "ngForOf"], ["class", "form-text text-muted mt-2", 4, "ngIf"], [1, "row", "justify-content-end"], [1, "col-auto"], ["routerLink", "/departments", 1, "btn", "btn-light", "me-2"], [1, "fas", "fa-arrow-circle-left", "me-1"], [1, "btn", "btn-primary"], ["class", "bx bx-loader-alt fa-spin", 4, "ngIf"], [1, "invalid-feedback"], [4, "ngIf"], ["type", "button", 1, "btn", "bg-soft", "btn-sm", "bg-info", "text-info", "ms-2", 3, "click"], [1, "bg-light", "d-flex", "p-2", "text-muted", "rounded", "mt-2"], [1, "font-size-10"], [1, "form-text", "text-muted", "mt-2"], [1, "bx", "bx-loader-alt", "fa-spin"]], template: function departmentCreateComponent_Template(rf, ctx) { if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function departmentCreateComponent_Template_form_ngSubmit_2_listener() { return ctx.service.onCreate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Nom");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, departmentCreateComponent_div_11_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "\u00C9quipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "ng-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Courant Max");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Longueur");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Sh\u00E9mas LHTA :");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function departmentCreateComponent_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](36); return _r2.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, " Joindre un visuel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, departmentCreateComponent_button_34_Template, 2, 0, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "input", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function departmentCreateComponent_Template_input_change_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](36); return ctx.service.selectedFile = _r2.files; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, departmentCreateComponent_div_37_Template, 3, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, departmentCreateComponent_div_38_Template, 2, 0, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Retour \u00E0 la liste");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](45, departmentCreateComponent_i_45_Template, 1, 0, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, " Ajouter");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.service.departmentForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](14, _c0, ctx.service.titre.invalid && ctx.service.submitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.service.submitted && ctx.service.titre.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 12, ctx.service.teams$))("minTermLength", 2)("loading", ctx.service.teamLoading)("typeahead", ctx.service.teamInput$);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.service.selectedFile);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.service.selectedFile);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.service.selectedFile);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.service.isLoading);
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_1__.PagetitleComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe], encapsulation: 2 });


/***/ }),

/***/ 34837:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/departments/department-details/department-details.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "departmentDetailsComponent": () => (/* binding */ departmentDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-lightbox */ 15367);
/* harmony import */ var _department_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../department.service */ 66761);
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/auth.service */ 67686);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);







function departmentDetailsComponent_img_8_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function departmentDetailsComponent_img_8_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r2.lightbox.open([{ src: ctx_r2.department.visuel.contentUrl, thumb: "" }], 0, { showZoom: true }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r0.department.visuel.contentUrl, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a1) { return ["/teams/details", a1]; };
function departmentDetailsComponent_tbody_12_a_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ctx_r4.authService.isAuthorized("teams_details") ? _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c0, ctx_r4.department.team.id) : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r4.department.team.titre);
} }
function departmentDetailsComponent_tbody_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Titre :");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "\u00C9quipe :");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, departmentDetailsComponent_tbody_12_a_10_Template, 2, 4, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Courant Max :");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Longueur :");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.department.titre, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.department.team);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.department.courantMax, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.department.longueur, " ");
} }
class departmentDetailsComponent {
    constructor(route, lightbox, departmentService, authService) {
        this.route = route;
        this.lightbox = lightbox;
        this.departmentService = departmentService;
        this.authService = authService;
        let id = route.snapshot.paramMap.get("id");
        departmentService.getByKey(id).subscribe(obj => this.department = obj);
    }
}
departmentDetailsComponent.ɵfac = function departmentDetailsComponent_Factory(t) { return new (t || departmentDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_lightbox__WEBPACK_IMPORTED_MODULE_0__.Lightbox), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_department_service__WEBPACK_IMPORTED_MODULE_1__.departmentService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService)); };
departmentDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: departmentDetailsComponent, selectors: [["app-department-details"]], decls: 16, vars: 6, consts: [[1, "container-fluid"], ["title", "D\u00E9tails de l'utilisateur", 3, "Loading", "breadcrumbItems"], [1, "card", "mt-4"], [1, "card-body", "pt-5"], [1, "row"], [1, "col-md-6"], [1, "me-4", "bg-light", "rounded", 2, "width", "100%"], ["class", "rounded c-pointer w-100", "style", "height: auto;", 3, "src", "click", 4, "ngIf"], [1, "table-responsive"], [1, "table", "table-nowrap", "mb-0"], [4, "ngIf"], ["routerLink", "/departments", 1, "btn", "btn-light", "mt-4", "float-end"], [1, "fas", "fa-arrow-circle-left", "me-1"], [1, "rounded", "c-pointer", "w-100", 2, "height", "auto", 3, "src", "click"], ["valign", "middle"], ["scope", "row"], ["target", "_blank", "rel", "noopener noreferrer", 3, "routerLink", 4, "ngIf"], ["target", "_blank", "rel", "noopener noreferrer", 3, "routerLink"]], template: function departmentDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, departmentDetailsComponent_img_8_Template, 1, 1, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, departmentDetailsComponent_tbody_12_Template, 21, 4, "tbody", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Retour \u00E0 la liste");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("Loading", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 4, ctx.departmentService.loading$))("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.department.visuel);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.department);
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_3__.PagetitleComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe], encapsulation: 2 });


/***/ }),

/***/ 2572:
/*!****************************************************************!*\
  !*** ./src/app/pages/departments/department-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "departmentRoutingModule": () => (/* binding */ departmentRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_core_guards_role_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/guards/role.guard */ 59167);
/* harmony import */ var _department_create_department_create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./department-create/department-create.component */ 66629);
/* harmony import */ var _department_details_department_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./department-details/department-details.component */ 34837);
/* harmony import */ var _department_update_department_update_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./department-update/department-update.component */ 29925);
/* harmony import */ var _departments_list_departments_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./departments-list/departments-list.component */ 93054);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);








const routes = [
    { path: '', component: _departments_list_departments_list_component__WEBPACK_IMPORTED_MODULE_4__.departmentsListComponent, canActivate: [src_app_core_guards_role_guard__WEBPACK_IMPORTED_MODULE_0__.RoleGuard], data: { access: 'departments_show' } },
    { path: 'add', component: _department_create_department_create_component__WEBPACK_IMPORTED_MODULE_1__.departmentCreateComponent, canActivate: [src_app_core_guards_role_guard__WEBPACK_IMPORTED_MODULE_0__.RoleGuard], data: { access: 'departments_add' } },
    { path: 'update/:id', component: _department_update_department_update_component__WEBPACK_IMPORTED_MODULE_3__.departmentUpdateComponent, canActivate: [src_app_core_guards_role_guard__WEBPACK_IMPORTED_MODULE_0__.RoleGuard], data: { access: 'departments_update' } },
    { path: 'details/:id', component: _department_details_department_details_component__WEBPACK_IMPORTED_MODULE_2__.departmentDetailsComponent, canActivate: [src_app_core_guards_role_guard__WEBPACK_IMPORTED_MODULE_0__.RoleGuard], data: { access: 'departments_details' } },
];
class departmentRoutingModule {
}
departmentRoutingModule.ɵfac = function departmentRoutingModule_Factory(t) { return new (t || departmentRoutingModule)(); };
departmentRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: departmentRoutingModule });
departmentRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](departmentRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 29925:
/*!************************************************************************************!*\
  !*** ./src/app/pages/departments/department-update/department-update.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "departmentUpdateComponent": () => (/* binding */ departmentUpdateComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _department_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../department.service */ 66761);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ 15025);








function departmentUpdateComponent_div_13_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ce champ est obligatoire.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function departmentUpdateComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, departmentUpdateComponent_div_13_span_1_Template, 2, 0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.service.titre.errors.required);
} }
function departmentUpdateComponent_button_36_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function departmentUpdateComponent_button_36_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](38); _r2.value = ""; return ctx_r8.service.selectedFile = null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "R\u00E9initialiser");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function departmentUpdateComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "b", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", file_r10.name, " (", (file_r10.size / (1024 * 1024)).toFixed(2) + "MB", ")");
} }
function departmentUpdateComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Seuls les fichiers de type images sont accept\u00E9s.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function departmentUpdateComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function departmentUpdateComponent_div_41_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.service.FileRemoved = ctx_r11.service.uploadedFile.id; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r5.service.uploadedFile.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r5.service.uploadedFile.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function departmentUpdateComponent_i_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 42);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class departmentUpdateComponent {
    constructor(route, fb, service) {
        this.route = route;
        this.fb = fb;
        this.service = service;
        this.breadCrumbItems = [{ label: 'Départ' }, { label: 'Mise à jour du Départ', active: true }];
        this.id = Number(this.route.snapshot.paramMap.get('id'));
        service.departmentForm = fb.group({
            titre: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            team: [""],
            longueur: [null],
            courantMax: [null],
        });
        service.getByKey(this.id).subscribe((obj) => {
            service.loadTeams([obj.team]);
            service.uploadedFile = obj.visuel ? { id: obj.visuel.id, url: obj.visuel.contentUrl } : null;
            service.departmentForm.setValue({
                titre: obj.titre,
                courantMax: obj.courantMax,
                longueur: obj.longueur,
                team: obj.team ? obj.team["@id"] : null,
            });
        });
    }
}
departmentUpdateComponent.ɵfac = function departmentUpdateComponent_Factory(t) { return new (t || departmentUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_department_service__WEBPACK_IMPORTED_MODULE_0__.departmentService)); };
departmentUpdateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: departmentUpdateComponent, selectors: [["app-department-update"]], decls: 50, vars: 23, consts: [[1, "container-fluid"], ["title", "Mettre \u00E0 jour D\u00E9part", 3, "Loading", "breadcrumbItems"], [1, "row", "mt-4", 3, "formGroup", "ngSubmit"], [1, "col-12", 3, "disabled"], [1, "card"], [1, "card-body"], [1, "mb-3", "row"], ["for", "name-input", 1, "col-md-2", "col-form-label"], [1, "col-md-10"], ["formControlName", "titre", "type", "text", "id", "name-input", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["formControlName", "team", "bindLabel", "titre", "bindValue", "@id", "typeToSearchText", "Veuillez saisir 2 caract\u00E8res ou plus", 3, "items", "minTermLength", "loading", "typeahead"], ["for", "courantMax-input", 1, "col-md-2", "col-form-label"], ["formControlName", "courantMax", "type", "number", "step", "0.01", "id", "courantMax-input", 1, "form-control"], ["for", "longueur-input", 1, "col-md-2", "col-form-label"], ["formControlName", "longueur", "type", "number", "step", "0.01", "id", "longueur-input", 1, "form-control"], [1, "mb-4", "row", "form-group"], [1, "col-lg-2", "col-form-label", "text-lg-right"], [1, "col-lg-10"], ["type", "button", 1, "btn", "btn-sm", "btn-info", 3, "click"], ["type", "button", "class", "btn bg-soft btn-sm bg-info text-info ms-2", 3, "click", 4, "ngIf"], ["type", "file", "accept", "image/*", 2, "opacity", "0", 3, "change"], ["upload", ""], ["class", "bg-light d-flex p-2 text-muted rounded mt-2", 4, "ngFor", "ngForOf"], ["class", "form-text text-muted mt-2", 4, "ngIf"], ["class", "position-relative mt-4", "style", "width: 240px;", 4, "ngIf"], [1, "row", "justify-content-end"], [1, "col-auto"], ["routerLink", "/departments", 1, "btn", "btn-light", "me-2"], [1, "fas", "fa-arrow-circle-left", "me-1"], [1, "btn", "btn-primary"], ["class", "bx bx-loader-alt fa-spin", 4, "ngIf"], [1, "invalid-feedback"], [4, "ngIf"], ["type", "button", 1, "btn", "bg-soft", "btn-sm", "bg-info", "text-info", "ms-2", 3, "click"], [1, "bg-light", "d-flex", "p-2", "text-muted", "rounded", "mt-2"], [1, "font-size-10"], [1, "form-text", "text-muted", "mt-2"], [1, "position-relative", "mt-4", 2, "width", "240px"], ["target", "_blank", 1, "me-4", "bg-light", "rounded", 2, "cursor", "default", 3, "href"], [1, "img-fluid", "rounded", 3, "src"], [1, "fas", "position-absolute", "fa-trash", "shadow", "text-info", "fs-5", "bg-white", "p-2", "top-0", "end-0", "text-danger", "c-pointer", "border", "rounded-start", 3, "click"], [1, "bx", "bx-loader-alt", "fa-spin"]], template: function departmentUpdateComponent_Template(rf, ctx) { if (rf & 1) {
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function departmentUpdateComponent_Template_form_ngSubmit_3_listener() { return ctx.service.onUpdate(ctx.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "fieldset", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Titre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, departmentUpdateComponent_div_13_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "\u00C9quipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "ng-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Courant Max");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Longueur");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Sh\u00E9mas LHTA :");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function departmentUpdateComponent_Template_button_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](38); return _r2.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, " Joindre un visuel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, departmentUpdateComponent_button_36_Template, 2, 0, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "input", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function departmentUpdateComponent_Template_input_change_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](38); ctx.service.selectedFile = _r2.files; return ctx.service.uploadedFile && (ctx.service.FileRemoved = ctx.service.uploadedFile.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, departmentUpdateComponent_div_39_Template, 3, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, departmentUpdateComponent_div_40_Template, 2, 0, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, departmentUpdateComponent_div_41_Template, 4, 2, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Retour \u00E0 la liste");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](48, departmentUpdateComponent_i_48_Template, 1, 0, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, " Sauvegarder");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("Loading", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 15, ctx.service.loading$))("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.service.departmentForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 17, ctx.service.loading$));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](21, _c0, ctx.service.titre.invalid && ctx.service.submitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.service.submitted && ctx.service.titre.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 19, ctx.service.teams$))("minTermLength", 2)("loading", ctx.service.teamLoading)("typeahead", ctx.service.teamInput$);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.service.selectedFile);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.service.selectedFile);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.service.selectedFile);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.service.uploadedFile && ctx.service.FileRemoved === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.service.submitted && ctx.service.isLoading);
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_1__.PagetitleComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe], encapsulation: 2 });


/***/ }),

/***/ 89249:
/*!********************************************************!*\
  !*** ./src/app/pages/departments/department.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "departmentModule": () => (/* binding */ departmentModule)
/* harmony export */ });
/* harmony import */ var _department_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./department-routing.module */ 2572);
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-lightbox */ 15367);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 51382);
/* harmony import */ var _department_create_department_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./department-create/department-create.component */ 66629);
/* harmony import */ var _department_details_department_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./department-details/department-details.component */ 34837);
/* harmony import */ var _department_update_department_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./department-update/department-update.component */ 29925);
/* harmony import */ var _departments_list_departments_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./departments-list/departments-list.component */ 93054);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
// import { UIModule } from 'src/app/shared/ui/ui.module';








class departmentModule {
}
departmentModule.ɵfac = function departmentModule_Factory(t) { return new (t || departmentModule)(); };
departmentModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: departmentModule });
departmentModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _department_routing_module__WEBPACK_IMPORTED_MODULE_0__.departmentRoutingModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__.LightboxModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](departmentModule, { declarations: [_departments_list_departments_list_component__WEBPACK_IMPORTED_MODULE_6__.departmentsListComponent,
        _department_create_department_create_component__WEBPACK_IMPORTED_MODULE_3__.departmentCreateComponent,
        _department_update_department_update_component__WEBPACK_IMPORTED_MODULE_5__.departmentUpdateComponent,
        _department_details_department_details_component__WEBPACK_IMPORTED_MODULE_4__.departmentDetailsComponent], imports: [_department_routing_module__WEBPACK_IMPORTED_MODULE_0__.departmentRoutingModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__.LightboxModule] }); })();


/***/ }),

/***/ 66761:
/*!*********************************************************!*\
  !*** ./src/app/pages/departments/department.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "departmentService": () => (/* binding */ departmentService)
/* harmony export */ });
/* harmony import */ var _ngrx_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/data */ 97544);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 64008);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 81220);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 18252);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 99457);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 9820);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 98785);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 48027);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 85029);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 29026);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 10592);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_shared_components_confirm_dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/components/confirm-dialog/confirm-dialog.service */ 7393);
/* harmony import */ var _medias_media_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../medias/media.service */ 5069);
/* harmony import */ var _ngneat_hot_toast__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngneat/hot-toast */ 82456);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 83981);










class departmentService extends _ngrx_data__WEBPACK_IMPORTED_MODULE_3__.EntityCollectionServiceBase {
    constructor(serviceElementsFactory, confirmDialogService, MediasService, toast, http) {
        super("departments", serviceElementsFactory);
        this.serviceElementsFactory = serviceElementsFactory;
        this.confirmDialogService = confirmDialogService;
        this.MediasService = MediasService;
        this.toast = toast;
        this.http = http;
        this.pageSize = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.pageSize;
        this.server = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.serverURL;
        this.teamLoading = false;
        this.teamInput$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.submitted = false;
        this.isLoading = false;
        this.FileRemoved = false;
        this.page = 1;
    }
    /**
     * Get records
     */
    findAll() {
        this.findByCriteria({ page: 1 });
    }
    loadTeams(defaultVal = []) {
        this.teams$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.concat)((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(defaultVal), // default items
        this.teamInput$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.filter)((val) => val != null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(() => this.teamLoading = true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.switchMap)(term => this.http.get(`${this.server}/api/teams?properties[]=id&properties[]=titre&titre=` + term)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(response => response["hydra:member"]), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)([])), // empty list on error
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(() => this.teamLoading = false)))));
    }
    /**
     * Get pagination
     */
    getPagination() {
        this.pagination$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(); // reset pagination
        this.pagination$ = this.selectors$.entityActions$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(action => action.payload.pagination));
    }
    /**
     * Delete item
     * @param id department id
     * @param target html element
     */
    deleteItem(id, target) {
        this.confirmDialogService.setConfirmation("Vous êtes sûr de vouloir supprimer?", () => {
            this.delete(id)
                .pipe(this.toast.observe({
                loading: "Suppression...",
                success: () => {
                    target.closest("tr").remove();
                    return "Départ supprimé avec succès";
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
        this.lastSearchedParams = this.departmentForm.value;
        this.findByCriteria(Object.assign({ page: 1 }, this.lastSearchedParams));
    }
    /**
     * Persist : Create
     */
    onCreate() {
        let form = this.departmentForm;
        this.submitted = true;
        if (form.invalid)
            return;
        this.submitted = false;
        this.isLoading = true;
        let toast = this.toast;
        let observable;
        let _this = this;
        let obj = Object.entries(form.value);
        // remove empty values
        const department = Object.fromEntries(obj.filter(([key, value]) => value !== ""));
        // if has attachment add new observable to upload the file
        if (this.selectedFile) {
            // upload the attach file id to department
            observable = this.MediasService.Upload(this.selectedFile[0]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.switchMap)(response => {
                department.visuel = response["@id"];
                return this.add(department);
            }));
        }
        else {
            observable = this.add(department);
        }
        // subscribe
        observable.subscribe({
            error: () => {
                _this.isLoading = false;
                toast.error("un problème est survenu, veuillez réessayer");
            },
            complete() {
                form.reset();
                _this.isLoading = false;
                _this.selectedFile = null;
                toast.success("Départ ajouté avec succès");
            },
        });
    }
    /**
     * Persist : update
     */
    onUpdate(id) {
        let form = this.departmentForm;
        this.submitted = true;
        if (form.invalid)
            return;
        this.submitted = false;
        this.isLoading = true;
        let _this = this;
        let toast = this.toast;
        let observables = [];
        let obj = Object.entries(form.value);
        // remove empty values
        const department = Object.fromEntries(obj.filter(([key, value]) => value !== ""));
        department.id = id;
        this.FileRemoved !== false && (department.visuel = null);
        // x if added (for first time just add it id)
        // if updated remove the old one and update the id
        // if removed remove it id and delete it from server
        // if has attachment add new observable to upload the file
        if (this.selectedFile) {
            this.isLoading = true;
            // upload the attach file id to department
            observables.push(this.MediasService.Upload(this.selectedFile[0]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.switchMap)(obj => {
                this.uploadedFile = { id: obj.id, url: obj.contentUrl };
                this.selectedFile = null;
                this.FileRemoved = false;
                department.visuel = obj["@id"];
                return this.update(department);
            })));
        }
        else {
            observables.push(this.update(department));
        }
        // subscribe
        (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.forkJoin)(observables).subscribe({
            error: () => {
                _this.isLoading = false;
                toast.error("un problème est survenu, veuillez réessayer");
            },
            complete() {
                if (_this.FileRemoved !== false) {
                    _this.MediasService.delete(_this.FileRemoved).subscribe(() => {
                        _this.isLoading = false;
                        toast.success("Départ a été mis à jour avec succès");
                    });
                }
                else {
                    _this.isLoading = false;
                    toast.success("Départ a été mis à jour avec succès");
                }
            },
        });
    }
    get titre() {
        return this.departmentForm.get("titre");
    }
    get visuel() {
        return this.departmentForm.get("visuel");
    }
    get team() {
        return this.departmentForm.get("team");
    }
    /**
     * find By Criteria
     * @param obj query parameters
     */
    findByCriteria(obj) {
        this.departments$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)([]); // clear table
        // remove empty values
        let queryParams = Object.keys(obj)
            .filter((k) => obj[k] != "" && obj[k] != null)
            .reduce((a, k) => (Object.assign(Object.assign({}, a), { [k]: obj[k] })), {});
        this.departments$ = this.getWithQuery(queryParams);
        this.getPagination();
    }
    /**
     * on Paginate
     * @param page page to search for
     */
    onPaginate(page) {
        this.findByCriteria(Object.assign({ page: page }, this.lastSearchedParams));
    }
}
departmentService.ɵfac = function departmentService_Factory(t) { return new (t || departmentService)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_ngrx_data__WEBPACK_IMPORTED_MODULE_3__.EntityCollectionServiceElementsFactory), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](src_app_shared_components_confirm_dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_1__.ConfirmDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_medias_media_service__WEBPACK_IMPORTED_MODULE_2__.mediasService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_ngneat_hot_toast__WEBPACK_IMPORTED_MODULE_16__.HotToastService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClient)); };
departmentService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjectable"]({ token: departmentService, factory: departmentService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 93054:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/departments/departments-list/departments-list.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "departmentsListComponent": () => (/* binding */ departmentsListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _department_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../department.service */ 66761);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/auth.service */ 67686);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ 15025);
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-lightbox */ 15367);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);










function departmentsListComponent_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Ajouter");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function departmentsListComponent_td_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Chargement... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function departmentsListComponent_td_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Aucune donn\u00E9e trouv\u00E9e ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function departmentsListComponent_tr_53_img_4_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function departmentsListComponent_tr_53_img_4_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const department_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r14.lightbox.open([{ src: department_r9.visuel.contentUrl, thumb: "" }], 0, { showZoom: true }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const department_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", department_r9.visuel.contentUrl, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a1) { return ["/teams/details", a1]; };
function departmentsListComponent_tr_53_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const department_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ctx_r12.authService.isAuthorized("teams_details") ? _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c0, department_r9.team.id) : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](department_r9.team.titre);
} }
const _c1 = function (a1) { return ["details", a1]; };
function departmentsListComponent_tr_53_div_14_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Voir ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const department_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](1, _c1, department_r9.id));
} }
const _c2 = function (a1) { return ["update", a1]; };
function departmentsListComponent_tr_53_div_14_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Modifier ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const department_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](1, _c2, department_r9.id));
} }
function departmentsListComponent_tr_53_div_14_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function departmentsListComponent_tr_53_div_14_a_5_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r26); const department_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r24.departmentService.deleteItem(department_r9.id, $event.target); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Supprimer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function departmentsListComponent_tr_53_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, departmentsListComponent_tr_53_div_14_a_3_Template, 3, 3, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, departmentsListComponent_tr_53_div_14_a_4_Template, 3, 3, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, departmentsListComponent_tr_53_div_14_a_5_Template, 3, 0, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r13.authService.isAuthorized("departments_details"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r13.authService.isAuthorized("departments_update"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r13.authService.isAuthorized("departments_delete"));
} }
function departmentsListComponent_tr_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, departmentsListComponent_tr_53_img_4_Template, 1, 1, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "ngb-highlight", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, departmentsListComponent_tr_53_a_8_Template, 2, 4, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "ngb-highlight", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "ngb-highlight", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, departmentsListComponent_tr_53_div_14_Template, 6, 3, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const department_r9 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](27);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](34);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", department_r9.visuel);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("result", department_r9.titre)("term", _r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", department_r9.team);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("result", department_r9.courantMax)("term", _r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("result", department_r9.longueur)("term", _r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r7.authService.isAuthorized("departments_details") || ctx_r7.authService.isAuthorized("departments_update") || ctx_r7.authService.isAuthorized("departments_delete"));
} }
function departmentsListComponent_ng_container_55_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ngb-pagination", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("pageChange", function departmentsListComponent_ng_container_55_div_1_Template_ngb_pagination_pageChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r29.departmentService.page = $event; })("pageChange", function departmentsListComponent_ng_container_55_div_1_Template_ngb_pagination_pageChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r30); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r31.departmentService.onPaginate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pagination_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngIf;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate3"](" Affichage de ", pagination_r27.startIndex, " \u00E0 ", pagination_r27.endIndex, " de ", pagination_r27.totalRecords, " entr\u00E9es ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("collectionSize", pagination_r27.totalRecords)("page", ctx_r28.departmentService.page)("pageSize", ctx_r28.departmentService.pageSize)("maxSize", 5);
} }
function departmentsListComponent_ng_container_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, departmentsListComponent_ng_container_55_div_1_Template, 7, 7, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const pagination_r27 = ctx.ngIf;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", pagination_r27.totalRecords > ctx_r8.departmentService.pageSize);
} }
class departmentsListComponent {
    constructor(departmentService, fb, authService, config, lightbox) {
        this.departmentService = departmentService;
        this.fb = fb;
        this.authService = authService;
        this.config = config;
        this.lightbox = lightbox;
        departmentService.findAll();
        departmentService.loadTeams();
        departmentService.departmentForm = fb.group({
            titre: [''],
            longueur: [null],
            courantMax: [null],
            "team.id[]": [''],
        });
        config.notFoundText = 'Aucune donnée trouvée !';
    }
}
departmentsListComponent.ɵfac = function departmentsListComponent_Factory(t) { return new (t || departmentsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_department_service__WEBPACK_IMPORTED_MODULE_0__.departmentService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectConfig), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_lightbox__WEBPACK_IMPORTED_MODULE_2__.Lightbox)); };
departmentsListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: departmentsListComponent, selectors: [["app-departments-list"]], decls: 57, vars: 28, consts: [[1, "container-fluid", "mb-5"], [1, "row", "align-items-center", "justify-content-between", "mb-4"], [1, "col-auto"], ["title", "Les D\u00E9part", 3, "breadcrumbItems"], ["routerLink", "/departments/add", "class", "btn btn-primary ms-2", 4, "ngIf"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "table-responsive", 3, "formGroup", "ngSubmit"], [1, "table", "table-bordered"], ["width", "123px"], ["valign", "middle"], ["type", "text", "placeholder", "Titre...", "formControlName", "titre", 1, "form-control"], ["searchTitre", ""], ["formControlName", "team.id[]", "bindLabel", "titre", "bindValue", "id", "placeholder", "\u00C9quipe..", "typeToSearchText", "Veuillez saisir 2 caract\u00E8res ou plus", 3, "items", "multiple", "minTermLength", "loading", "typeahead"], ["searchTeam", ""], ["type", "number", "step", "0.01", "placeholder", "Courant Max...", "formControlName", "courantMax", 1, "form-control"], ["searchCourantMax", ""], ["type", "number", "step", "0.01", "placeholder", "Longueur...", "formControlName", "longueur", 1, "form-control"], ["searchLongueur", ""], ["type", "submit", 1, "btn", "btn-sm", "btn-primary", "d-flex", "align-items-center"], [1, "bx", "bx-search", "me-1"], ["type", "reset", 1, "btn", "btn-sm", "text-primary", "flex", "align-items-center", 3, "click"], [1, "bx", "bx-x", "me-1"], ["class", "text-center", "colspan", "5", 4, "ngIf"], ["valign", "middle", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["routerLink", "/departments/add", 1, "btn", "btn-primary", "ms-2"], [1, "fas", "fa-plus-circle"], ["colspan", "5", 1, "text-center"], [1, "d-flex", "align-items-center"], [1, "me-4", "bg-light", "rounded", 2, "width", "80px", "height", "39px"], ["class", "rounded c-pointer w-100 h-100", "style", "object-fit: cover;", 3, "src", "click", 4, "ngIf"], [1, "text-uppercase", "fw-bold"], [3, "result", "term"], ["target", "_blank", "rel", "noopener noreferrer", 3, "routerLink", 4, "ngIf"], ["align", "center"], ["ngbDropdown", "", "placement", "bottom-left", 4, "ngIf"], [1, "rounded", "c-pointer", "w-100", "h-100", 2, "object-fit", "cover", 3, "src", "click"], ["target", "_blank", "rel", "noopener noreferrer", 3, "routerLink"], ["ngbDropdown", "", "placement", "bottom-left"], ["ngbDropdownToggle", "", "data-toggle", "dropdown", "aria-expanded", "true", 1, "fas", "fa-ellipsis-h", "dropdown-toggle", "c-pointer"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-end"], ["class", "dropdown-item", "href", "javascript: void(0);", 3, "routerLink", 4, "ngIf"], ["class", "dropdown-item text-danger", "href", "javascript: void(0);", 3, "click", 4, "ngIf"], ["href", "javascript: void(0);", 1, "dropdown-item", 3, "routerLink"], [1, "fas", "fa-eye", "me-2"], [1, "fas", "fa-edit", "me-2"], ["href", "javascript: void(0);", 1, "dropdown-item", "text-danger", 3, "click"], [1, "fas", "fa-trash", "me-2"], ["class", "row justify-content-md-between align-items-md-center mt-2", 4, "ngIf"], [1, "row", "justify-content-md-between", "align-items-md-center", "mt-2"], [1, "col-sm-12", "col-md-5"], ["id", "tickets-table_info", "role", "status", "aria-live", "polite", 1, "dataTables_info", "mb-2"], [1, "text-md-right", "float-md-end", "pagination-rounded"], [3, "collectionSize", "page", "pageSize", "maxSize", "pageChange"]], template: function departmentsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "app-page-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, departmentsListComponent_a_5_Template, 3, 0, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function departmentsListComponent_Template_form_ngSubmit_10_listener() { return ctx.departmentService.onSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Titre");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "\u00C9quipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Courant Max ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Longueur");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "ng-select", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](31, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](36, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Rechercher ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function departmentsListComponent_Template_button_click_42_listener() { return ctx.departmentService.findAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](43, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "R\u00E9initialiser ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](46, departmentsListComponent_td_46_Template, 2, 0, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](47, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](48, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](49, departmentsListComponent_td_49_Template, 2, 0, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](50, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](51, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](52, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](53, departmentsListComponent_tr_53_Template, 15, 9, "tr", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](54, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](55, departmentsListComponent_ng_container_55_Template, 2, 1, "ng-container", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](56, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.authService.isAuthorized("departments_add"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.departmentService.departmentForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](31, 12, ctx.departmentService.teams$))("multiple", true)("minTermLength", 2)("loading", ctx.departmentService.teamLoading)("typeahead", ctx.departmentService.teamInput$);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](47, 14, !_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](48, 16, ctx.departmentService.departments$) && ctx.departmentService.loading$));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](50, 18, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](51, 20, ctx.departmentService.departments$) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](52, 22, ctx.departmentService.departments$).length === 0 && ctx.departmentService.loaded$));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](54, 24, ctx.departmentService.departments$));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](56, 26, ctx.departmentService.pagination$));
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_3__.PagetitleComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbHighlight, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbPagination], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_departments_department_module_ts.js.map