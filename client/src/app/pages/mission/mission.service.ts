import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormArray, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { HotToastService } from "@ngneat/hot-toast";
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from "@ngrx/data";
import { differenceInMilliseconds, format, setDefaultOptions } from 'date-fns';
import fr from 'date-fns/locale/fr';
import { Observable, Subject, concat, of } from "rxjs";
import { catchError, debounceTime, distinctUntilChanged, filter, map, switchMap, tap } from "rxjs/operators";
import { CausesList, Department, Mission, Node, Pagination, Team } from "src/app/core/models";
import { ConfirmDialogService } from "src/app/shared/components/confirm-dialog/confirm-dialog.service";
import { environment } from "src/environments/environment";
import { anomalyService } from "../anomalies/anomaly.service";
import { departmentService } from "../departments/department.service";
import { nodeService } from "../nodes/node.service";
setDefaultOptions({ locale: fr });

const parseDate = (date: string) => new Date(Date.parse(date))
const zeroPad = (num, places = 2) => String(num).padStart(places, '0');
const DateTimeToString = (date, time) => new Date(date.year, date.month - 1, date.day, time.hour, time.minute, time.second).toISOString();
const DateToString = (date) => `${date.year}-${zeroPad(date.month)}-${zeroPad(date.day)}`;

@Injectable({
  providedIn: "root",
})
export class missionService extends EntityCollectionServiceBase<Mission> {
  readonly server = environment.serverURL;
  readonly pageSize = environment.pageSize;
  causesList = Object.keys(CausesList);
  actions$: Observable<any[]>;
  mission$: Observable<Mission[]>;
  existingMission: Mission | boolean = false;
  EditeMode: boolean = false;

  ANode$: Observable<any[] | Node[]>;
  ANodeLoading = false;
  ANodeInput$ = new Subject<string>();

  BNode$: Observable<any[] | Node[]>;
  BNodeLoading = false;
  BNodeInput$ = new Subject<string>();

  departments$: Observable<Department[]>;
  departmentLoading = false;
  departmentInput$ = new Subject<string>();

  teams$: Observable<Team[]>;
  teamLoading = false;
  teamInput$ = new Subject<string>();

  pagination$: Observable<Pagination>;
  submitted: boolean = false;
  page: number = 1;
  anomalyLoading: boolean = false;
  hasSearch: boolean = false;
  lastSearchedParams;
  public missionForm: FormGroup;

  constructor(
    private serviceElementsFactory: EntityCollectionServiceElementsFactory,
    private confirmDialogService: ConfirmDialogService,
    public departmentService: departmentService,
    public anomalyService: anomalyService,
    public nodeService: nodeService,
    private toast: HotToastService,
    private http: HttpClient,
    private router: Router
  ) {
    super("missions", serviceElementsFactory);
  }

