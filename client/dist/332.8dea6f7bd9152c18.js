"use strict";(self.webpackChunkskote=self.webpackChunkskote||[]).push([[332],{2008:(h,E,i)=>{i.d(E,{T:()=>Y});var e=i(3668),l=i(9133),g=i(4038),v=i(7686),_=i(9785),m=i(7317),c=i(6019),x=i(5630),f=i(6015);function C(n,r){1&n&&(e.\u0275\u0275elementStart(0,"td",11),e.\u0275\u0275text(1," Chargement... "),e.\u0275\u0275elementEnd())}function A(n,r){1&n&&(e.\u0275\u0275elementStart(0,"td",11),e.\u0275\u0275text(1," Aucune donn\xe9e trouv\xe9e ! "),e.\u0275\u0275elementEnd())}function b(n,r){1&n&&e.\u0275\u0275element(0,"i",20)}const I=function(n){return["/users/details",n]};function T(n,r){if(1&n&&(e.\u0275\u0275elementStart(0,"a",21),e.\u0275\u0275elementStart(1,"div",22),e.\u0275\u0275elementStart(2,"span",23),e.\u0275\u0275element(3,"i",24),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(4),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext().$implicit,a=e.\u0275\u0275nextContext(2);e.\u0275\u0275property("routerLink",a.authService.isAuthorized("users_details")?e.\u0275\u0275pureFunction1(2,I,t.createdBy.id):null),e.\u0275\u0275advance(4),e.\u0275\u0275textInterpolate1(" ",t.createdBy.fullName," ")}}const O=function(n){return["/edges/details",n]};function w(n,r){if(1&n&&(e.\u0275\u0275elementStart(0,"a",25),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext().$implicit,a=e.\u0275\u0275nextContext(2);e.\u0275\u0275property("routerLink",a.authService.isAuthorized("edges_details")?e.\u0275\u0275pureFunction1(3,O,t.edge.id):null),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate2("",t.edge.node_a.titre," - ",t.edge.node_b.titre,"")}}const M=function(n){return["/anomalies/details",n]};function P(n,r){if(1&n&&(e.\u0275\u0275elementStart(0,"a",31),e.\u0275\u0275element(1,"i",32),e.\u0275\u0275text(2," Voir "),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext(2).$implicit;e.\u0275\u0275property("routerLink",e.\u0275\u0275pureFunction1(1,M,t.id))}}const D=function(n){return["/anomalies/update",n]};function k(n,r){if(1&n&&(e.\u0275\u0275elementStart(0,"a",31),e.\u0275\u0275element(1,"i",33),e.\u0275\u0275text(2," Modifier "),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext(2).$implicit;e.\u0275\u0275property("routerLink",e.\u0275\u0275pureFunction1(1,D,t.id))}}function B(n,r){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"a",34),e.\u0275\u0275listener("click",function(o){e.\u0275\u0275restoreView(t);const d=e.\u0275\u0275nextContext(2).$implicit;return e.\u0275\u0275nextContext(2).anomalyService.deleteItem(d.id,o.target)}),e.\u0275\u0275element(1,"i",35),e.\u0275\u0275text(2," Supprimer "),e.\u0275\u0275elementEnd()}}function L(n,r){if(1&n&&(e.\u0275\u0275elementStart(0,"div",26),e.\u0275\u0275element(1,"i",27),e.\u0275\u0275elementStart(2,"div",28),e.\u0275\u0275template(3,P,3,3,"a",29),e.\u0275\u0275template(4,k,3,3,"a",29),e.\u0275\u0275template(5,B,3,0,"a",30),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext(3);e.\u0275\u0275advance(3),e.\u0275\u0275property("ngIf",t.authService.isAuthorized("anomalies_details")),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.authService.isAuthorized("anomalies_update")),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.authService.isAuthorized("anomalies_delete"))}}function N(n,r){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"tr",13),e.\u0275\u0275elementStart(1,"td"),e.\u0275\u0275elementStart(2,"ui-switch",14),e.\u0275\u0275listener("changeEvent",function(o){const s=e.\u0275\u0275restoreView(t).$implicit;return e.\u0275\u0275nextContext(2).anomalyService.updateStatus(o,s.id)}),e.\u0275\u0275template(3,b,1,0,"i",15),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"td"),e.\u0275\u0275elementStart(5,"span"),e.\u0275\u0275text(6),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"td"),e.\u0275\u0275text(8),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(9,"td"),e.\u0275\u0275template(10,T,5,4,"a",16),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"td"),e.\u0275\u0275template(12,w,2,5,"a",17),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(13,"td"),e.\u0275\u0275text(14),e.\u0275\u0275pipe(15,"date"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(16,"td",18),e.\u0275\u0275template(17,L,6,3,"div",19),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()}if(2&n){const t=r.$implicit,a=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(2),e.\u0275\u0275property("checked",!!t.status&&t.status)("disabled",!a.authService.isAuthorized("anomalies_update"))("loading",a.anomalyService.statusLoading===t.id),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",a.anomalyService.statusLoading===t.id),e.\u0275\u0275advance(2),e.\u0275\u0275classMapInterpolate1("badge badge-pill font-size-11 badge-soft-",a.anomalyService.getSeverity(t.severity,!0),""),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",a.anomalyService.getSeverity(t.severity,!1)," "),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(t.title),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",t.createdBy),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",t.edge),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind3(15,13,t.createdAt,"medium","Africa/Casablanca")),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngIf",a.authService.isAuthorized("anomalies_details")||a.authService.isAuthorized("anomalies_update")||a.authService.isAuthorized("anomalies_delete"))}}function V(n,r){if(1&n&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,N,18,17,"tr",12),e.\u0275\u0275pipe(2,"async"),e.\u0275\u0275elementContainerEnd()),2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",e.\u0275\u0275pipeBind1(2,1,t.anomalyService.anomalies$))}}function z(n,r){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",37),e.\u0275\u0275elementStart(1,"div",38),e.\u0275\u0275elementStart(2,"div",39),e.\u0275\u0275text(3),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"div",38),e.\u0275\u0275elementStart(5,"div",40),e.\u0275\u0275elementStart(6,"ngb-pagination",41),e.\u0275\u0275listener("pageChange",function(o){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext(2).anomalyService.page=o})("pageChange",function(o){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext(2).anomalyService.onPaginate(o)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()}if(2&n){const t=e.\u0275\u0275nextContext().ngIf,a=e.\u0275\u0275nextContext();e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate3(" Affichage de ",t.startIndex," \xe0 ",t.endIndex," de ",t.totalRecords," entr\xe9es "),e.\u0275\u0275advance(3),e.\u0275\u0275property("collectionSize",t.totalRecords)("page",a.anomalyService.page)("pageSize",a.anomalyService.pageSize)("maxSize",5)}}function F(n,r){if(1&n&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,z,7,7,"div",36),e.\u0275\u0275elementContainerEnd()),2&n){const t=r.ngIf,a=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.totalRecords>a.anomalyService.pageSize)}}function $(n,r){if(1&n&&(e.\u0275\u0275elementStart(0,"ng-option",56),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&n){const t=r.$implicit;e.\u0275\u0275property("value",t.value),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",t.label," ")}}function j(n,r){if(1&n&&(e.\u0275\u0275elementStart(0,"ng-option",56),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&n){const t=r.$implicit;e.\u0275\u0275property("value",t["@id"]),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate2("",t.node_a.titre," - ",t.node_b.titre,"")}}function R(n,r){1&n&&(e.\u0275\u0275elementStart(0,"span"),e.\u0275\u0275text(1,"Ce champ est obligatoire."),e.\u0275\u0275elementEnd())}function U(n,r){if(1&n&&(e.\u0275\u0275elementStart(0,"div",69),e.\u0275\u0275template(1,R,2,0,"span",9),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext().$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.get("edge").errors.required)}}function K(n,r){1&n&&(e.\u0275\u0275elementStart(0,"span"),e.\u0275\u0275text(1,"Ce champ est obligatoire."),e.\u0275\u0275elementEnd())}function W(n,r){if(1&n&&(e.\u0275\u0275elementStart(0,"div",69),e.\u0275\u0275template(1,K,2,0,"span",9),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext().$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.get("title").errors.required)}}function G(n,r){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"tr",51),e.\u0275\u0275elementStart(1,"td",52),e.\u0275\u0275elementStart(2,"div",53),e.\u0275\u0275elementStart(3,"div",54),e.\u0275\u0275elementStart(4,"label"),e.\u0275\u0275text(5,"Statut"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"ng-select",55),e.\u0275\u0275elementStart(7,"ng-option",56),e.\u0275\u0275text(8,"Termin\xe9"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(9,"ng-option",56),e.\u0275\u0275text(10,"En attente"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"div",57),e.\u0275\u0275elementStart(12,"label"),e.\u0275\u0275text(13,"Priorit\xe9"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(14,"ng-select",58),e.\u0275\u0275template(15,$,2,2,"ng-option",59),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(16,"div",60),e.\u0275\u0275elementStart(17,"label"),e.\u0275\u0275text(18,"Tron\xe7on"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(19,"ng-select",61),e.\u0275\u0275listener("open",function(){e.\u0275\u0275restoreView(t);const o=e.\u0275\u0275nextContext(2);return!(o.currentEdge&&o.currentEdge.department&&o.currentEdge.department)&&o.AlertEdgeChange()}),e.\u0275\u0275template(20,j,2,3,"ng-option",59),e.\u0275\u0275pipe(21,"async"),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(22,U,2,1,"div",62),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(23,"td"),e.\u0275\u0275elementStart(24,"div"),e.\u0275\u0275elementStart(25,"label",63),e.\u0275\u0275text(26,"Anomalie"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(27,"textarea",64),e.\u0275\u0275template(28,W,2,1,"div",62),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(29,"td"),e.\u0275\u0275elementStart(30,"div",65),e.\u0275\u0275elementStart(31,"div",66),e.\u0275\u0275elementStart(32,"button",67),e.\u0275\u0275listener("click",function(){const d=e.\u0275\u0275restoreView(t).index;return e.\u0275\u0275nextContext(2).removeAnomaly(d)}),e.\u0275\u0275element(33,"i",68),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()}if(2&n){const t=r.$implicit,a=r.index,o=e.\u0275\u0275nextContext(2);e.\u0275\u0275property("formGroupName",a),e.\u0275\u0275advance(6),e.\u0275\u0275property("searchable",!1),e.\u0275\u0275advance(1),e.\u0275\u0275property("value",!0),e.\u0275\u0275advance(2),e.\u0275\u0275property("value",!1),e.\u0275\u0275advance(5),e.\u0275\u0275property("searchable",!1),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",o.anomalyService.severityOptions),e.\u0275\u0275advance(4),e.\u0275\u0275property("readonly",!(o.currentEdge&&o.currentEdge.department&&o.currentEdge.department)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",e.\u0275\u0275pipeBind1(21,10,o.anomalyService.edgesInRange$)),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",o.showErrors&&t.get("edge").errors),e.\u0275\u0275advance(6),e.\u0275\u0275property("ngIf",o.showErrors&&t.get("title").errors)}}function J(n,r){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",42),e.\u0275\u0275elementStart(1,"form",43),e.\u0275\u0275elementStart(2,"table",44),e.\u0275\u0275elementStart(3,"tr"),e.\u0275\u0275elementStart(4,"th",45),e.\u0275\u0275elementStart(5,"div"),e.\u0275\u0275text(6,"Ajouter des anomalies"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"td",46),e.\u0275\u0275elementStart(8,"div",47),e.\u0275\u0275elementStart(9,"button",48),e.\u0275\u0275listener("click",function(){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().addAnomaly()}),e.\u0275\u0275element(10,"i",49),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(11,G,34,12,"tr",50),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()}if(2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("formGroup",t.parentFormGroup),e.\u0275\u0275advance(10),e.\u0275\u0275property("ngForOf",t.anomalies.controls)}}let Y=(()=>{class n{constructor(t,a,o,d,s,p,S){this.service=t,this.fb=a,this.authService=o,this.anomalyService=d,this.config=s,this.route=p,this.viewportScroller=S,this.currentEdge={ANode:null,BNode:null,department:null,type:null},this.addAlert=new e.EventEmitter}ngOnChanges(t){let a=t.currentEdge;if(a&&a.currentValue){const{ANode:o,BNode:d,department:s,type:p}=a.currentValue,S=a.previousValue&&JSON.stringify(Object.assign(Object.assign({},a.currentValue),{type:a.previousValue.type}))===JSON.stringify(Object.assign(Object.assign({},a.previousValue),{type:p}));if(o&&""!==o.trim()&&!S&&(this.anomalyService.getRelatedAnomalies(o,d,s),this.anomalyService.loading$.pipe().subscribe(y=>{!y&&setTimeout(()=>this.route.fragment.subscribe(u=>u&&this.viewportScroller.scrollToAnchor(u)),50)})),!a.previousValue||a.previousValue.type!=p){let y=this.anomalies;for(const u of y.controls)"false"!=p?u.enable():u.disable()}}}newAnomaly(){return this.fb.group({severity:[""],status:[!1],edge:["",l.kI.required],title:["",l.kI.required]})}addAnomaly(){this.currentEdge.ANode?null==this.currentEdge.type?this.addAlert.emit({message:"Vous devez choisir le type de coupure !",type:"danger"}):this.anomalies.push(this.newAnomaly()):this.addAlert.emit({message:"Vous devez choisir un Point coupure, pour pouvoir cr\xe9er une anomalie.",type:"danger"})}removeAnomaly(t){this.anomalies.removeAt(t)}AlertEdgeChange(){this.addAlert.emit({message:"Vous devez choisir un Point coupure, pour pouvoir choisir un tron\xe7on !",type:"danger"})}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(g.M),e.\u0275\u0275directiveInject(l.qu),e.\u0275\u0275directiveInject(v.$),e.\u0275\u0275directiveInject(g.M),e.\u0275\u0275directiveInject(_.$q),e.\u0275\u0275directiveInject(m.gz),e.\u0275\u0275directiveInject(c.ViewportScroller))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["app-related-anomalies"]],inputs:{anomalies:"anomalies",parentFormGroup:"parentFormGroup",showErrors:"showErrors",currentEdge:"currentEdge"},outputs:{addAlert:"addAlert"},features:[e.\u0275\u0275NgOnChangesFeature],decls:34,vars:17,consts:[["id","anomalies-list",1,"col-12"],[1,"card","card-body"],[1,"card-title","mb-3"],[1,"table-responsive"],[1,"table","table-bordered","table-striped"],["width","10%"],["width","15%"],["width","50px"],["class","text-center","colspan","8",4,"ngIf"],[4,"ngIf"],["class","col-12",4,"ngIf"],["colspan","8",1,"text-center"],["valign","middle",4,"ngFor","ngForOf"],["valign","middle"],["uncheckedLabel","En attente","checkedLabel","Termin\xe9","checkedTextColor","#fff",3,"checked","disabled","loading","changeEvent"],["class","fa fa-spinner fa-pulse",4,"ngIf"],["target","_blank","class","d-flex align-items-center",3,"routerLink",4,"ngIf"],["target","_blank",3,"routerLink",4,"ngIf"],["align","center"],["ngbDropdown","","placement","bottom-left",4,"ngIf"],[1,"fa","fa-spinner","fa-pulse"],["target","_blank",1,"d-flex","align-items-center",3,"routerLink"],[1,"header-profile-user","bg-transparent","me-2"],[1,"avatar-title","rounded-circle","bg-transparent","border","text-muted","small"],[1,"fas","fa-user"],["target","_blank",3,"routerLink"],["ngbDropdown","","placement","bottom-left"],["ngbDropdownToggle","","data-toggle","dropdown","aria-expanded","true",1,"fas","fa-ellipsis-h","dropdown-toggle","c-pointer"],["ngbDropdownMenu","",1,"dropdown-menu","dropdown-menu-end"],["class","dropdown-item","href","javascript: void(0);",3,"routerLink",4,"ngIf"],["class","dropdown-item text-danger","href","javascript: void(0);",3,"click",4,"ngIf"],["href","javascript: void(0);",1,"dropdown-item",3,"routerLink"],[1,"fas","fa-eye","me-2"],[1,"fas","fa-edit","me-2"],["href","javascript: void(0);",1,"dropdown-item","text-danger",3,"click"],[1,"fas","fa-trash","me-2"],["class","row justify-content-md-between align-items-md-center mt-2",4,"ngIf"],[1,"row","justify-content-md-between","align-items-md-center","mt-2"],[1,"col-sm-12","col-md-5"],["id","tickets-table_info","role","status","aria-live","polite",1,"dataTables_info","mb-2"],[1,"text-md-right","float-md-end","pagination-rounded"],[3,"collectionSize","page","pageSize","maxSize","pageChange"],[1,"col-12"],[1,"card","card-body",3,"formGroup"],["formArrayName","anomalies",1,"table","table-bordered","table-striped","mb-0"],["colspan","2"],["width","69px"],[1,"text-end"],["type","button",1,"btn","btn-sm","btn-primary",3,"click"],[1,"bx","bx-plus","fs-4","lh-sm"],[3,"formGroupName",4,"ngFor","ngForOf"],[3,"formGroupName"],["width","40%"],[1,"row"],[1,"col-lg-6","mb-3","mb-lg-0"],["formControlName","status","placeholder","Statut..",3,"searchable"],[3,"value"],[1,"col-lg-6","mb-lg-0"],["formControlName","severity","placeholder","Priorit\xe9..",3,"searchable"],[3,"value",4,"ngFor","ngForOf"],[1,"col-12","mt-2"],["formControlName","edge","placeholder","Tron\xe7on..",3,"readonly","open"],["class","invalid-feedback d-block",4,"ngIf"],["for","input-3"],["formControlName","title","id","input-3","type","text",1,"form-control",2,"height","115px"],[1,"p-0"],[1,"text-center"],[1,"btn","btn-danger",3,"click"],[1,"fas","fa-trash"],[1,"invalid-feedback","d-block"]],template:function(t,a){1&t&&(e.\u0275\u0275elementStart(0,"div",0),e.\u0275\u0275elementStart(1,"div",1),e.\u0275\u0275elementStart(2,"p",2),e.\u0275\u0275text(3,"Anomalies li\xe9es"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"div",3),e.\u0275\u0275elementStart(5,"table",4),e.\u0275\u0275elementStart(6,"thead"),e.\u0275\u0275elementStart(7,"tr"),e.\u0275\u0275elementStart(8,"th",5),e.\u0275\u0275text(9,"Statut"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(10,"th",5),e.\u0275\u0275text(11,"Priorit\xe9"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(12,"th"),e.\u0275\u0275text(13,"Anomalie"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(14,"th",6),e.\u0275\u0275text(15,"Cr\xe9\xe9 par"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(16,"th",6),e.\u0275\u0275text(17,"Tron\xe7on"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(18,"th",6),e.\u0275\u0275text(19,"Date"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(20,"th",7),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(21,"tbody"),e.\u0275\u0275elementStart(22,"tr"),e.\u0275\u0275template(23,C,2,0,"td",8),e.\u0275\u0275pipe(24,"async"),e.\u0275\u0275pipe(25,"async"),e.\u0275\u0275template(26,A,2,0,"td",8),e.\u0275\u0275pipe(27,"async"),e.\u0275\u0275pipe(28,"async"),e.\u0275\u0275pipe(29,"async"),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(30,V,3,3,"ng-container",9),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(31,F,2,1,"ng-container",9),e.\u0275\u0275pipe(32,"async"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(33,J,12,2,"div",10)),2&t&&(e.\u0275\u0275advance(23),e.\u0275\u0275property("ngIf",e.\u0275\u0275pipeBind1(24,5,a.currentEdge&&a.currentEdge.ANode&&a.currentEdge.ANode&&!e.\u0275\u0275pipeBind1(25,7,a.anomalyService.anomalies$)&&a.anomalyService.loading$)),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngIf",!(a.currentEdge&&a.currentEdge.ANode&&a.currentEdge.ANode)||e.\u0275\u0275pipeBind1(27,9,e.\u0275\u0275pipeBind1(28,11,a.anomalyService.anomalies$)&&0===e.\u0275\u0275pipeBind1(29,13,a.anomalyService.anomalies$).length&&a.anomalyService.loaded$)),e.\u0275\u0275advance(4),e.\u0275\u0275property("ngIf",a.currentEdge&&a.currentEdge.ANode&&a.currentEdge.ANode),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",e.\u0275\u0275pipeBind1(32,15,a.anomalyService.pagination$)),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",a.currentEdge&&a.currentEdge.type&&"false"!=a.currentEdge.type))},directives:[c.NgIf,c.NgForOf,x.ob,m.yS,f.jt,f.iD,f.Vi,f.N9,l._Y,l.JL,l.sg,l.CE,l.x0,_.w9,l.JJ,l.u,_.xv,l.Fj],pipes:[c.AsyncPipe,c.DatePipe],encapsulation:2}),n})()},6831:(h,E,i)=>{i.d(E,{U:()=>_});var e=i(5630),l=i(9922),g=i(7317),v=i(3668);let _=(()=>{class m{}return m.\u0275fac=function(x){return new(x||m)},m.\u0275mod=v.\u0275\u0275defineNgModule({type:m}),m.\u0275inj=v.\u0275\u0275defineInjector({imports:[[l.m,g.Bz,e.Su.forRoot({size:"small"})]]}),m})()}}]);