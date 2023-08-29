"use strict";
(self["webpackChunkskote"] = self["webpackChunkskote"] || []).push([["default-src_app_pages_edges_edge_service_ts"],{

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

/***/ 44885:
/*!*********************************************!*\
  !*** ./src/app/pages/edges/edge.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "edgeService": () => (/* binding */ edgeService)
/* harmony export */ });
/* harmony import */ var _ngrx_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/data */ 97544);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 64008);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 81220);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 18252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 9820);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 98785);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 48027);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 85029);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 29026);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 10592);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_shared_components_confirm_dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/components/confirm-dialog/confirm-dialog.service */ 7393);
/* harmony import */ var _departments_department_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../departments/department.service */ 66761);
/* harmony import */ var _communes_commune_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../communes/commune.service */ 87777);
/* harmony import */ var _nodes_node_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../nodes/node.service */ 32360);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _ngneat_hot_toast__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngneat/hot-toast */ 82456);












class edgeService extends _ngrx_data__WEBPACK_IMPORTED_MODULE_5__.EntityCollectionServiceBase {
    constructor(serviceElementsFactory, confirmDialogService, departmentService, communeService, nodeService, http, toast) {
        super("edges", serviceElementsFactory);
        this.serviceElementsFactory = serviceElementsFactory;
        this.confirmDialogService = confirmDialogService;
        this.departmentService = departmentService;
        this.communeService = communeService;
        this.nodeService = nodeService;
        this.http = http;
        this.toast = toast;
        this.pageSize = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.pageSize;
        this.server = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.serverURL;
        this.departmentLoading = false;
        this.departmentInput$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        this.communeLoading = false;
        this.communeInput$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        this.ANodeLoading = false;
        this.ANodeInput$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        this.BNodeLoading = false;
        this.BNodeInput$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        this.submitted = false;
        this.isLoading = false;
        this.page = 1;
    }
    /**
     * Get records
     */
    findAll() {
        this.findByCriteria({ page: 1 });
    }
    loadDepartments(byTerm = true) {
        if (byTerm) {
            this.departments$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.concat)((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)([]), // default items
            this.departmentInput$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)((val) => val != null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)(() => this.departmentLoading = true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(term => this.departmentService.getWithQuery("properties[]=id&properties[]=titre&titre=" + term).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)([])), // empty list on error
            (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)(() => this.departmentLoading = false)))));
        }
        else {
            this.departments$ = this.departmentService.getWithQuery("properties[]=id&properties[]=titre");
        }
    }
    loadCommunes(defaultVal = []) {
        this.communes$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.concat)((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(defaultVal), // default items
        this.communeInput$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)((val) => val != null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)(() => this.communeLoading = true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(term => this.communeService.getWithQuery("properties[]=id&properties[]=titre&titre=" + term).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)([])), // empty list on error
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)(() => this.communeLoading = false)))));
    }
    loadANodes(defaultVal = []) {
        this.ANode$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.concat)((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(defaultVal), // default items
        this.ANodeInput$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)((val) => val != null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)(() => this.ANodeLoading = true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(term => this.nodeService.getWithQuery("properties[]=id&properties[]=titre&titre=" + term +
            (this.department ? "&department.id=" + this.department.value.match(/\d+/)[0] : "")).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)([])), // empty list on error
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)(() => this.ANodeLoading = false)))));
    }
    loadBNodes(defaultVal = []) {
        this.BNode$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.concat)((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(defaultVal), // default items
        this.BNodeInput$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)((val) => val != null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)(() => this.BNodeLoading = true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(term => this.nodeService.getWithQuery("properties[]=id&properties[]=titre&titre=" + term +
            (this.department ? "&department.id=" + this.department.value.match(/\d+/)[0] : "")).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)([])), // empty list on error
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)(() => this.BNodeLoading = false)))));
    }
    getEdgesInRange(depar, node_a, node_b = []) {
        return this.http.get(`${this.server}/api/edges/by-range?depar=${depar}&node_a=${node_a}${node_b ? "&node_b=" + node_b : ""}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(response => response["hydra:member"]));
    }
    /**
     * Get pagination
     */
    getPagination() {
        this.pagination$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(); // reset pagination
        // console.log("getPagination")
        this.pagination$ = this.selectors$.entityActions$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(action => action.payload.pagination));
    }
    /**
     * Delete item
     * @param id edge id
     * @param target html element
     */
    deleteItem(id, target) {
        this.confirmDialogService.setConfirmation("Vous êtes sûr de vouloir supprimer cet edge ?", () => {
            this.delete(id)
                .pipe(this.toast.observe({
                loading: "Suppression...",
                success: () => {
                    target.closest("tr").remove();
                    return "L'edge supprimé avec succès";
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
        this.lastSearchedParams = this.edgeForm.value;
        this.findByCriteria(Object.assign({ page: 1 }, this.lastSearchedParams));
    }
    /**
     * Persist : Create
     */
    onCreate() {
        let edgeForm = this.edgeForm;
        this.submitted = true;
        if (edgeForm.invalid)
            return;
        this.submitted = false;
        let toast = this.toast;
        let obj = Object.entries(edgeForm.value);
        // remove empty values
        const edge = Object.fromEntries(obj.filter(([key, value]) => value !== ""));
        this.add(edge).subscribe({
            error: () => toast.error("un problème est survenu, veuillez réessayer"),
            complete() {
                edgeForm.reset();
                toast.success("L'edge ajouté avec succès");
            },
        });
    }
    /**
     * Persist : update
     */
    onUpdate(id) {
        let edgeForm = this.edgeForm;
        this.submitted = true;
        if (edgeForm.invalid)
            return;
        this.submitted = false;
        let toast = this.toast;
        let edge = Object.assign({}, edgeForm.value);
        edge.id = id;
        this.update(edge).subscribe({
            error: () => toast.error("un problème est survenu, veuillez réessayer"),
            complete() {
                toast.success("L'edge a été mis à jour avec succès");
            },
        });
    }
    get titre() {
        return this.edgeForm.get("titre");
    }
    get department() {
        return this.edgeForm.get("department");
    }
    get BNode() {
        return this.edgeForm.get("nodeA");
    }
    get ANode() {
        return this.edgeForm.get("nodeB");
    }
    get addNonExitingAssociation() {
        return this.importForm.get("addNonExitingAssociation");
    }
    get spreadSheet() {
        return this.importForm.get("spreadSheet");
    }
    get updateIfExist() {
        return this.importForm.get("updateIfExist");
    }
    /**
     * find By Criteria
     * @param obj query parameters
     */
    findByCriteria(obj) {
        this.edges$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)([]); // clear table
        // remove empty values
        let queryParams = Object.keys(obj)
            .filter((k) => obj[k] != "" && obj[k] != null)
            .reduce((a, k) => (Object.assign(Object.assign({}, a), { [k]: obj[k] })), {});
        this.edges$ = this.getWithQuery(queryParams);
        this.getPagination();
    }
    /**
     * on Paginate
     * @param page page to search for
     */
    onPaginate(page) {
        this.findByCriteria(Object.assign({ page: page }, this.lastSearchedParams));
    }
    /**
    * export spreadsheet from the server
    */
    exportSpreadSheet() {
        let form = this.exportForm;
        this.isLoading = true;
        let that = this;
        let toast = this.toast;
        let url = `${this.server}/api/export_spreadsheet`;
        let obj = Object.entries(form.value);
        // remove empty values
        const filter = Object.fromEntries(obj.filter(([key, value]) => value !== "" && value !== null));
        // console.log(data);
        // return; 
        this.http.post(url, { className: "edge", filter }, { responseType: 'blob' }).subscribe((response) => {
            that.isLoading = false;
            // Create a blob URL from the response
            const blob = new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            const url = window.URL.createObjectURL(blob);
            window.open(url, '_blank').focus();
        }, (error) => {
            that.isLoading = false;
            toast.error("un problème est survenu, veuillez réessayer" + error);
        });
    }
    /**
    * import spreadsheet to the server
    */
    importSpreadSheet() {
        this.submitted = true;
        this.isLoading = true;
        if (this.importForm.invalid)
            return;
        let url = `${this.server}/api/import_spreadsheet`;
        let that = this;
        let toast = this.toast;
        let body = new FormData();
        body.append("spreadSheet", this.selectedFile);
        body.append("addNonExAssoc", this.addNonExitingAssociation.value);
        body.append("updateIfExist", this.updateIfExist.value);
        body.append("className", "edge");
        body.append("uniqueColumns", "NodeA,NodeB");
        this.http.post(url, body, { reportProgress: true, responseType: 'json' }).pipe().subscribe((response) => {
            // console.log('Response:', response);
            that.importForm.reset();
            that.selectedFile = null;
            that.submitted = false;
            that.isLoading = false;
            // console.log(response);
            that.uploadResponse = response.messages;
            toast.show('L\'opération se termine avec succès', { icon: '' });
        }, (error) => {
            that.isLoading = false;
            toast.error("un problème est survenu, veuillez réessayer" + error);
        });
    }
}
edgeService.ɵfac = function edgeService_Factory(t) { return new (t || edgeService)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵinject"](_ngrx_data__WEBPACK_IMPORTED_MODULE_5__.EntityCollectionServiceElementsFactory), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵinject"](src_app_shared_components_confirm_dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_1__.ConfirmDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵinject"](_departments_department_service__WEBPACK_IMPORTED_MODULE_2__.departmentService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵinject"](_communes_commune_service__WEBPACK_IMPORTED_MODULE_3__.communeService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵinject"](_nodes_node_service__WEBPACK_IMPORTED_MODULE_4__.nodeService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵinject"](_ngneat_hot_toast__WEBPACK_IMPORTED_MODULE_18__.HotToastService)); };
edgeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjectable"]({ token: edgeService, factory: edgeService.ɵfac, providedIn: "root" });


/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_edges_edge_service_ts.js.map