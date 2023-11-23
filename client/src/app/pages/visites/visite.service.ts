import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormArray, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { HotToastService } from "@ngneat/hot-toast";
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from "@ngrx/data";
import { Observable, Subject, concat, of } from "rxjs";
import { catchError, debounceTime, distinctUntilChanged, filter, map, switchMap, tap } from "rxjs/operators";
import { Department, Node, Pagination, Team, Visite } from "src/app/core/models";
import { ConfirmDialogService } from "src/app/shared/components/confirm-dialog/confirm-dialog.service";
import { environment } from "src/environments/environment";
import { anomalyService } from "../anomalies/anomaly.service";
import { communeService } from "../communes/commune.service";
import { departmentService } from "../departments/department.service";
import { nodeService } from "../nodes/node.service";

const zeroPad = (num, places = 2) => String(num).padStart(places, '0');
const DateTimeToString = (date, time) => new Date(date.year, date.month - 1, date.day, time.hour, time.minute, time.second).toISOString();
const DateToString = (date) => date !== "" ? `${date.year}-${zeroPad(date.month)}-${zeroPad(date.day)}` : "";

@Injectable({
  providedIn: "root",
})
export class visiteService extends EntityCollectionServiceBase<Visite> {
  readonly pageSize = environment.pageSize;
  private server = environment.serverURL;
  visites$: Observable<Visite[]>;
  existingVisit: Visite | boolean = false;
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
  lastSearchedParams;
  public visiteForm: FormGroup;

  constructor(
    private serviceElementsFactory: EntityCollectionServiceElementsFactory,
    private confirmDialogService: ConfirmDialogService,
    public departmentService: departmentService,
    public anomalyService: anomalyService,
    public communeService: communeService,
    public nodeService: nodeService,
    private toast: HotToastService,
    private http: HttpClient,
    private router: Router,
  ) {
    super("visites", serviceElementsFactory);
  }

  /**
   * Get records
   */
  findAll(): void {
    this.findByCriteria({ page: 1 });
  }

  loadTeams(defaultVal = []): void {
    this.teams$ = concat(
      of(defaultVal), // default items
      this.teamInput$.pipe(
        debounceTime(500),
        distinctUntilChanged(),
        filter((val) => val != null),
        tap(() => this.teamLoading = true),
        switchMap(term =>
          this.http.get<Team[]>(`${this.server}/api/teams?properties[]=id&properties[]=titre&titre=` + term)
            .pipe(
              map(response => response["hydra:member"]),
              catchError(() => of([])), // empty list on error
              tap(() => this.teamLoading = false)
            )
        )
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
          (this.department ? "&department.id=" + this.department.value.match(/\d+/)[0] : "") +
          (this.departments ? "&properties[department][]=titre&" + this.departments.map(value => `department.id[]=${value}`).join('&') : "")
        ).pipe(
          catchError(() => of([])), // empty list on error
          tap(() => this.ANodeLoading = false)
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
          (this.department ? "&department.id=" + this.department.value.match(/\d+/)[0] : "") +
          (this.departments ? "&properties[department][]=titre&" + this.departments.map(value => `department.id[]=${value}`).join('&') : "")
        ).pipe(
          catchError(() => of([])), // empty list on error
          tap(() => this.BNodeLoading = false)
        ))
      )
    );
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
   * @param id visite id
   * @param target html element
   */
  deleteItem(id: number = null, target: HTMLElement = null) {
    this.confirmDialogService.setConfirmation("Vous êtes sûr de vouloir supprimer?", () => {
      this.delete(id ? id : (this.existingVisit as Visite).id)
        .pipe(
          this.toast.observe({
            loading: "Suppression...",
            success: () => {
              target ? target.closest("tr").remove() : this.router.navigate(['/visites']);
              return "supprimé avec succès";
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
    this.lastSearchedParams = this.visiteForm.value;
    this.findByCriteria({ page: 1, ...this.lastSearchedParams });
  }

  /**
   * Persist : Create / update
   */
  async Persist(Action: string): Promise<void> {
    this.submitted = true;
    if (this.visiteForm.invalid) return;
    this.submitted = false;
    let id = null;
    if (!this.EditeMode) {
      this.EditeMode = Action == 'EDIT';
    } else {
      // update Taff
      id = this.existingVisit ? (this.existingVisit as Visite).id : null;
    }

    let form = this.visiteForm.value;
    let _this = this;
    let toast = this.toast;
    let visite = {
      date: form.date ? DateTimeToString(form.date, form.time) : null,
      team: form.team ? form.team : null,
      nbSupport: form.nbSupport ? form.nbSupport : 0,
      department: form.department ? form.department : null,
      nodeA: form.nodeA ? form.nodeA : null,
      nodeB: form.nodeB && form.nodeB.length ? form.nodeB : [],
    };
    
    let anomalies = form.anomalies;
    if(anomalies && anomalies.length) {
      this.anomalyLoading = true;
      await this.anomalyService.bulkCreate(
        anomalies.map(obj => ({ ...obj, ...{createdAt: visite.date} }))
      ).toPromise();
      this.anomalyLoading = false;
    }

    // compare last query with the new one to avoid unnecessary requests
    if (id) {
      visite["id"] = id;
      this.update(visite).subscribe({
        error: () => toast.error("un problème est survenu, veuillez réessayer"),
        complete() {
          toast.success("L'interuption a été sauvegardée avec succès ");
          Action == 'LIST' && _this.router.navigate(['/visites']);
          _this.submitted = false;
        },
      });
    } else {
      this.add(visite).pipe(tap(data => this.existingVisit = data))
        .subscribe({
          error: () => toast.error("un problème est survenu, veuillez réessayer"),
          complete() {
            toast.success("L'interuption ajoutée avec succès");
            Action == 'NEW' && location.reload();
            Action == 'LIST' && _this.router.navigate(['/visites']);
            _this.submitted = false;
          },
        });
    }

    let anomalyFormArray = this.visiteForm.get("anomalies") as FormArray;
    while (anomalyFormArray.length !== 0) anomalyFormArray.removeAt(0);
    this.anomalyService.getRelatedAnomalies(form.nodeA, form.nodeB, form.department);
  }

  /**
   * find By Criteria
   * @param obj query parameters
   */
  findByCriteria(obj): void {
    this.visites$ = of([]); // clear table

    // format date
    if (Object.keys(obj).length > 1) {
      // console.log(obj);
      const updateObj = (key: string) => obj[key] && delete Object.assign(obj, { ["date[" + key + "]"]: DateToString(obj[key]) })[key];
      updateObj("before"); updateObj("after");
    }

    // remove empty values
    let queryParams = Object.keys(obj)
      .filter((k) => obj[k] != "" && obj[k] != null)
      .reduce((a, k) => ({ ...a, [k]: obj[k] }), {});
    this.visites$ = this.getWithQuery(queryParams);
    this.getPagination();
  }

  /**
   * on Paginate
   * @param page page to search for
   */
  onPaginate(page: number) {
    this.findByCriteria({ page: page, ...this.lastSearchedParams });
  }
  get departments() {
    let departments = this.visiteForm.controls["node_a.department.id[]"];
    return departments ? departments.value : null;
  }
  get designation() {
    return this.visiteForm.get("designation");
  }
  get department() {
    return this.visiteForm.get("department");
  }
  get BNode() {
    return this.visiteForm.get("nodeB");
  }
  get ANode() {
    return this.visiteForm.get("nodeA");
  }
}
