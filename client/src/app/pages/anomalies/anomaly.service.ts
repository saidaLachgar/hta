import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { HotToastService } from "@ngneat/hot-toast";
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from "@ngrx/data";
import { BehaviorSubject, Observable, Subject, concat, of } from "rxjs";
import { catchError, debounceTime, distinctUntilChanged, filter, map, switchMap, tap } from "rxjs/operators";
import { Anomaly, Department, Edge, Pagination, SEVERITY_OPTIONS, User } from "src/app/core/models";
import { ConfirmDialogService } from "src/app/shared/components/confirm-dialog/confirm-dialog.service";
import { environment } from "src/environments/environment";
import { communeService } from "../communes/commune.service";
import { departmentService } from "../departments/department.service";
import { edgeService } from "../edges/edge.service";
import { UserService } from "../users/user.service";
const formatDate = (date) => date !== "" ? date.year + "-" + date.month + "-" + ("0" + date.day).slice(-2) : "";


@Injectable({
  providedIn: "root",
})
export class anomalyService extends EntityCollectionServiceBase<Anomaly> {
  readonly pageSize = environment.pageSize; readonly server = environment.serverURL;
  readonly severityOptions = SEVERITY_OPTIONS;
  anomalies$: Observable<Anomaly[]>;

  departments$: Observable<Department[]>;
  departmentLoading = false;
  departmentInput$ = new Subject<string>();

  users$: Observable<User[]>;
  usersLoading = false;
  usersInput$ = new Subject<string>();

  edgesInRange$ = new BehaviorSubject<Edge[]>([]);
  edges$: Observable<Edge[]>;
  edgesLoading = false;
  edgesInput$ = new Subject<string>();

  pagination$: Observable<Pagination>;
  submitted: boolean = false;
  statusLoading: number = 0;
  page: number = 1;
  lastSearchedParams;
  public anomalyForm: FormGroup;

  constructor(
    private serviceElementsFactory: EntityCollectionServiceElementsFactory,
    private confirmDialogService: ConfirmDialogService,
    public departmentService: departmentService,
    public communeService: communeService,
    public edgeService: edgeService,
    public userService: UserService,
    private http: HttpClient,
    private toast: HotToastService
  ) {
    super("anomalies", serviceElementsFactory);
  }

