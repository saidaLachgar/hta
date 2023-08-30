import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { HotToastService } from "@ngneat/hot-toast";
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from "@ngrx/data";
import { concat, Observable, of, Subject } from "rxjs";
import { catchError, debounceTime, distinctUntilChanged, filter, map, switchMap, tap } from "rxjs/operators";
import { Pagination, Edge, Department, Commune } from "src/app/core/models";
import { ConfirmDialogService } from "src/app/shared/components/confirm-dialog/confirm-dialog.service";
import { environment } from "src/environments/environment";
import { communeService } from "../communes/commune.service";
import { departmentService } from "../departments/department.service";
import { nodeService } from "../nodes/node.service";

@Injectable({
  providedIn: "root",
})
export class edgeService extends EntityCollectionServiceBase<Edge> {
  readonly pageSize = environment.pageSize;
  private server = environment.serverURL;
  edges$: Observable<Edge[]>;

  departments$: Observable<Department[]>;
  departmentLoading = false;
  departmentInput$ = new Subject<string>();

  communes$: Observable<Commune[]>;
  communeLoading = false;
  communeInput$ = new Subject<string>();

  ANode$: Observable<any[] | Node[]>;
  ANodeLoading = false;
  ANodeInput$ = new Subject<string>();

  BNode$: Observable<any[] | Node[]>;
  BNodeLoading = false;
  BNodeInput$ = new Subject<string>();

  pagination$: Observable<Pagination>;
  submitted: boolean = false;
  isLoading = false;
  page: number = 1;
  lastSearchedParams;
  uploadResponse:string[];

  public selectedFile:File;
  public importForm: FormGroup;
  public exportForm: FormGroup;
  public edgeForm: FormGroup;

  constructor(
    private serviceElementsFactory: EntityCollectionServiceElementsFactory,
    private confirmDialogService: ConfirmDialogService,
    public departmentService: departmentService,
    public communeService: communeService,
    public nodeService: nodeService,
    private http: HttpClient,
    private toast: HotToastService
  ) {
    super("edges", serviceElementsFactory);
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

  loadCommunes(defaultVal = []) : void{
    this.communes$ = concat(
      of(defaultVal), // default items
      this.communeInput$.pipe(
          debounceTime(500),
          distinctUntilChanged(),
          filter((val) => val != null),
          tap(() => this.communeLoading = true),
          switchMap(term => this.communeService.getWithQuery("properties[]=id&properties[]=titre&titre="+term).pipe(
              catchError(() => of([])), // empty list on error
              tap(() => this.communeLoading = false)
          ))
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
          (this.department ? "&department.id=" + this.department.value.match(/\d+/)[0] : "")
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
          (this.department ? "&department.id=" + this.department.value.match(/\d+/)[0] : "")
        ).pipe(
          catchError(() => of([])), // empty list on error
          tap(() => this.BNodeLoading = false)
        ))
      )
    );
  }

  getEdgesInRange(depar: string, node_a: string, node_b: string[] | null = []): Observable<string[]> {
    return this.http.get<string[]>(`${this.server}/api/edges/by-range?depar=${depar}&node_a=${node_a}${node_b ? "&node_b="+node_b : ""}`)
    .pipe(
      map(response => response["hydra:member"])
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
   * @param id edge id
   * @param target html element
   */
  deleteItem(id: number, target: HTMLElement) {
    this.confirmDialogService.setConfirmation("Vous êtes sûr de vouloir supprimer cet edge ?", () => {
      this.delete(id)
        .pipe(
          this.toast.observe({
            loading: "Suppression...",
            success: () => {
              target.closest("tr").remove();
              return "L'edge supprimé avec succès";
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
    this.lastSearchedParams = this.edgeForm.value;
    this.findByCriteria({ page: 1, ...this.lastSearchedParams });
  }

  /**
   * Persist : Create
   */
  onCreate(): void {
    let edgeForm = this.edgeForm;
    this.submitted = true;
    if (edgeForm.invalid) return;
    this.submitted = false;
    let toast = this.toast;
    let obj = Object.entries(edgeForm.value as Edge);
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
  onUpdate(id: number): void {
    let edgeForm = this.edgeForm;
    this.submitted = true;
    if (edgeForm.invalid) return;
    this.submitted = false;

    let toast = this.toast;
    let edge: Edge = { ...edgeForm.value };
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
  findByCriteria(obj): void {
    this.edges$ = of([]); // clear table
    // remove empty values
    let queryParams = Object.keys(obj)
      .filter((k) => obj[k] != "" && obj[k] != null)
      .reduce((a, k) => ({ ...a, [k]: obj[k] }), {});
    this.edges$ = this.getWithQuery(queryParams);
    this.getPagination();
  }

  /**
   * on Paginate
   * @param page page to search for
   */
  onPaginate(page: number) {
    this.findByCriteria({ page: page, ...this.lastSearchedParams });
  }

   /**
   * export spreadsheet from the server
   */
   exportSpreadSheet(): void{
    let form = this.exportForm;
    this.isLoading = true;
    let that = this;
    let toast = this.toast;
    let url = `${this.server}/api/export_spreadsheet`;
    let obj = Object.entries(form.value as Edge);
    // remove empty values
    const filter = Object.fromEntries(obj.filter(([key, value]) => value !== "" && value !== null ));
    // console.log(data);
    // return; 
    this.http.post(url, {className : "edge", filter }, { responseType: 'blob' } ).subscribe(
      (response) => {
        that.isLoading = false;
        // Create a blob URL from the response
        const blob = new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const url = window.URL.createObjectURL(blob);
        window.open(url, '_blank').focus();

      },
      (error) => {
        that.isLoading = false;
        toast.error("un problème est survenu, veuillez réessayer"+error)
      })
   }


   /**
   * import spreadsheet to the server
   */
   importSpreadSheet(): void{
    this.submitted = true;    
    this.isLoading = true;
    if (this.importForm.invalid) return;
    
    let url = `${this.server}/api/import_spreadsheet`;
    let that = this;
    let toast = this.toast;
    let body: FormData = new FormData();
    body.append("spreadSheet", this.selectedFile);
    body.append("addNonExAssoc", this.addNonExitingAssociation.value);
    body.append("updateIfExist", this.updateIfExist.value);
    body.append("className", "edge");
    body.append("uniqueColumns", "NodeA,NodeB");

     this.http.post<{messages: string[]}>( url, body, { reportProgress: true, responseType: 'json' }).pipe().subscribe(
      
      (response) => {
        // console.log('Response:', response);
        that.importForm.reset();
        that.selectedFile = null;
        that.submitted = false;
        that.isLoading = false;
        // console.log(response);
        that.uploadResponse = response.messages;
        toast.show('L\'opération se termine avec succès', {icon: ''});
      },
      (error) => {
        that.isLoading = false;
        toast.error("un problème est survenu, veuillez réessayer"+error)
      }  
    );
  }

}