  /**
   * Get records
   */
  findAll(): void {
    this.hasSearch = false;
    this.findByCriteria({ page: 1 });
  }
  loadTeams(defaultVal = []) : void{
    this.teams$ = concat(
      of(defaultVal), // default items
      this.teamInput$.pipe(
          debounceTime(500),
          distinctUntilChanged(),
          filter((val) => val != null),
          tap(() => this.teamLoading = true),
          switchMap(term => 
            this.http.get<Team[]>(`${this.server}/api/teams?properties[]=id&properties[]=titre&titre=`+term)
            .pipe(
              map(response => response["hydra:member"]),
              catchError(() => of([])), // empty list on error
              tap(() => this.teamLoading = false)
            )
          )
      )
    );
  }
  loadANodes(defaultVal = []): void {
    this.ANode$ = concat(
      of(defaultVal), // default items
      this.ANodeInput$.pipe(
        debounceTime(500),
        distinctUntilChanged(),
        filter((val) => val != null),
        tap(() => this.ANodeLoading = true),
        switchMap(term => this.nodeService.getWithQuery(
          "properties[]=id&properties[]=titre&titre=" + term +
          (this.department ? "&department.id=" + this.department.value.match(/\d+/)[0] : "")+
          (this.departments ? "&properties[department][]=titre&"+this.departments.map(value => `department.id[]=${value}`).join('&') : "")
        ).pipe(
          catchError(() => of([])), // empty list on error
          tap(() => this.ANodeLoading = false),
        ))
      )
    );
  }
  loadBNodes(defaultVal = []): void {
    this.BNode$ = concat(
      of(defaultVal), // default items
      this.BNodeInput$.pipe(
        debounceTime(500),
        distinctUntilChanged(),
        filter((val) => val != null),
        tap(() => this.BNodeLoading = true),
        switchMap(term => this.nodeService.getWithQuery(
          "properties[]=id&properties[]=titre&titre=" + term +
          (this.department ? "&department.id=" + this.department.value.match(/\d+/)[0] : "")+
          (this.departments ? "&properties[department][]=titre&"+this.departments.map(value => `department.id[]=${value}`).join('&') : "")
        ).pipe(
          catchError(() => of([])), // empty list on error
          tap(() => this.BNodeLoading = false)
        ))
      )
    );
  }
  loadDepartments(byTerm = true): void {
    if (byTerm) {
      this.departments$ = concat(
        of([]), // default items
        this.departmentInput$.pipe(
          debounceTime(500),
          distinctUntilChanged(),
          filter((val) => val != null),
          tap(() => this.departmentLoading = true),
          switchMap(term => this.departmentService.getWithQuery("properties[]=id&properties[]=titre&titre=" + term).pipe(
            catchError(() => of([])), // empty list on error
            tap(() => this.departmentLoading = false)
          ))
        )
      );
    } else {
      this.departments$ = this.departmentService.getWithQuery("properties[]=id&properties[]=titre");
    }
  }
  loadActions(): void {
    this.actions$ = this.http
      .get<string[]>(`${this.server}/api/goals/by-group`)
      .pipe(
        map(response => response["hydra:member"][0])
      );
  }

  getRelatedMissions(): void {
    let form = this.missionForm.value;
    if (form.department && form.date) {
      const convertDate = (date)=> {
        const year = date.getUTCFullYear();
        const month = String(date.getUTCMonth() + 1).padStart(2, '0');
        const day = String(date.getUTCDate()).padStart(2, '0');
        return `${year}-${month}-${day}`
      }
      const date = DateToString(form.date)
      const dateMin = new Date(date);
      const dateMax = new Date(date);
      dateMin.setDate(dateMax.getDate() - 1);
      dateMax.setDate(dateMax.getDate() + 1);
      
      let criteria = {
        "type": true,
        "dateStart[after]": convertDate(dateMin),
        "dateStart[before]": convertDate(dateMax),
        "node_a.department.id[]": form.department.match(/\d+/)[0],
        "properties[]": ["id", "dateStart", "dateEnd", "node_a", "node_b"],
      }
      this.findByCriteria(criteria, false);
    }
  }

  clone(key: string): Observable<Mission> {
    return this.http.get<Mission>(`${this.server}/api/mission/${key}/clone`);
  }


  /**
   * Get pagination
   */
  getPagination(): void {
    this.pagination$ = of(); // reset pagination
    // console.log("getPagination")
    this.pagination$ = this.selectors$.entityActions$.pipe(
      map(action => (action as any).payload.pagination)
    );
  }

