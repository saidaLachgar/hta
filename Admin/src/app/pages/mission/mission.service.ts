import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { HotToastService } from "@ngneat/hot-toast";
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from "@ngrx/data";
import { concat, Observable, of, Subject } from "rxjs";
import { catchError, debounceTime, distinctUntilChanged, filter, map, switchMap, take, tap } from "rxjs/operators";
import { Pagination, Mission, Department, Node } from "src/app/core/models";
import { ConfirmDialogService } from "src/app/shared/components/confirm-dialog/confirm-dialog.service";
import { environment } from "src/environments/environment";
import { nodeService } from "../nodes/node.service";
import { departmentService } from "../departments/department.service";

const zeroPad = (num, places = 2) => String(num).padStart(places, '0');
const DateTimeToString = (date, time) => new Date(date.year, date.month - 1, date.day, time.hour, time.minute, time.second).toISOString();
const DateToString = (date) => `${date.year}-${zeroPad(date.month)}-${zeroPad(date.day)}`;

@Injectable({
  providedIn: "root",
})
export class missionService extends EntityCollectionServiceBase<Mission> {
  readonly server = environment.serverURL;
  readonly pageSize = environment.pageSize;
  mission$: Observable<Mission[]>;
  interruption: Mission | boolean = false;

  ANode$: Observable<any[] | Node[]>;
  ANodeLoading = false;
  ANodeInput$ = new Subject<string>();

  BNode$: Observable<any[] | Node[]>;
  BNodeLoading = false;
  BNodeInput$ = new Subject<string>();

  departments$: Observable<Department[]>;
  departmentLoading = false;
  departmentInput$ = new Subject<string>();



  pagination$: Observable<Pagination>;
  submitted: boolean = false;
  page: number = 1;
  lastSearchedParams;
  lastFormData;
  // initialValues;
  public missionForm: FormGroup;

  constructor(
    private serviceElementsFactory: EntityCollectionServiceElementsFactory,
    private confirmDialogService: ConfirmDialogService,
    public DepartmentService: departmentService,
    public NodeService: nodeService,
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
    this.findByCriteria({ page: 1 });
  }

  loadANodes(defaultVal = []): void {
    this.ANode$ = concat(
      of(defaultVal), // default items
      this.ANodeInput$.pipe(
        debounceTime(500),
        distinctUntilChanged(),
        filter((val) => val != null),
        tap(() => this.ANodeLoading = true),
        switchMap(term => this.NodeService.getWithQuery(
          "properties[]=id&properties[]=titre&titre=" + term +
          (this.department.value ? "&department.id=" + this.department.value.match(/\d+/)[0] : "")
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
        switchMap(term => this.NodeService.getWithQuery(
          "properties[]=id&properties[]=titre&titre=" + term +
          (this.department.value ? "&department.id=" + this.department.value.match(/\d+/)[0] : "")
        ).pipe(
          catchError(() => of([])), // empty list on error
          tap(() => this.BNodeLoading = false)
        ))
      )
    );
  }
  loadDepartments(defaultVal = []): void {
    this.departments$ = concat(
      of(defaultVal), // default items
      this.departmentInput$.pipe(
        debounceTime(500),
        distinctUntilChanged(),
        filter((val) => val != null),
        tap(() => this.departmentLoading = true),
        switchMap(term => this.DepartmentService.getWithQuery("properties[]=id&properties[]=titre&titre=" + term).pipe(
          catchError(() => of([])), // empty list on error
          tap(() => this.departmentLoading = false)
        ))
      )
    );
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
      this.delete(id ? id : (this.interruption as Mission).id)
        .pipe(
          this.toast.observe({
            loading: "Suppression...",
            success: () => {
              target && target.closest("tr").remove();
              // !id && this.missionForm.reset(this.initialValues);
              // !id && window.location.reload();
              this.router.navigate(['/mission']);
              return "L'interruption supprimé avec succès";
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
    this.lastSearchedParams = this.missionForm.value;
    this.findByCriteria({ page: 1, ...this.lastSearchedParams });
  }

  /**
   * Persist : Create / update
   */
  Persist(id = null, action: string): void {
    this.submitted = action == 'EDIT';

    let form = this.missionForm.value;
    let _this = this;
    let toast = this.toast;
    let mission = {
      dateStart: DateTimeToString(form.date, form.dateStart),
      dateEnd: form.dateEnd ? DateTimeToString(form.date, form.dateEnd) : null,
      type: form.type != null ? JSON.parse(form.type) : null,
      causes: form.causes && JSON.parse(form.type) ? JSON.parse(form.causes) : null,
      // department: form.department ? form.department : null,
      nodeA: form.nodeA ? form.nodeA : null,
      nodeB: form.nodeB.length ? form.nodeB : null,
    } as Mission;

    // console.log(form);
    console.log(mission);
    // return;
    // compare last query with the new one to avoid unnecessary requests
    if (JSON.stringify(this.lastFormData) === JSON.stringify(mission)) return;
    this.lastFormData = mission;
    if (id) {
      mission.id = id;
      this.update(mission).subscribe({
        error: () => toast.error("un problème est survenu, veuillez réessayer"),
        complete() {
          toast.success("L'interuption a été sauvegardée avec succès ");
          action == 'LIST' && _this.router.navigate(['/mission']);
          _this.submitted = false;
        },
      });
    } else {
      this.add(mission).pipe(tap(data => this.interruption = data))
        .subscribe({
          error: () => toast.error("un problème est survenu, veuillez réessayer"),
          complete() {
            toast.success("L'interuption ajoutée avec succès");
            action == 'NEW' && location.reload();
            action == 'LIST' && _this.router.navigate(['/mission']);
            _this.submitted = false;
          },
        });
    }
  }


  /**
   * find By Criteria
   * @param obj query parameters
   */
  findByCriteria(obj): void {
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
    this.mission$ = this.getWithQuery(queryParams)
      .pipe(
        map((data) => {

          let tempObj = {}; // temporary object to group data
          data.forEach((v: Mission, index) => {
            // create an id by same date and department
            // only if type is true (Incident)
            let key = v.type && v.node_a.department && v.dateStart ?
              v.node_a.department.id + "-" + new Date(v.dateStart).toLocaleDateString() :
              v.id
              ;

            // set when to concatenate same rows based on the same id
            if (tempObj[key]) { // if already exists (same date/depar)
              tempObj[key].push(v); // group same rows

              // Find index of 1st row has same id    
              let objIndex = data.findIndex(obj => obj.id === tempObj[key][0].id);
              // add new property to tell whether to merge next rows or not
              // property value is the amount of rows should be merged

              let firstRow = Object.assign({}, data[objIndex]); //assign = merge (old, new) )
              firstRow.rowspan = tempObj[key].length;
              data[objIndex] = firstRow;

              // set rowspan to -1 to tell that this row should be merged with the above
              let currentRow = Object.assign({}, v);
              currentRow.rowspan = -1;
              data[index] = currentRow;

            } else {
              tempObj[key] = [v]; // push new array
            }
          });
          return data;
        })
      );
    this.getPagination();
  }

  /**
   * on Paginate
   * @param page page to search for
   */
  onPaginate(page: number) {
    this.findByCriteria({ page: page, ...this.lastSearchedParams });
  }

  get department() {
    return this.missionForm.get("department");
  }
  get BNode() {
    return this.missionForm.get("BNode");
  }
  get ANode() {
    return this.missionForm.get("ANode");
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
