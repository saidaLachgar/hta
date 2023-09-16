"use strict";
(self["webpackChunkskote"] = self["webpackChunkskote"] || []).push([["src_app_pages_communes_commune_module_ts"],{

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

/***/ 82137:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/communes/commune-details/commune-details.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "communeDetailsComponent": () => (/* binding */ communeDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _commune_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../commune.service */ 87777);
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/auth.service */ 67686);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);






function communeDetailsComponent_tbody_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Titre :");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.commune.titre, " ");
} }
class communeDetailsComponent {
    constructor(route, communeService, authService) {
        this.route = route;
        this.communeService = communeService;
        this.authService = authService;
        let id = route.snapshot.paramMap.get("id");
        communeService.getByKey(id).subscribe(obj => this.commune = obj);
    }
}
communeDetailsComponent.ɵfac = function communeDetailsComponent_Factory(t) { return new (t || communeDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_commune_service__WEBPACK_IMPORTED_MODULE_0__.communeService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService)); };
communeDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: communeDetailsComponent, selectors: [["app-commune-details"]], decls: 11, vars: 5, consts: [[1, "container-fluid"], ["title", "D\u00E9tails de la commune", 3, "Loading", "breadcrumbItems"], [1, "card", "mt-4"], [1, "card-body", "pt-5"], [1, "table-responsive"], [1, "table", "table-nowrap", "mb-0"], [4, "ngIf"], ["routerLink", "/communes", 1, "btn", "btn-light", "mt-4", "float-end"], [1, "fas", "fa-arrow-circle-left", "me-1"], ["valign", "middle"], ["scope", "row"]], template: function communeDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, communeDetailsComponent_tbody_7_Template, 6, 1, "tbody", 6);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("Loading", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 3, ctx.communeService.loading$))("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.commune);
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_2__.PagetitleComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe], encapsulation: 2 });


/***/ }),

/***/ 26679:
/*!**********************************************************!*\
  !*** ./src/app/pages/communes/commune-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "communeRoutingModule": () => (/* binding */ communeRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_core_guards_role_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/guards/role.guard */ 59167);
/* harmony import */ var _commune_details_commune_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commune-details/commune-details.component */ 82137);
/* harmony import */ var _communes_list_communes_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./communes-list/communes-list.component */ 76086);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);






const routes = [
    { path: '', component: _communes_list_communes_list_component__WEBPACK_IMPORTED_MODULE_2__.communesListComponent, canActivate: [src_app_core_guards_role_guard__WEBPACK_IMPORTED_MODULE_0__.RoleGuard], data: { access: 'communes_show' } },
    { path: 'details/:id', component: _commune_details_commune_details_component__WEBPACK_IMPORTED_MODULE_1__.communeDetailsComponent, canActivate: [src_app_core_guards_role_guard__WEBPACK_IMPORTED_MODULE_0__.RoleGuard], data: { access: 'communes_details' } },
];
class communeRoutingModule {
}
communeRoutingModule.ɵfac = function communeRoutingModule_Factory(t) { return new (t || communeRoutingModule)(); };
communeRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: communeRoutingModule });
communeRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](communeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 36387:
/*!**************************************************!*\
  !*** ./src/app/pages/communes/commune.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "communeModule": () => (/* binding */ communeModule)
/* harmony export */ });
/* harmony import */ var _commune_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commune-routing.module */ 26679);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ 51382);
/* harmony import */ var _communes_list_communes_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./communes-list/communes-list.component */ 76086);
/* harmony import */ var _commune_details_commune_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./commune-details/commune-details.component */ 82137);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
// import { UIModule } from 'src/app/shared/ui/ui.module';





class communeModule {
}
communeModule.ɵfac = function communeModule_Factory(t) { return new (t || communeModule)(); };
communeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: communeModule });
communeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _commune_routing_module__WEBPACK_IMPORTED_MODULE_0__.communeRoutingModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](communeModule, { declarations: [_communes_list_communes_list_component__WEBPACK_IMPORTED_MODULE_2__.communesListComponent,
        _commune_details_commune_details_component__WEBPACK_IMPORTED_MODULE_3__.communeDetailsComponent], imports: [_commune_routing_module__WEBPACK_IMPORTED_MODULE_0__.communeRoutingModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] }); })();