  /**
   * Delete item
   * @param id mission id
   * @param target html element
   */
  deleteItem(id: number = null, target: HTMLElement = null) {
    this.confirmDialogService.setConfirmation("Vous êtes sûr de vouloir supprimer?", () => {
      this.delete(id ? id : (this.existingMission as Mission).id)
        .pipe(
          this.toast.observe({
            loading: "Suppression...",
            success: () => {
              let tr = target ? target.closest("tr") : false;
              let reload = !tr || tr.classList.contains("is-parent") || tr.classList.contains("is-child");
              if (reload) {
                setTimeout(() => {
                  this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
                    this.router.navigate([`/mission`]));
                }, 1000);
              } else {
                (tr as HTMLTableRowElement).remove();
              }

              return "Supprimé avec succès";
            },
            error: "un problème est survenu, veuillez réessayer",
          })
        )
        .subscribe();
    });
  }

  /**
   * Search
   */
  onSearch(): void {
    this.page = 1;
    this.hasSearch = true;

    this.lastSearchedParams = this.missionForm.value;
    this.findByCriteria({ page: 1, ...this.lastSearchedParams }, true, false);
  }

  /**
   * Persist : Create / update
   */
  async Persist(Action: string): Promise<void> {
    this.submitted = true;
    if (this.missionForm.invalid) return;
    this.submitted = false;
    let id = null;
    if (!this.EditeMode) {
      this.EditeMode = Action == 'EDIT';
    } else {
      // update Taff
      id = this.existingMission ? (this.existingMission as Mission).id : null;
    }

    let form = this.missionForm.value;
    let _this = this;
    let toast = this.toast;
    let mission = {
      dateStart: DateTimeToString(form.date, form.dateStart),
      dateEnd: form.dateEnd ? DateTimeToString(form.date, form.dateEnd) : null,
      type: form.type != null ? JSON.parse(form.type) : null,
      causes: form.causes && JSON.parse(form.type) ? JSON.parse(form.causes) : null,
      // team: form.team ? form.team : null,
      // department: form.department ? form.department : null,
      nodeA: form.node_a ? form.node_a : null,
      parent: form.parent ? form.parent : null,
      nodeB: form.node_b && form.node_b.length ? form.node_b : [],
      actions: form.actions.length ? form.actions : null,
    };

    let anomalies = form.anomalies;
    if(anomalies && anomalies.length) {
      this.anomalyLoading = true;
      await this.anomalyService.bulkCreate(
        anomalies.map(obj => ({ ...obj, ...{createdAt: mission.dateStart} }))
      ).toPromise();
      this.anomalyLoading = false;
    }

    // @todo compare last query with the new one to avoid unnecessary requests
    
    // console.log(mission);
    // return;
    
    if (id) {
      mission["id"] = id;
      this.update(mission).subscribe({
        error: () => toast.error("un problème est survenu, veuillez réessayer"),
        complete() {
          toast.success("L'interuption a été sauvegardée avec succès ");
          Action == 'LIST' && _this.router.navigate(['/mission']);
          _this.submitted = false;
        },
      });
    } else {
      this.add(mission).pipe(tap(data => this.existingMission = data))
        .subscribe({
          error: () => toast.error("un problème est survenu, veuillez réessayer"),
          complete() {
            toast.success("L'interuption ajoutée avec succès");
            Action == 'NEW' && location.reload();
            Action == 'LIST' && _this.router.navigate(['/mission']);
            _this.submitted = false;
          },
        });
    }

    let anomalyFormArray = this.missionForm.get("anomalies") as FormArray;
    while (anomalyFormArray.length !== 0) anomalyFormArray.removeAt(0);
    this.anomalyService.getRelatedAnomalies(form.node_a,form.node_b,form.department);
  }
  
  getById(id:Number){
    let criteria = {"id":id}
    return this.findByCriteria(criteria, false, true);
  }


  /**
   * find By Criteria
   * @param obj query parameters
   */
  findByCriteria(obj, pagination = true, singleResult = false ) {
    this.mission$ = of([]); // clear table
    
    // format date
    if (Object.keys(obj).length > 1) {
      // console.log(obj);
      const updateObj = (key: string) => obj[key] && delete Object.assign(obj, { ["dateStart[" + key + "]"]: DateToString(obj[key]) })[key];
      updateObj("before"); updateObj("after");
    }

    // remove empty values
    let queryParams = Object.keys(obj)
      .filter((k) => obj[k] != "" && obj[k] != null)
      .reduce((a, k) => ({ ...a, [k]: obj[k] }), {});
    
    // prevent getting children
    !this.hasSearch && (queryParams["exists[parent]"]="false");

    // return single item (used to get missions by id)
    // cuz children property can get only in collection operation
    if(singleResult) {
      return this.getWithQuery(queryParams).pipe(map(response => response[0]));
    } else{
      this.mission$ = this.getWithQuery(queryParams);
    }
      
    if(pagination) {
      this.getPagination();
    }
  }

  sortMissions(a: Mission, b: Mission): number {
    // Compare by dateStart (ignore time)
    const dateA = new Date(a.dateStart).setHours(0, 0, 0, 0);
    const dateB = new Date(b.dateStart).setHours(0, 0, 0, 0);
    if (dateA !== dateB) {
      return dateB - dateA;
    }
  
    // Compare by department id
    const departmentIdA = a.node_a.department.id;
    const departmentIdB = b.node_a.department.id;
    if (departmentIdA !== departmentIdB) {
      return departmentIdA - departmentIdB;
    }
  
    // Compare by type
    const typeA = a.type;
    const typeB = b.type;
    if (typeA !== typeB) {
      return typeA ? -1 : 1;
    }
  
    // Compare by time of dateStart (ignore date)
    const timeA = new Date(a.dateStart).getTime();
    const timeB = new Date(b.dateStart).getTime();
    return timeA - timeB;
  }

  /**
   * on Paginate
   * @param page page to search for
   */
  onPaginate(page: number) {
    this.findByCriteria({ page: page, ...this.lastSearchedParams });
  }

  getDiff(date1, date2): string | void {
    if (date1 && date2) {
      let diff = differenceInMilliseconds(parseDate(date2), parseDate(date1));
      return format(new Date(diff), 'H:mm:ss');
    }
  }

  get departments() {
    let departments = this.missionForm.controls["node_a.department.id[]"];
    return departments ? departments.value : null;
  }
  get department() {
    return this.missionForm.get("department");
  }
  get BNode() {
    return this.missionForm.get("node_b");
  }
  get ANode() {
    return this.missionForm.get("node_a");
  }
  get actions() {
    return this.missionForm.get("actions");
  }
  get type() {
    return this.missionForm.get("type");
  }
  get dateEnd() {
    return this.missionForm.get("dateEnd");
  }
  get dateStart() {
    return this.missionForm.get("dateStart");
  }


}



