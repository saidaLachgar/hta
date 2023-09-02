"use strict";
(self["webpackChunkskote"] = self["webpackChunkskote"] || []).push([["default-src_app_core_guards_role_guard_ts-src_app_pages_goals_goal_service_ts"],{

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

/***/ 94878:
/*!*********************************************************!*\
  !*** ./src/app/pages/goal-groups/goal-group.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "goalGroupService": () => (/* binding */ goalGroupService)
/* harmony export */ });
/* harmony import */ var _ngrx_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/data */ 97544);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 18252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_shared_components_confirm_dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/components/confirm-dialog/confirm-dialog.service */ 7393);
/* harmony import */ var _ngneat_hot_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngneat/hot-toast */ 82456);








class goalGroupService extends _ngrx_data__WEBPACK_IMPORTED_MODULE_2__.EntityCollectionServiceBase {
    constructor(serviceElementsFactory, confirmDialogService, toast) {
        super("goal_groups", serviceElementsFactory);
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
     * @param id goal_groups id
     * @param target html element
     */
    deleteItem(id, target) {
        this.confirmDialogService.setConfirmation("Vous êtes sûr de vouloir supprimer?", () => {
            this.delete(id)
                .pipe(this.toast.observe({
                loading: "Suppression...",
                success: () => {
                    target.closest("tr").remove();
                    return "Groupe supprimé avec succès";
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
        this.lastSearchedParams = this.goalGroupForm.value;
        this.findByCriteria(Object.assign({ page: 1 }, this.lastSearchedParams));
    }
    /**
     * Persist : Save
     */
    onSave() {
        let form = this.goalGroupForm;
        this.submitted = true;
        if (form.invalid)
            return;
        let toast = this.toast;
        let _this = this;
        let observable;
        if (this.persistence === false) {
            let goalGroup = form.value;
            observable = this.add(goalGroup);
        }
        else {
            let goalGroup = Object.assign({}, form.value);
            goalGroup.id = this.persistence;
            observable = this.update(goalGroup);
        }
        observable.subscribe({
            error: () => toast.error("un problème est survenu, veuillez réessayer"),
            complete() {
                form.reset();
                _this.findByCriteria(Object.assign({ page: 1 }, _this.lastSearchedParams));
                toast.success(`Groupe a été ${_this.persistence === false ? 'ajouté' : 'mis à jour'} avec succès`);
                _this.persistence = false;
                _this.submitted = false;
            },
        });
    }
    /**
     * Toggle update
     */
    onUpdate(id, name, displayInForms) {
        this.persistence = id;
        this.goalGroupForm.patchValue({
            name: name,
            displayInForms: displayInForms,
        });
    }
    get name() {
        return this.goalGroupForm.get("name");
    }
    /**
     * find By Criteria
     * @param obj query parameters
     */
    findByCriteria(obj) {
        this.goalGroups$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)([]); // clear table
        // remove empty values
        let queryParams = Object.keys(obj)
            .filter((k) => obj[k] != "" && obj[k] != null)
            .reduce((a, k) => (Object.assign(Object.assign({}, a), { [k]: obj[k] })), {});
        this.goalGroups$ = this.getWithQuery(queryParams);
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
goalGroupService.ɵfac = function goalGroupService_Factory(t) { return new (t || goalGroupService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_data__WEBPACK_IMPORTED_MODULE_2__.EntityCollectionServiceElementsFactory), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_shared_components_confirm_dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_1__.ConfirmDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngneat_hot_toast__WEBPACK_IMPORTED_MODULE_6__.HotToastService)); };
goalGroupService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: goalGroupService, factory: goalGroupService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 77794:
/*!*********************************************!*\
  !*** ./src/app/pages/goals/goal.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "goalService": () => (/* binding */ goalService)
/* harmony export */ });
/* harmony import */ var _ngrx_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/data */ 97544);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 64008);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 81220);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 18252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 9820);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 98785);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 48027);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 85029);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 29026);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 10592);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_shared_components_confirm_dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/components/confirm-dialog/confirm-dialog.service */ 7393);
/* harmony import */ var _departments_department_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../departments/department.service */ 66761);
/* harmony import */ var _goal_groups_goal_group_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../goal-groups/goal-group.service */ 94878);
/* harmony import */ var _ngneat_hot_toast__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngneat/hot-toast */ 82456);










