"use strict";(self.webpackChunkskote=self.webpackChunkskote||[]).push([[134],{5134:(B,p,r)=>{r.r(p),r.d(p,{DashboardsModule:()=>F});var c=r(5396),S=r(9922),u=r(7317),f=r(8053),E=r(4053),h=r(8260),e=r(3668),y=r(4522),g=r(7686),i=r(6019);function I(n,l){if(1&n&&(e.\u0275\u0275elementStart(0,"tr",15),e.\u0275\u0275elementStart(1,"td"),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"td"),e.\u0275\u0275text(4),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"td"),e.\u0275\u0275text(6),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"td"),e.\u0275\u0275text(8),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(9,"td"),e.\u0275\u0275text(10),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"td"),e.\u0275\u0275text(12),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(13,"td"),e.\u0275\u0275text(14),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(15,"td"),e.\u0275\u0275text(16),e.\u0275\u0275pipe(17,"decimalHourToTime"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(18,"td"),e.\u0275\u0275text(19),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(20,"td"),e.\u0275\u0275text(21),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&n){const t=l.$implicit;e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(t.TEAM),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1("",t.VISIT_LENGTH," km"),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1("",t.ACHIEVED_ANOMALIES?t.ACHIEVED_ANOMALIES/t.TOTAL_ANOMALIES*100:0,"%"),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(t.INCIDENTS_COUNT),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(t.COUPEUR_COUNT),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(t.CLIENTS_COUNT),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(t.POSTES_TOTAL),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(17,10,t.DMS_TOTAL)),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(t.IFS_TOTAL),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(t.END_TOTAL)}}function T(n,l){if(1&n&&(e.\u0275\u0275elementStart(0,"tbody"),e.\u0275\u0275template(1,I,22,12,"tr",14),e.\u0275\u0275elementEnd()),2&n){const t=l.ngIf;e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",t)}}function M(n,l){1&n&&(e.\u0275\u0275elementStart(0,"tbody"),e.\u0275\u0275elementStart(1,"tr"),e.\u0275\u0275elementStart(2,"td",16),e.\u0275\u0275text(3,"Chargement..."),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd())}function b(n,l){1&n&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1," DMS "),e.\u0275\u0275elementStart(2,"small",22),e.\u0275\u0275text(3,"(Dur\xe9e moyenne des interruptions de l'ann\xe9e en cours)"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd())}function A(n,l){1&n&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1," IFS "),e.\u0275\u0275elementStart(2,"small",22),e.\u0275\u0275text(3,"(Fr\xe9quence des interruptions de l'ann\xe9e en cours)"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd())}function C(n,l){1&n&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1," END "),e.\u0275\u0275elementStart(2,"small",22),e.\u0275\u0275text(3,"(ann\xe9e en cours)"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd())}function O(n,l){if(1&n&&(e.\u0275\u0275elementStart(0,"div",17),e.\u0275\u0275elementStart(1,"div",18),e.\u0275\u0275elementStart(2,"div",19),e.\u0275\u0275template(3,b,4,0,"div",20),e.\u0275\u0275template(4,A,4,0,"div",20),e.\u0275\u0275template(5,C,4,0,"div",20),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(6,"apx-chart",21),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&n){const t=l.$implicit;e.\u0275\u0275advance(3),e.\u0275\u0275property("ngIf","DMS_TOTAL"==t.type),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf","IFS_TOTAL"==t.type),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf","END_TOTAL"==t.type),e.\u0275\u0275advance(1),e.\u0275\u0275property("series",t.series)("chart",t.chart)("xaxis",t.xaxis)("yaxis",t.yaxis)("stroke",t.stroke)("tooltip",t.tooltip)("dataLabels",t.dataLabels)("colors",t.colors)}}function D(n,l){if(1&n&&(e.\u0275\u0275elementStart(0,"div",17),e.\u0275\u0275elementStart(1,"div",18),e.\u0275\u0275elementStart(2,"div",19),e.\u0275\u0275text(3,"Taux de correction des anomalies"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(4,"apx-chart",23),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&n){const t=l.ngIf;e.\u0275\u0275advance(4),e.\u0275\u0275property("series",t.series)("chart",t.chart)("dataLabels",t.dataLabels)("plotOptions",t.plotOptions)("responsive",t.responsive)("xaxis",t.xaxis)("legend",t.legend)("fill",t.fill)}}const N=[{path:"",component:(()=>{class n{constructor(t,a){this.http=t,this.authService=a,this.server=h.N.serverURL,this.today=new Date,this.teamsStats$=t.get(`${this.server}/api/analytics/teams-data`).pipe(),this.teamsAnomalies$=t.get(`${this.server}/api/analytics/teams-anomalies`).pipe((0,f.U)(o=>this.anomaliesPerTeamChart(o))),this.teamsCharts$=t.get(`${this.server}/api/analytics/teams-monthly-data`).pipe((0,f.U)(o=>this.teamsMonthlyStatsChart(o)))}ngOnInit(){const t=document.body.getAttribute("data-layout"),a=document.getElementById("layout-vertical");this.isVisible=t,a&&a.setAttribute("checked","true")}teamsMonthlyStatsChart(t){const a=new E.R,o=["DMS_TOTAL","END_TOTAL","IFS_TOTAL"],_={"01":"JAN","02":"F\xc9V","03":"MAR","04":"AVR","05":"MAI","06":"JUN","07":"JUL","08":"AO\xdb","09":"SEP",10:"OCT",11:"NOV",12:"D\xc9C"};let v=[];for(const s of o){const m={type:s,series:[],chart:{height:275,type:"line"},dataLabels:{enabled:!1},yaxis:{labels:{formatter:function(d){return"IFS_TOTAL"==s?d.toFixed(3):a.transform(d)}}},stroke:{curve:"smooth"},xaxis:{labels:{rotate:-45},categories:[]}};for(const d in t)m.series.push({name:d,data:t[d].map(x=>(m.xaxis.categories.push(_[x.MONTH]),x[s]))});v.push(m)}return v}anomaliesPerTeamChart(t){return{series:[{name:"R\xe9aliser",data:t.map(a=>a.ACHIEVED_ANOMALIES)},{name:"Non r\xe9par\xe9",data:t.map(a=>a.TOTAL_ANOMALIES-a.ACHIEVED_ANOMALIES)}],xaxis:{type:"category",categories:t.map(a=>a.TEAM)},chart:{type:"bar",height:275,stacked:!0,toolbar:{show:!0},zoom:{enabled:!0}},responsive:[{breakpoint:480,options:{legend:{position:"bottom",offsetX:-10,offsetY:0}}}],plotOptions:{bar:{horizontal:!1}},legend:{position:"right",offsetY:40},fill:{opacity:1}}}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(y.eN),e.\u0275\u0275directiveInject(g.$))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["app-default"]],decls:63,vars:45,consts:[[1,"container-fluid"],[1,"row"],[1,"col-12"],[1,"page-title-box","d-flex","align-items-center","justify-content-between"],[1,"mb-0","h4"],[1,"row","mt-4","mb-2"],[1,"card","card-body","p-2"],[1,"table-responsive"],[1,"table","table-bordered"],[1,"text-muted"],[4,"ngIf","ngIfElse"],["loading",""],["class","col-lg-6",4,"ngFor","ngForOf"],["class","col-lg-6",4,"ngIf"],["valign","middle",4,"ngFor","ngForOf"],["valign","middle"],["colspan","10",1,"text-center"],[1,"col-lg-6"],[1,"card","card-body"],[1,"fw-bold","mb-4"],[4,"ngIf"],[3,"series","chart","xaxis","yaxis","stroke","tooltip","dataLabels","colors"],[1,"text-muted","font-size-12"],[3,"series","chart","dataLabels","plotOptions","responsive","xaxis","legend","fill"]],template:function(t,a){if(1&t&&(e.\u0275\u0275elementStart(0,"div",0),e.\u0275\u0275elementStart(1,"div",1),e.\u0275\u0275elementStart(2,"div",2),e.\u0275\u0275elementStart(3,"div",3),e.\u0275\u0275elementStart(4,"p",4),e.\u0275\u0275text(5,"Tableau de bord"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"div",5),e.\u0275\u0275elementStart(7,"div",2),e.\u0275\u0275elementStart(8,"div",6),e.\u0275\u0275elementStart(9,"div",7),e.\u0275\u0275elementStart(10,"table",8),e.\u0275\u0275elementStart(11,"thead"),e.\u0275\u0275elementStart(12,"tr"),e.\u0275\u0275elementStart(13,"th"),e.\u0275\u0275text(14,"\xc9quipe"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(15,"th"),e.\u0275\u0275text(16,"Visite au sol"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(17,"th"),e.\u0275\u0275text(18,"Anomalies r\xe9alis\xe9es"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(19,"th"),e.\u0275\u0275text(20,"Nombre d'incidents "),e.\u0275\u0275elementStart(21,"small",9),e.\u0275\u0275text(22),e.\u0275\u0275pipe(23,"date"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(24,"th"),e.\u0275\u0275text(25,"Nombre de coupures "),e.\u0275\u0275elementStart(26,"small",9),e.\u0275\u0275text(27),e.\u0275\u0275pipe(28,"date"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(29,"th"),e.\u0275\u0275text(30,"Nombre de clients coup\xe9s "),e.\u0275\u0275elementStart(31,"small",9),e.\u0275\u0275text(32),e.\u0275\u0275pipe(33,"date"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(34,"th"),e.\u0275\u0275text(35,"Nombre de postes coup\xe9s "),e.\u0275\u0275elementStart(36,"small",9),e.\u0275\u0275text(37),e.\u0275\u0275pipe(38,"date"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(39,"th"),e.\u0275\u0275text(40,"DMS "),e.\u0275\u0275elementStart(41,"small",9),e.\u0275\u0275text(42),e.\u0275\u0275pipe(43,"date"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(44,"th"),e.\u0275\u0275text(45,"IFS "),e.\u0275\u0275elementStart(46,"small",9),e.\u0275\u0275text(47),e.\u0275\u0275pipe(48,"date"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(49,"th"),e.\u0275\u0275text(50,"END "),e.\u0275\u0275elementStart(51,"small",9),e.\u0275\u0275text(52),e.\u0275\u0275pipe(53,"date"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(54,T,2,1,"tbody",10),e.\u0275\u0275pipe(55,"async"),e.\u0275\u0275template(56,M,4,0,"ng-template",null,11,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(58,"div",1),e.\u0275\u0275template(59,O,7,11,"div",12),e.\u0275\u0275pipe(60,"async"),e.\u0275\u0275template(61,D,5,8,"div",13),e.\u0275\u0275pipe(62,"async"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&t){const o=e.\u0275\u0275reference(57);e.\u0275\u0275advance(22),e.\u0275\u0275textInterpolate1("(",e.\u0275\u0275pipeBind3(23,11,a.today,"MMM","Africa/Casablanca"),")"),e.\u0275\u0275advance(5),e.\u0275\u0275textInterpolate1("(",e.\u0275\u0275pipeBind3(28,15,a.today,"MMM","Africa/Casablanca"),")"),e.\u0275\u0275advance(5),e.\u0275\u0275textInterpolate1("(",e.\u0275\u0275pipeBind3(33,19,a.today,"MMM","Africa/Casablanca"),")"),e.\u0275\u0275advance(5),e.\u0275\u0275textInterpolate1("(",e.\u0275\u0275pipeBind3(38,23,a.today,"MMM","Africa/Casablanca"),")"),e.\u0275\u0275advance(5),e.\u0275\u0275textInterpolate1("(",e.\u0275\u0275pipeBind3(43,27,a.today,"MMM","Africa/Casablanca"),")"),e.\u0275\u0275advance(5),e.\u0275\u0275textInterpolate1("(",e.\u0275\u0275pipeBind3(48,31,a.today,"MMM","Africa/Casablanca"),")"),e.\u0275\u0275advance(5),e.\u0275\u0275textInterpolate1("(",e.\u0275\u0275pipeBind3(53,35,a.today,"MMM","Africa/Casablanca"),")"),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",e.\u0275\u0275pipeBind1(55,39,a.teamsStats$))("ngIfElse",o),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngForOf",e.\u0275\u0275pipeBind1(60,41,a.teamsCharts$)),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",e.\u0275\u0275pipeBind1(62,43,a.teamsAnomalies$))}},directives:[i.NgIf,i.NgForOf,c.x],pipes:[i.DatePipe,i.AsyncPipe,E.R],styles:[".slide[_ngcontent-%COMP%]{display:flex;overflow-y:auto}.slide-item[_ngcontent-%COMP%]{flex:0 0 auto;min-width:380px;width:33.33333333%;max-width:100%;max-width:100dvw}.slide-item[_ngcontent-%COMP%]:not(:last-child){padding-right:10px}"]}),n})()}];let L=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[[u.Bz.forChild(N)],u.Bz]}),n})(),F=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[[L,S.m,c.X]]}),n})()}}]);