// this.http.get(`${this.server}/api/mission-total-anomalies/${mission.id}`).pipe(
//   map(anomaly => {
//     let total = anomaly["total"];
//     let undone = anomaly["undone"];
//     missions.push({ 
//       ...mission, 
//       total_anomalies: total ? total : 0,
//       undone_anomalies: undone ? undone : 0
//     })
//   })
// ).subscribe();


// this.authors$.subscribe(authors => {
//   authors.forEach(author => {
//     this.authorService.getTotalBooksCount(author.id).subscribe(totalBooks => {
//       author.totalBooks = totalBooks; // Update the author object with the total books count
//     });
//   });
// });

/*
const requests = missions.map(mission => this.http.get(`${this.server}/api/mission-total-anomalies/${mission.id}`));
return forkJoin(requests).pipe(
  map(anomalies => {
    return missions.map((mission, index) => {
      let total = anomalies[index]["total"];
      let undone = anomalies[index]["undone"];
      return { 
        ...mission, 
        total_anomalies: total ? total : 0,
        undone_anomalies: undone ? undone : 0
      };
    });
  })
);


getAuthors(): Observable<Author[]> {
  return this.http.get<Author[]>('/api/authors').pipe(
    switchMap(authors => {
      const requests = authors.map(author =>
        this.http.get<number>(`/api/authors/${author.id}/total-books`)
      );
      return forkJoin(requests).pipe(
        map(totalBooks => {
          return authors.map((author, index) => ({
            ...author,
            totalBooks: totalBooks[index],
          }));
        })
      );
    })
  );

    switchMap((data) => {
      // Create an array of observables for the second HTTP requests
      const requests = data.map((item) => this.http.get(`${this.server}/api/mission-total-anomalies/${item.id}`));
  
      // Use forkJoin to combine and wait for all the requests to complete
      return forkJoin(requests).pipe(
        map((anomalies) => 
          data.map((item, index) => {
            let total = anomalies[index]["total"];
            let undone = anomalies[index]["undone"];
            return { 
              ...item, 
              total_anomalies: total ? total : 0,
              undone_anomalies: undone ? undone : 0
            };
            
          })
        )
      );
    }),*/

    // switchMap((missions) => {
      //   const requests = missions.map((mission: Mission) => {
      //     return this.http.get(`${this.server}/api/mission-total-anomalies/${mission.id}`).pipe(
      //       map(anomaly => {
      //         let total = anomaly["total"];
      //         return { 
      //           ...mission, 
      //           total_books: total ? total : 0,
      //         };
      //       })
      //     );
      //   });
    
      //   return forkJoin(requests).pipe(
      //     map((updatedmissions) => {
      //       return updatedmissions;
      //     })
      //   );
      // }),