/***/ }),

/***/ 87777:
/*!***************************************************!*\
  !*** ./src/app/pages/communes/commune.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "communeService": () => (/* binding */ communeService)
/* harmony export */ });
/* harmony import */ var _ngrx_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/data */ 97544);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 18252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_shared_components_confirm_dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/components/confirm-dialog/confirm-dialog.service */ 7393);
/* harmony import */ var _ngneat_hot_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngneat/hot-toast */ 82456);








class communeService extends _ngrx_data__WEBPACK_IMPORTED_MODULE_2__.EntityCollectionServiceBase {
    constructor(serviceElementsFactory, confirmDialogService, toast) {
        super("communes", serviceElementsFactory);
        this.serviceElementsFactory = serviceElementsFactory;
        this.confirmDialogService = confirmDialogService;
        this.toast = toast;
        this.pageSize = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.pageSize;
        this.persistence = false;
        this.submitted = false;
        this.page = 1;
    }
    /**
     * Get records
     */
    findAll() {
        this.findByCriteria({ page: 1 });
    }
    /**
     * Get pagination
     */
    getPagination() {
        this.pagination$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(); // reset pagination
        this.pagination$ = this.selectors$.entityActions$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(action => action.payload.pagination));
    }
    /**
     * Delete item
     * @param id commune id
     * @param target html element
     */
    deleteItem(id, target) {
        this.confirmDialogService.setConfirmation("Vous êtes sûr de vouloir supprimer?", () => {
            this.delete(id)
                .pipe(this.toast.observe({
                loading: "Suppression...",
                success: () => {
                    target.closest("tr").remove();
                    return "Commune supprimé avec succès";
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
        this.lastSearchedParams = this.communeForm.value;
        this.findByCriteria(Object.assign({ page: 1 }, this.lastSearchedParams));
    }
    /**
     * Persist : Save
     */
    onSave() {
        let form = this.communeForm;
        this.submitted = true;
        if (form.invalid)
            return;
        let toast = this.toast;
        let _this = this;
        let observable;
        if (this.persistence === false) {
            let commune = form.value;
            observable = this.add(commune);
        }
        else {
            let commune = Object.assign({}, form.value);
            commune.id = this.persistence;
            observable = this.update(commune);
        }
        observable.subscribe({
            error: () => toast.error("un problème est survenu, veuillez réessayer"),
            complete() {
                form.reset();
                _this.findByCriteria(Object.assign({ page: 1 }, _this.lastSearchedParams));
                toast.success(`Commune a été ${_this.persistence === false ? 'ajouté' : 'mis à jour'} avec succès`);
                _this.persistence = false;
                _this.submitted = false;
            },
        });
    }
    /**
     * Toggle update
     */
    onUpdate(id, titre) {
        this.persistence = id;
        this.communeForm.setValue({
            titre: titre,
        });
    }
    get titre() {
        return this.communeForm.get("titre");
    }
    /**
     * find By Criteria
     * @param obj query parameters
     */
    findByCriteria(obj) {
        this.communes$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)([]); // clear table
        // remove empty values
        let queryParams = Object.keys(obj)
            .filter((k) => obj[k] != "" && obj[k] != null)
            .reduce((a, k) => (Object.assign(Object.assign({}, a), { [k]: obj[k] })), {});
        this.communes$ = this.getWithQuery(queryParams);
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
communeService.ɵfac = function communeService_Factory(t) { return new (t || communeService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_data__WEBPACK_IMPORTED_MODULE_2__.EntityCollectionServiceElementsFactory), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_shared_components_confirm_dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_1__.ConfirmDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngneat_hot_toast__WEBPACK_IMPORTED_MODULE_6__.HotToastService)); };
communeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: communeService, factory: communeService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 76086:
/*!*************************************************************************!*\
  !*** ./src/app/pages/communes/communes-list/communes-list.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "communesListComponent": () => (/* binding */ communesListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _commune_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../commune.service */ 87777);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/auth.service */ 67686);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);








function communesListComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Chargement... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function communesListComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Aucune donn\u00E9e trouv\u00E9e ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["details", a1]; };
function communesListComponent_tr_30_div_4_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Voir ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const commune_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](1, _c0, commune_r6.id));
} }
function communesListComponent_tr_30_div_4_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function communesListComponent_tr_30_div_4_a_4_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15); const commune_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r13.service.onUpdate(commune_r6.id, commune_r6.titre); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Modifier ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function communesListComponent_tr_30_div_4_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function communesListComponent_tr_30_div_4_a_5_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const commune_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r16.service.deleteItem(commune_r6.id, $event.target); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Supprimer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function communesListComponent_tr_30_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, communesListComponent_tr_30_div_4_a_3_Template, 3, 3, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, communesListComponent_tr_30_div_4_a_4_Template, 3, 0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, communesListComponent_tr_30_div_4_a_5_Template, 3, 0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r8.authService.isAuthorized("communes_details"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r8.authService.isAuthorized("communes_update"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r8.authService.isAuthorized("communes_delete"));
} }
function communesListComponent_tr_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "ngb-highlight", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, communesListComponent_tr_30_div_4_Template, 6, 3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const commune_r6 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("result", commune_r6.titre)("term", _r0.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.authService.isAuthorized("communes_details") || ctx_r3.authService.isAuthorized("communes_update") || ctx_r3.authService.isAuthorized("communes_delete"));
} }
function communesListComponent_ng_container_32_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ngb-pagination", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("pageChange", function communesListComponent_ng_container_32_div_1_Template_ngb_pagination_pageChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r21.service.page = $event; })("pageChange", function communesListComponent_ng_container_32_div_1_Template_ngb_pagination_pageChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r23.service.onPaginate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pagination_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().ngIf;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate3"](" Affichage de ", pagination_r19.startIndex, " \u00E0 ", pagination_r19.endIndex, " de ", pagination_r19.totalRecords, " entr\u00E9es ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("collectionSize", pagination_r19.totalRecords)("page", ctx_r20.service.page)("pageSize", ctx_r20.service.pageSize)("maxSize", 5);
} }
function communesListComponent_ng_container_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, communesListComponent_ng_container_32_div_1_Template, 7, 7, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const pagination_r19 = ctx.ngIf;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", pagination_r19.totalRecords > ctx_r4.service.pageSize);
} }
function communesListComponent_div_34_div_10_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Ce champ est obligatoire.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function communesListComponent_div_34_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, communesListComponent_div_34_div_10_span_1_Template, 2, 0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r25.service.titre.errors.required);
} }
function communesListComponent_div_34_i_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 56);
} }
const _c1 = function (a0) { return { "is-invalid": a0 }; };
function communesListComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "form", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function communesListComponent_div_34_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r28.service.onSave(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "fieldset", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h4", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Titre");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, communesListComponent_div_34_div_10_Template, 2, 1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, communesListComponent_div_34_i_14_Template, 1, 0, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r5.service.communeForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r5.service.persistence === false ? "Cr\u00E9er une nouvelle commune" : "Mise \u00E0 jour de la commune");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](8, _c1, ctx_r5.service.titre.invalid && ctx_r5.service.submitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.service.submitted && ctx_r5.service.titre.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.service.submitted && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](15, 6, ctx_r5.service.loading$));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r5.service.persistence === false ? "Ajouter" : "Sauvegarder", "");
} }
class communesListComponent {
    constructor(service, fb, authService) {
        this.service = service;
        this.fb = fb;
        this.authService = authService;
        service.findAll();
        service.communeForm = fb.group({
            titre: [''],
        });
    }
}
communesListComponent.ɵfac = function communesListComponent_Factory(t) { return new (t || communesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_commune_service__WEBPACK_IMPORTED_MODULE_0__.communeService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService)); };
communesListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: communesListComponent, selectors: [["app-communes-list"]], decls: 35, vars: 21, consts: [[1, "container-fluid", "mb-5"], [1, "row", "align-items-center", "justify-content-between", "mb-4"], [1, "col-auto"], ["title", "Les Communes", 3, "breadcrumbItems"], [1, "row"], [1, "col-md-6"], [1, "card"], [1, "card-body"], [1, "table-responsive", 3, "formGroup", "ngSubmit"], [1, "table", "table-bordered"], ["valign", "middle"], ["type", "text", "placeholder", "Titre...", "formControlName", "titre", 1, "form-control"], ["searchTitre", ""], [1, "text-center"], ["type", "submit", 1, "btn", "btn-sm", "btn-primary", "d-flex", "align-items-center", "mx-auto"], [1, "bx", "bx-search", "me-1"], ["type", "reset", 1, "btn", "btn-sm", "text-primary", "flex", "align-items-center", 3, "click"], [1, "bx", "bx-x", "me-1"], ["class", "text-center", "colspan", "5", 4, "ngIf"], ["valign", "middle", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "col-md-6", 4, "ngIf"], ["colspan", "5", 1, "text-center"], [3, "result", "term"], ["align", "center"], ["ngbDropdown", "", "placement", "bottom-left", 4, "ngIf"], ["ngbDropdown", "", "placement", "bottom-left"], ["ngbDropdownToggle", "", "data-toggle", "dropdown", "aria-expanded", "true", 1, "fas", "fa-ellipsis-h", "dropdown-toggle", "c-pointer"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-end"], ["class", "dropdown-item", "href", "javascript: void(0);", 3, "routerLink", 4, "ngIf"], ["class", "dropdown-item", "href", "javascript: void(0);", 3, "click", 4, "ngIf"], ["class", "dropdown-item text-danger", "href", "javascript: void(0);", 3, "click", 4, "ngIf"], ["href", "javascript: void(0);", 1, "dropdown-item", 3, "routerLink"], [1, "fas", "fa-eye", "me-2"], ["href", "javascript: void(0);", 1, "dropdown-item", 3, "click"], [1, "fas", "fa-edit", "me-2"], ["href", "javascript: void(0);", 1, "dropdown-item", "text-danger", 3, "click"], [1, "fas", "fa-trash", "me-2"], ["class", "row justify-content-md-between align-items-md-center mt-2", 4, "ngIf"], [1, "row", "justify-content-md-between", "align-items-md-center", "mt-2"], [1, "col-sm-12", "col-md-5"], ["id", "tickets-table_info", "role", "status", "aria-live", "polite", 1, "dataTables_info", "mb-2"], [1, "text-md-right", "float-md-end", "pagination-rounded"], [3, "collectionSize", "page", "pageSize", "maxSize", "pageChange"], [1, "card", 3, "formGroup", "ngSubmit"], [1, "card-body", "justify-content-center", "d-flex", "flex-column"], [1, "mb-3", "row"], [1, "card-title", "mt-2", "mb-4"], ["for", "name-input", 1, "col-md-2", "col-form-label"], [1, "col-md-10"], ["formControlName", "titre", "type", "text", "id", "name-input", "required", "", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "row", "justify-content-end"], [1, "btn", "btn-primary"], ["class", "bx bx-loader-alt fa-spin", 4, "ngIf"], [1, "invalid-feedback"], [1, "bx", "bx-loader-alt", "fa-spin"]], template: function communesListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-page-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function communesListComponent_Template_form_ngSubmit_8_listener() { return ctx.service.onSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Rechercher ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function communesListComponent_Template_button_click_19_listener() { return ctx.service.findAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "R\u00E9initialiser ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, communesListComponent_td_23_Template, 2, 0, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](24, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](25, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, communesListComponent_td_26_Template, 2, 0, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](27, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](28, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](29, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, communesListComponent_tr_30_Template, 5, 3, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](31, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, communesListComponent_ng_container_32_Template, 2, 1, "ng-container", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](33, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, communesListComponent_div_34_Template, 17, 10, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.service.communeForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](24, 7, !_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](25, 9, ctx.service.communes$) && ctx.service.loading$));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](27, 11, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](28, 13, ctx.service.communes$) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](29, 15, ctx.service.communes$).length === 0 && ctx.service.loaded$));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](31, 17, ctx.service.communes$));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](33, 19, ctx.service.pagination$));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.authService.isAuthorized("communes_add"));
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_2__.PagetitleComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbHighlight, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownMenu, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbPagination, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_communes_commune_module_ts.js.map