  /**
   * Get records
   */
  findAll(): void {
    this.findByCriteria({ page: 1 });
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

  loadUsers(defaultVal = []): void {
    this.users$ = concat(
      of(defaultVal), // default items
      this.usersInput$.pipe(
        debounceTime(500),
        distinctUntilChanged(),
        filter((val) => val != null),
        tap(() => this.usersLoading = true),
        switchMap(term => this.userService.getWithQuery("properties[]=id&properties[]=fullName&fullName=" + term).pipe(
          catchError(() => of([])), // empty list on error
          tap(() => this.usersLoading = false)
        ))
      )
    );
  }

  loadEdgesInRange(range, edgesInRange): void {
    let obj = { ...range };
    obj["id[]"] = edgesInRange;
    obj["properties[]"] = "id";
    obj["properties[node_a][]"] = "titre";
    obj["properties[node_b][]"] = "titre";
    obj["pagination"] = "false";
    delete obj.node_a; delete obj.page;
    obj.node_b && delete obj.node_b;
    // console.log("dz",obj);

    this.edgeService.getWithQuery(obj).subscribe(edges => {
      this.edgesInRange$.next(edges);
    });
  }

  loadEdgesByDepar($event): void {
    this.edge.reset();
    this.edgesInRange$.next([]);
    this.edgeService.getWithQuery(`properties[]=id&properties[]=node_a&properties[]=node_b&itemsPerPage=1000&department.id=` + $event.match(/\d+/)[0]).subscribe(edges => {
      this.edgesInRange$.next(edges);
    });
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
   * @param id anomaly id
   * @param target html element
   */
  deleteItem(id: number, target: HTMLElement) {
    this.confirmDialogService.setConfirmation("Vous êtes sûr de vouloir supprimer?", () => {
      this.delete(id)
        .pipe(
          this.toast.observe({
            loading: "Suppression...",
            success: () => {
              target.closest("tr").remove();
              return "Anomaly supprimé avec succès";
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
    this.lastSearchedParams = this.anomalyForm.value;
    this.findByCriteria({ page: 1, ...this.lastSearchedParams });
  }

  /**
   * Persist : Create
   */
  onCreate(): void {
    let anomalyForm = this.anomalyForm;
    this.submitted = true;
    if (anomalyForm.invalid) return;
    this.submitted = false;
    let toast = this.toast;
    let obj = Object.entries(anomalyForm.value as Anomaly);
    // remove empty values
    const anomaly = Object.fromEntries(obj.filter(([key, value]) => value !== ""));

    this.add(anomaly).subscribe({
      error: () => toast.error("un problème est survenu, veuillez réessayer"),
      complete() {
        anomalyForm.reset();
        toast.success("Anomaly ajouté avec succès");
      },
    });
  }
  /**
   * Persist : update
   */
  onUpdate(id: number): void {
    let anomalyForm = this.anomalyForm;
    this.submitted = true;
    if (anomalyForm.invalid) return;
    this.submitted = false;
    let toast = this.toast;
    let obj = Object.entries(anomalyForm.value as Anomaly);
    // remove empty values
    const anomaly = Object.fromEntries(obj.filter(([key, value]) => value !== ""));
    anomaly.id = id;

    this.update(anomaly).subscribe({
      error: () => toast.error("un problème est survenu, veuillez réessayer"),
      complete() {
        toast.success("Anomaly a été mis à jour avec succès");
      },
    });
  }

  updateStatus($event: MouseEvent, id: number) {
    $event.stopPropagation();
    let _this = this;
    let checked = !($event.target as HTMLTextAreaElement).classList.contains("checked");
    let anomaly = { id: id, status: checked } as Anomaly;
    this.statusLoading = id;

    this.update(anomaly).subscribe({
      error: () => _this.toast.error("un problème est survenu, veuillez réessayer"),
      complete() {
        _this.statusLoading = 0;
        _this.toast.success("Statut a été mis à jour avec succès");
      },
    });
  }

  bulkCreate(anomalies: Anomaly[]): Observable<[]> {
    return this.http.post<[]>(`${this.server}/api/anomalies/bulk?action=create`, { anomalies: anomalies });
  }


  // get edges and anomalies of current mission range
  getRelatedAnomalies(anode, bnode, depar, date = null, status = "all") {
    anode && anode.trim() !== '' && this.findByCriteria({
      page: 1,
      ...{ node_a: anode.match(/\d+/)[0], depar: depar.match(/\d+/)[0] },
      ...(bnode && bnode.length !== 0 && { node_b: bnode.map((node) => node.match(/\d+/)[0]) })
    }, true, date, status);
  }

  /**
   * find By Criteria
   * @param obj query parameters
   */
  async findByCriteria(obj, related = false, date = null, status = "all"): Promise<void> {
    this.anomalies$ = of([]); // clear table

    if (Object.keys(obj).length > 1) {
      // format date
      const updateObj = (key: string) => obj[key] && delete Object.assign(obj, { ["createdAt[" + key + "]"]: formatDate(obj[key]) })[key];
      updateObj("before"); updateObj("after");


      // get anomalies of node range
      if (obj.node_a) {
        // get edges as an array then add edge.id[] to the object
        let edgesInRange = await this.edgeService.getEdgesInRange(obj.depar, obj.node_a, obj.node_b ? obj.node_b : null).toPromise();
        // get edges of current mission range
        this.loadEdgesInRange(obj, edgesInRange);

        obj["edge.id[]"] = edgesInRange;
        delete obj.node_a;
        obj.node_b && delete obj.node_b;
      }
    }

    // remove empty values
    let queryParams = Object.keys(obj)
      .filter((k) => obj[k] != "" && obj[k] != null)
      .reduce((a, k) => ({ ...a, [k]: obj[k] }), {});

    // if (date) {
    //   let anomaliesDate = typeof date === 'string' || date instanceof String ? date : formatDate(date)
    //   queryParams["createdAt[after]"] = anomaliesDate.split("T")[0] + "T00:00:00";
    //   queryParams["createdAt[before]"] = anomaliesDate.split("T")[0] + "T23:59:59";
    // }

    if (status != "all") {
      queryParams["status"] = status;
    }

    if (related) {
      // if no Related Edges were found return empty table
      let noRelatedEdges = !queryParams["edge.id[]"]?.length ?? true;
      if (noRelatedEdges) {
        // fake id to get an empty table
        queryParams["edge.id[]"] = 1000000000;
      }
    }

    this.anomalies$ = this.getWithQuery(queryParams);
    this.getPagination();
  }

  /**
   * on Paginate
   * @param page page to search for
   */
  onPaginate(page: number) {
    this.findByCriteria({ page: page, ...this.lastSearchedParams });
  }

  getSeverity(value: string, color: boolean): string {
    const severity = this.severityOptions.find(option => option.value === value);
    return severity ? (color ? severity.color : severity.label) : '';
  }

  get department() {
    return this.anomalyForm.get("department");
  }
  get title() {
    return this.anomalyForm.get("title");
  }
  get edge() {
    return this.anomalyForm.get("edge");
  }
}
