"use strict";
(self["webpackChunkskote"] = self["webpackChunkskote"] || []).push([["default-src_app_pages_teams_team_service_ts"],{

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


/***/ }),

/***/ 36162:
/*!*********************************************!*\
  !*** ./src/app/pages/teams/team.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "teamService": () => (/* binding */ teamService)
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
/* harmony import */ var _users_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../users/user.service */ 95565);
/* harmony import */ var _ngneat_hot_toast__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngneat/hot-toast */ 82456);










class teamService extends _ngrx_data__WEBPACK_IMPORTED_MODULE_4__.EntityCollectionServiceBase {
    constructor(serviceElementsFactory, confirmDialogService, departmentService, UserService, toast) {
        super("teams", serviceElementsFactory);
        this.serviceElementsFactory = serviceElementsFactory;
        this.confirmDialogService = confirmDialogService;
        this.departmentService = departmentService;
        this.UserService = UserService;
        this.toast = toast;
        this.pageSize = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.pageSize;
        this.membreLoading = false;
        this.membreInput$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
        this.departmentLoading = false;
        this.departmentInput$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
        this.submitted = false;
        this.page = 1;
    }
    /**
     * Get records
     */
    findAll() {
        this.findByCriteria({ page: 1 });
    }
    loadMembers(defaultVal = []) {
        this.membres$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.concat)((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(defaultVal), // default items
        this.membreInput$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)((val) => val != null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(() => this.membreLoading = true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.switchMap)(term => this.UserService.getWithQuery("properties[]=id&properties[]=fullName&fullName=" + term).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)([])), // empty list on error
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(() => this.membreLoading = false)))));
    }
    loadDepartments(byTerm = true) {
        if (byTerm) {
            this.departments$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.concat)((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)([]), // default items
            this.departmentInput$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)((val) => val != null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(() => this.departmentLoading = true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.switchMap)(term => this.departmentService.getWithQuery("properties[]=id&properties[]=titre&titre=" + term).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)([])), // empty list on error
            (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(() => this.departmentLoading = false)))));
        }
        else {
            this.departments$ = this.departmentService.getWithQuery("properties[]=id&properties[]=titre");
        }
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
     * @param id team id
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
        this.lastSearchedParams = this.teamForm.value;
        this.findByCriteria(Object.assign({ page: 1 }, this.lastSearchedParams));
    }
    /**
     * Persist : Create
     */
    onCreate() {
        let teamForm = this.teamForm;
        this.submitted = true;
        if (teamForm.invalid)
            return;
        this.submitted = false;
        let toast = this.toast;
        let team = teamForm.value;
        this.add(team).subscribe({
            error: () => toast.error("un problème est survenu, veuillez réessayer"),
            complete() {
                teamForm.reset();
                teamForm.setValue({
                    titre: [""], departments: [null], membres: [[]],
                });
                toast.success("L'équipe ajouté avec succès");
            },
        });
    }
    /**
     * Persist : update
     */
    onUpdate(id) {
        let teamForm = this.teamForm;
        this.submitted = true;
        if (teamForm.invalid)
            return;
        this.submitted = false;
        let toast = this.toast;
        let team = Object.assign({}, teamForm.value);
        team.id = id;
        this.update(team).subscribe({
            error: () => toast.error("un problème est survenu, veuillez réessayer"),
            complete() {
                toast.success("L'équipe a été mis à jour avec succès");
            },
        });
    }
    get titre() {
        return this.teamForm.get("titre");
    }
    get membres() {
        return this.teamForm.get("membres");
    }
    get departments() {
        return this.teamForm.get("departments");
    }
    /**
     * find By Criteria
     * @param obj query parameters
     */
    findByCriteria(obj) {
        this.teams$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)([]); // clear table
        // remove empty values
        let queryParams = Object.keys(obj)
            .filter((k) => obj[k] != "" && obj[k] != null)
            .reduce((a, k) => (Object.assign(Object.assign({}, a), { [k]: obj[k] })), {});
        this.teams$ = this.getWithQuery(queryParams);
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
teamService.ɵfac = function teamService_Factory(t) { return new (t || teamService)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_ngrx_data__WEBPACK_IMPORTED_MODULE_4__.EntityCollectionServiceElementsFactory), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](src_app_shared_components_confirm_dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_1__.ConfirmDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_departments_department_service__WEBPACK_IMPORTED_MODULE_2__.departmentService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_users_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_ngneat_hot_toast__WEBPACK_IMPORTED_MODULE_16__.HotToastService)); };
teamService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjectable"]({ token: teamService, factory: teamService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 95565:
/*!*********************************************!*\
  !*** ./src/app/pages/users/user.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _ngrx_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/data */ 97544);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 64008);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 81220);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 18252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 9820);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 98785);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 48027);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 85029);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 29026);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 10592);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_shared_components_confirm_dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/components/confirm-dialog/confirm-dialog.service */ 7393);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/auth.service */ 67686);