class goalService extends _ngrx_data__WEBPACK_IMPORTED_MODULE_4__.EntityCollectionServiceBase {
    constructor(serviceElementsFactory, confirmDialogService, departmentService, goalGroupService, toast) {
        super("goals", serviceElementsFactory);
        this.serviceElementsFactory = serviceElementsFactory;
        this.confirmDialogService = confirmDialogService;
        this.departmentService = departmentService;
        this.goalGroupService = goalGroupService;
        this.toast = toast;
        this.pageSize = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.pageSize;
        this.goalGroupLoading = false;
        this.goalGroupInput$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
        this.submitted = false;
        this.page = 1;
    }
    /**
     * Get records
     */
    findAll() {
        this.findByCriteria({ page: 1 });
    }
    loadGoalGroups(defaultVal = []) {
        this.goalGroups$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.concat)((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(defaultVal), // default items
        this.goalGroupInput$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)((val) => val != null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(() => this.goalGroupLoading = true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.switchMap)(term => this.goalGroupService.getWithQuery("name=" + term).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)([])), // empty list on error
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(() => this.goalGroupLoading = false)))));
    }
    /**
     * Get pagination
     */
    getPagination() {
        this.pagination$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(); // reset pagination
        // console.log("getPagination")
        this.pagination$ = this.selectors$.entityActions$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(action => action.payload.pagination));
    }
    /**
     * Delete item
     * @param id goal id
     * @param target html element
     */
    deleteItem(id, target) {
        this.confirmDialogService.setConfirmation("Vous êtes sûr de vouloir supprimer?", () => {
            this.delete(id)
                .pipe(this.toast.observe({
                loading: "Suppression...",
                success: () => {
                    target.closest("tr").remove();
                    return "L'équipe supprimé avec succès";
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
        this.lastSearchedParams = this.goalForm.value;
        this.findByCriteria(Object.assign({ page: 1 }, this.lastSearchedParams));
    }
    /**
     * Persist : Create
     */
    onCreate() {
        let goalForm = this.goalForm;
        this.submitted = true;
        if (goalForm.invalid)
            return;
        this.submitted = false;
        let toast = this.toast;
        let goal = goalForm.value;
        console.log(goal);
        this.add(goal).subscribe({
            error: () => toast.error("un problème est survenu, veuillez réessayer"),
            complete() {
                goalForm.reset();
                toast.success("L'équipe ajouté avec succès");
            },
        });
    }
    /**
     * Persist : update
     */
    onUpdate(id) {
        let goalForm = this.goalForm;
        this.submitted = true;
        if (goalForm.invalid)
            return;
        this.submitted = false;
        let toast = this.toast;
        let goal = Object.assign({}, goalForm.value);
        goal.id = id;
        this.update(goal).subscribe({
            error: () => toast.error("un problème est survenu, veuillez réessayer"),
            complete() {
                toast.success("L'équipe a été mis à jour avec succès");
            },
        });
    }
    get name() {
        return this.goalForm.get("name");
    }
    get targetAchievement() {
        return this.goalForm.get("targetAchievement");
    }
    get goalGroup() {
        return this.goalForm.get("goalGroup");
    }
    /**
     * find By Criteria
     * @param obj query parameters
     */
    findByCriteria(obj) {
        this.goals$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)([]); // clear table
        // remove empty values
        let queryParams = Object.keys(obj)
            .filter((k) => obj[k] != "" && obj[k] != null)
            .reduce((a, k) => (Object.assign(Object.assign({}, a), { [k]: obj[k] })), {});
        this.goals$ = this.getWithQuery(queryParams);
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
goalService.ɵfac = function goalService_Factory(t) { return new (t || goalService)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_ngrx_data__WEBPACK_IMPORTED_MODULE_4__.EntityCollectionServiceElementsFactory), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](src_app_shared_components_confirm_dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_1__.ConfirmDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_departments_department_service__WEBPACK_IMPORTED_MODULE_2__.departmentService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_goal_groups_goal_group_service__WEBPACK_IMPORTED_MODULE_3__.goalGroupService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_ngneat_hot_toast__WEBPACK_IMPORTED_MODULE_16__.HotToastService)); };
goalService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjectable"]({ token: goalService, factory: goalService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 5069:
/*!***********************************************!*\
  !*** ./src/app/pages/medias/media.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mediasService": () => (/* binding */ mediasService)
/* harmony export */ });
/* harmony import */ var _ngrx_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/data */ 97544);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 83981);





class mediasService extends _ngrx_data__WEBPACK_IMPORTED_MODULE_1__.EntityCollectionServiceBase {
    constructor(serviceElementsFactory, http) {
        super("media_objects", serviceElementsFactory);
        this.serviceElementsFactory = serviceElementsFactory;
        this.http = http;
        this.server = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.serverURL;
    }
    Upload(attachment) {
        let url = `${this.server}/api/media_objects`;
        let body = new FormData();
        body.append("file", attachment, attachment.name);
        return this.http.post(url, body, {
            reportProgress: true,
            responseType: 'json'
        }).pipe();
    }
}
mediasService.ɵfac = function mediasService_Factory(t) { return new (t || mediasService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_data__WEBPACK_IMPORTED_MODULE_1__.EntityCollectionServiceElementsFactory), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
mediasService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: mediasService, factory: mediasService.ɵfac, providedIn: "root" });


/***/ })

}]);
//# sourceMappingURL=default-src_app_core_guards_role_guard_ts-src_app_pages_goals_goal_service_ts.js.map