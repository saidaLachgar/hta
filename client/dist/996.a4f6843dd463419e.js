"use strict";(self.webpackChunkskote=self.webpackChunkskote||[]).push([[996],{9167:(P,v,a)=>{a.d(v,{p:()=>g});var t=a(3668),_=a(7317),c=a(7686);let g=(()=>{class p{constructor(u,e){this.router=u,this.authService=e}canActivate(u,e){return!!this.authService.isAuthorized(u.data.access)||(alert("acc\xe8s refus\xe9"),this.router.navigate(["/dashboard"]),!1)}}return p.\u0275fac=function(u){return new(u||p)(t.\u0275\u0275inject(_.F0),t.\u0275\u0275inject(c.$))},p.\u0275prov=t.\u0275\u0275defineInjectable({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()},4996:(P,v,a)=>{a.r(v),a.d(v,{UserPermissionsModule:()=>z});var t=a(7317),_=a(9167),c=a(9133),g=a(6813),p=a(1366);const b=[{name:"Mission",value:"missions",permissions:[0,1,2,3,4]},{name:"Anomalies",value:"anomalies",permissions:[0,1,2,3,4]},{name:"Visites",value:"visites",permissions:[0,1,2,3,4]},{name:"D\xe9part",value:"departments",permissions:[0,1,2,3,4]},{name:"Dps",value:"dps",permissions:[0,1,2,3,4]},{name:"Commune",value:"communes",permissions:[0,1,2,3,4]},{name:"Tron\xe7on",value:"edges",permissions:-1},{name:"Postes",value:"postes",permissions:-1},{name:"Appareils coupeur",value:"nodes",permissions:[0,1,2,3,4]},{name:"\xc9tat du suivi",value:"objectives",permissions:[0,1,2,4]},{name:"Groupe d'objectif",value:"goal_groups",permissions:[0,1,2,3,4]},{name:"Objectives",value:"goals",permissions:[0,1,2,3,4]},{name:"\xc9quipes",value:"teams",permissions:[0,1,2,3,4]},{name:"Members",value:"users",permissions:[0,1,2,3,4]},{name:"Profile",value:"profile",permissions:0},{name:"Statistiques",value:"statistiques",permissions:4},{name:"Autorisation",value:"autorisation",permissions:4},{name:"Historique",value:"logs",permissions:4}],u=[{name:"Modifier",value:"update"},{name:"Supprimer",value:"delete"},{name:"Ajouter",value:"add"},{name:"Details",value:"details"},{name:"Afficher",value:"show"},{name:"Exporter",value:"export"},{name:"Importer",value:"import"}];var e=a(3668),d=a(1429),m=a(8274),h=a(7686),I=a(1950),C=a(6019),x=a(6015);let S=(()=>{class n{transform(s){return typeof s}}return n.\u0275fac=function(s){return new(s||n)},n.\u0275pipe=e.\u0275\u0275definePipe({name:"typeof",type:n,pure:!0}),n})();function U(n,o){1&n&&e.\u0275\u0275element(0,"i",8)}function O(n,o){if(1&n&&(e.\u0275\u0275elementStart(0,"th"),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&n){const s=o.$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(s.name)}}function T(n,o){if(1&n){const s=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275elementStart(1,"label",29),e.\u0275\u0275elementStart(2,"input",30),e.\u0275\u0275listener("change",function(r){e.\u0275\u0275restoreView(s);const l=e.\u0275\u0275nextContext(4).$implicit;return e.\u0275\u0275nextContext(2).onChange(r,l.role)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementContainerEnd()}if(2&n){const s=e.\u0275\u0275nextContext().$implicit,i=e.\u0275\u0275nextContext().$implicit,r=e.\u0275\u0275nextContext(2).$implicit,l=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(1),e.\u0275\u0275propertyInterpolate("title",s.name),e.\u0275\u0275advance(1),e.\u0275\u0275property("formArrayName",r.role)("value",i.value+"_"+s.value)("checked",l.isChecked(i.value+"_"+s.value,r.role))}}function A(n,o){1&n&&(e.\u0275\u0275elementStart(0,"label"),e.\u0275\u0275element(1,"input",31),e.\u0275\u0275elementEnd())}function j(n,o){if(1&n&&(e.\u0275\u0275elementStart(0,"td"),e.\u0275\u0275template(1,T,3,4,"ng-container",27),e.\u0275\u0275pipe(2,"typeof"),e.\u0275\u0275pipe(3,"typeof"),e.\u0275\u0275template(4,A,2,0,"ng-template",null,28,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275elementEnd()),2&n){const s=o.index,i=e.\u0275\u0275reference(5),r=e.\u0275\u0275nextContext().$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",-1===r.permissions||"number"===e.\u0275\u0275pipeBind1(2,2,r.permissions)&&s==r.permissions||"object"===e.\u0275\u0275pipeBind1(3,4,r.permissions)&&r.permissions.indexOf(s)>-1)("ngIfElse",i)}}function M(n,o){if(1&n&&(e.\u0275\u0275elementStart(0,"tr"),e.\u0275\u0275elementStart(1,"th"),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(3,j,6,6,"td",26),e.\u0275\u0275elementEnd()),2&n){const s=o.$implicit,i=e.\u0275\u0275nextContext(4);e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(s.name),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",i.PermissionsIndex)}}function F(n,o){if(1&n&&(e.\u0275\u0275elementStart(0,"div",24),e.\u0275\u0275elementStart(1,"table",25),e.\u0275\u0275elementStart(2,"thead"),e.\u0275\u0275elementStart(3,"tr"),e.\u0275\u0275element(4,"th"),e.\u0275\u0275template(5,O,2,1,"th",26),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"tbody"),e.\u0275\u0275template(7,M,4,2,"tr",26),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&n){const s=e.\u0275\u0275nextContext(3);e.\u0275\u0275advance(5),e.\u0275\u0275property("ngForOf",s.PermissionsIndex),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngForOf",s.EntitiesAccess)}}function N(n,o){if(1&n&&(e.\u0275\u0275elementStart(0,"li",18),e.\u0275\u0275elementStart(1,"a",19),e.\u0275\u0275elementStart(2,"span",20),e.\u0275\u0275element(3,"i",21),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"span",22),e.\u0275\u0275text(5),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(6,F,8,2,"ng-template",23),e.\u0275\u0275elementEnd()),2&n){const s=o.$implicit;e.\u0275\u0275property("ngbNavItem",o.index),e.\u0275\u0275advance(5),e.\u0275\u0275textInterpolate(s.label)}}function $(n,o){1&n&&e.\u0275\u0275element(0,"i",32)}function D(n,o){if(1&n&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275elementStart(1,"div",9),e.\u0275\u0275elementStart(2,"ul",10,11),e.\u0275\u0275template(4,N,7,2,"li",12),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(5,"div",13),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"div",14),e.\u0275\u0275elementStart(7,"div",15),e.\u0275\u0275elementStart(8,"button",16),e.\u0275\u0275template(9,$,1,0,"i",17),e.\u0275\u0275pipe(10,"async"),e.\u0275\u0275text(11," Sauvegarder "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementContainerEnd()),2&n){const s=o.ngIf,i=e.\u0275\u0275reference(3),r=e.\u0275\u0275nextContext();e.\u0275\u0275advance(2),e.\u0275\u0275property("activeId",0),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngForOf",s),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngbNavOutlet",i),e.\u0275\u0275advance(4),e.\u0275\u0275property("ngIf",r.submitted&&e.\u0275\u0275pipeBind1(10,4,r.service.loading$))}}const L=[{path:"",component:(()=>{class n{constructor(s,i,r,l){this.service=s,this.fb=i,this.toast=r,this.auth=l,this.submitted=!1,this.EntitiesAccess=b,this.PermissionsIndex=u,this.form=i.group({}),this.UserPermissions$=s.getAll().pipe((0,p.b)(f=>{let E={};f.forEach(y=>{E[y.role]=new c.Oe([]),y.permissions&&y.permissions.forEach(G=>{E[y.role].push(new c.NI(G))})}),this.form=i.group(E),this.OldPermissions=f}))}isChecked(s,i){return this.form.get(i).controls.filter(l=>l.value==s).length}onChange(s,i){const r=this.form.get(i),l=s.target;l.checked?r.push(new c.NI(l.value)):r.controls.forEach((f,E)=>{f.value!=l.value||r.removeAt(E)})}onSubmit(){this.submitted=!0;let s=this.form.value,i=this.toast,r=[];this.OldPermissions.forEach(l=>{if(!((n,o)=>{const s=[...new Set(n).values()],i=[...new Set(o).values()];return s.length==i.length&&s.every(r=>i.includes(r))})(l.permissions,s[l.role])){console.log("create an observable");let f=Object.assign({},l);f.permissions=s[l.role],r.push(this.service.update(f))}}),r.length&&(r.push(this.auth.refreshToken()),(0,g.D)(r).subscribe({error:()=>i.error("un probl\xe8me est survenu, veuillez r\xe9essayer"),complete(){i.success("Les permissions ont \xe9t\xe9 mises \xe0 jour avec succ\xe8s"),this.submitted=!1,setTimeout(()=>location.reload(),1e3)}}))}}return n.\u0275fac=function(s){return new(s||n)(e.\u0275\u0275directiveInject(d.Q),e.\u0275\u0275directiveInject(c.qu),e.\u0275\u0275directiveInject(m.jE),e.\u0275\u0275directiveInject(h.$))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["app-users-list"]],decls:10,vars:8,consts:[[1,"container-fluid"],["title","Autorisation des utilisateurs",3,"breadcrumbItems"],[1,"row","mt-4",3,"formGroup","ngSubmit"],[1,"col-12"],[1,"card"],[1,"card-body"],["class","bx bx-loader-alt fa-spin text-center fs-1 text-primary d-block m-5",4,"ngIf"],[4,"ngIf"],[1,"bx","bx-loader-alt","fa-spin","text-center","fs-1","text-primary","d-block","m-5"],[1,"row"],["ngbNav","",1,"nav-tabs",3,"activeId"],["nav","ngbNav"],[3,"ngbNavItem",4,"ngFor","ngForOf"],[3,"ngbNavOutlet"],[1,"row","justify-content-end"],[1,"col-auto"],[1,"btn","btn-primary"],["class","bx bx-loader-alt fa-spin",4,"ngIf"],[3,"ngbNavItem"],["ngbNavLink",""],[1,"d-block","d-sm-none"],[1,"fas","fa-home"],[1,"d-none","d-sm-block"],["ngbNavContent",""],[1,"table-responsive","mt-4"],[1,"table","table-striped","table-bordered"],[4,"ngFor","ngForOf"],[4,"ngIf","ngIfElse"],["disabled",""],[3,"title"],["type","checkbox",3,"formArrayName","value","checked","change"],["type","checkbox","disabled","",2,"opacity","0.3"],[1,"bx","bx-loader-alt","fa-spin"]],template:function(s,i){1&s&&(e.\u0275\u0275elementStart(0,"div",0),e.\u0275\u0275element(1,"app-page-title",1),e.\u0275\u0275elementStart(2,"form",2),e.\u0275\u0275listener("ngSubmit",function(){return i.onSubmit()}),e.\u0275\u0275elementStart(3,"fieldset",3),e.\u0275\u0275elementStart(4,"div",4),e.\u0275\u0275elementStart(5,"div",5),e.\u0275\u0275template(6,U,1,0,"i",6),e.\u0275\u0275pipe(7,"async"),e.\u0275\u0275template(8,D,12,6,"ng-container",7),e.\u0275\u0275pipe(9,"async"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&s&&(e.\u0275\u0275advance(1),e.\u0275\u0275property("breadcrumbItems",i.breadCrumbItems),e.\u0275\u0275advance(1),e.\u0275\u0275property("formGroup",i.form),e.\u0275\u0275advance(4),e.\u0275\u0275property("ngIf",!i.submitted&&e.\u0275\u0275pipeBind1(7,4,i.service.loading$)),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",e.\u0275\u0275pipeBind1(9,6,i.UserPermissions$)))},directives:[I.V,c._Y,c.JL,c.sg,C.NgIf,x.Pz,C.NgForOf,x.tO,x.nv,x.Vx,x.uN,c.CE],pipes:[C.AsyncPipe,S],encapsulation:2}),n})(),canActivate:[_.p],data:{access:"autorisation_show"}}];let R=(()=>{class n{}return n.\u0275fac=function(s){return new(s||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[[t.Bz.forChild(L)],t.Bz]}),n})();var w=a(9922);let z=(()=>{class n{}return n.\u0275fac=function(s){return new(s||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[[R,w.m]]}),n})()},1950:(P,v,a)=>{a.d(v,{V:()=>u});var t=a(3668),_=a(6019);function c(e,d){1&e&&(t.\u0275\u0275elementStart(0,"div",8),t.\u0275\u0275elementStart(1,"span",9),t.\u0275\u0275text(2,"Loading..."),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd())}function g(e,d){if(1&e&&(t.\u0275\u0275elementStart(0,"li",12),t.\u0275\u0275elementStart(1,"a",13),t.\u0275\u0275text(2),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd()),2&e){const m=t.\u0275\u0275nextContext().$implicit;t.\u0275\u0275advance(2),t.\u0275\u0275textInterpolate(m.label)}}function p(e,d){if(1&e&&(t.\u0275\u0275elementStart(0,"li",14),t.\u0275\u0275text(1),t.\u0275\u0275elementEnd()),2&e){const m=t.\u0275\u0275nextContext().$implicit;t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate1("",m.label," ")}}function b(e,d){if(1&e&&(t.\u0275\u0275elementContainerStart(0),t.\u0275\u0275template(1,g,3,1,"li",10),t.\u0275\u0275template(2,p,2,1,"li",11),t.\u0275\u0275elementContainerEnd()),2&e){const m=d.$implicit;t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",!m.active),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",m.active)}}let u=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(m){return new(m||e)},e.\u0275cmp=t.\u0275\u0275defineComponent({type:e,selectors:[["app-page-title"]],inputs:{breadcrumbItems:"breadcrumbItems",title:"title",Loading:"Loading"},decls:9,vars:3,consts:[[1,"row"],[1,"col-12"],[1,"page-title-box","d-flex","align-items-center","justify-content-between"],[1,"mb-0","font-size-18"],["role","status","class","spinner-grow ms-1 spinner-grow-sm text-primary",4,"ngIf"],[1,"page-title-right"],[1,"breadcrumb","m-0"],[4,"ngFor","ngForOf"],["role","status",1,"spinner-grow","ms-1","spinner-grow-sm","text-primary"],[1,"sr-only"],["class","breadcrumb-item",4,"ngIf"],["class","breadcrumb-item active",4,"ngIf"],[1,"breadcrumb-item"],["href","javascript: void(0);"],[1,"breadcrumb-item","active"]],template:function(m,h){1&m&&(t.\u0275\u0275elementStart(0,"div",0),t.\u0275\u0275elementStart(1,"div",1),t.\u0275\u0275elementStart(2,"div",2),t.\u0275\u0275elementStart(3,"h4",3),t.\u0275\u0275text(4),t.\u0275\u0275template(5,c,3,0,"div",4),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(6,"div",5),t.\u0275\u0275elementStart(7,"ol",6),t.\u0275\u0275template(8,b,3,2,"ng-container",7),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd()),2&m&&(t.\u0275\u0275advance(4),t.\u0275\u0275textInterpolate1(" ",h.title," "),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",h.Loading),t.\u0275\u0275advance(3),t.\u0275\u0275property("ngForOf",h.breadcrumbItems))},directives:[_.NgIf,_.NgForOf],encapsulation:2}),e})()}}]);