/* harmony import */ var _ngneat_hot_toast__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngneat/hot-toast */ 82456);










class UserService extends _ngrx_data__WEBPACK_IMPORTED_MODULE_3__.EntityCollectionServiceBase {
    constructor(serviceElementsFactory, confirmDialogService, http, authService, toast) {
        super("users", serviceElementsFactory);
        this.serviceElementsFactory = serviceElementsFactory;
        this.confirmDialogService = confirmDialogService;
        this.http = http;
        this.authService = authService;
        this.toast = toast;
        this.pageSize = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.pageSize;
        this.server = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.serverURL;
        this.teamLoading = false;
        this.teamInput$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.submitted = false;
        this.loading = false;
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
        // console.log("getPagination")
        this.pagination$ = this.selectors$.entityActions$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(action => action.payload.pagination));
    }
    /**
     * Delete item
     * @param id user id
     * @param target html element
     */
    deleteItem(id, target) {
        this.confirmDialogService.setConfirmation("Vous êtes sûr de vouloir supprimer?", () => {
            this.delete(id)
                .pipe(this.toast.observe({
                loading: "Suppression...",
                success: () => {
                    target.closest("tr").remove();
                    return "Utilisateur supprimé avec succès";
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
        this.lastSearchedParams = this.userForm.value;
        this.findByCriteria(Object.assign({ page: 1 }, this.lastSearchedParams));
    }
    /**
     * Persist : Create
     */
    onCreate() {
        let userForm = this.userForm;
        this.submitted = true;
        if (userForm.invalid)
            return;
        this.submitted = false;
        let toast = this.toast;
        let obj = Object.entries(userForm.value);
        // remove empty values
        const user = Object.fromEntries(obj.filter(([key, value]) => value !== ""));
        user.roles = [user.roles.toString()];
        this.add(user).subscribe({
            error: () => toast.error("un problème est survenu, veuillez réessayer"),
            complete() {
                userForm.reset();
                toast.success("Utilisateur ajouté avec succès");
            },
        });
    }
    /**
     * Persist : update
     */
    onUpdate(id, ignoreEmpty = false) {
        let userForm = this.userForm;
        this.submitted = true;
        if (userForm.invalid)
            return;
        this.submitted = false;
        let that = this;
        let toast = this.toast;
        let currentUser = this.authService.user;
        let user = Object.assign({}, userForm.value);
        user.id = id;
        if (ignoreEmpty) {
            user = Object.entries(user).reduce((acc, [key, value]) => {
                if (value !== "" && value !== null) {
                    acc[key] = value;
                }
                return acc;
            }, {});
        }
        else {
            user.roles = [user.roles.toString()];
        }
        this.update(user).subscribe({
            error: () => toast.error("un problème est survenu, veuillez réessayer"),
            complete() {
                if (currentUser.id == id) {
                    that.loading = true;
                    that.authService.logout(false);
                    that.authService.login(user.username, user.password)
                        .subscribe({
                        error: (error) => {
                            error && toast.error(error.error.message);
                            that.loading = false;
                        },
                        complete() {
                            that.loading = false;
                            toast.success("L'utilisateur a été mis à jour avec succès");
                            setTimeout(() => window.location.reload(), 10);
                        },
                    });
                }
                else {
                    toast.success("L'utilisateur a été mis à jour avec succès");
                }
            },
        });
    }
    get fullName() {
        return this.userForm.get("fullName");
    }
    get username() {
        return this.userForm.get("username");
    }
    get password() {
        return this.userForm.get("password");
    }
    get roles() {
        return this.userForm.get("roles");
    }
    get team() {
        return this.userForm.get("team");
    }
    /**
     * find By Criteria
     * @param obj query parameters
     */
    findByCriteria(obj) {
        this.users$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)([]); // clear table
        // remove empty values
        let queryParams = Object.keys(obj)
            .filter((k) => obj[k] != "" && obj[k] != null)
            .reduce((a, k) => (Object.assign(Object.assign({}, a), { [k]: obj[k] })), {});
        this.users$ = this.getWithQuery(queryParams);
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
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_ngrx_data__WEBPACK_IMPORTED_MODULE_3__.EntityCollectionServiceElementsFactory), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](src_app_shared_components_confirm_dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_1__.ConfirmDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_ngneat_hot_toast__WEBPACK_IMPORTED_MODULE_16__.HotToastService)); };
UserService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: "root" });


/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_teams_team_service_ts.js.map