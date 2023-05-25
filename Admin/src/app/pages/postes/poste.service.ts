import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { HotToastService } from "@ngneat/hot-toast";
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from "@ngrx/data";
import { Observable, Subject, concat, of } from "rxjs";
import { catchError, debounceTime, distinctUntilChanged, filter, map, switchMap, tap } from "rxjs/operators";
import { Commune, Department, Node, Pagination, Poste } from "src/app/core/models";
import { ConfirmDialogService } from "src/app/shared/components/confirm-dialog/confirm-dialog.service";
import { environment } from "src/environments/environment";
import { communeService } from "../communes/commune.service";
import { departmentService } from "../departments/department.service";

const formatDate = (date) => new Date(date.year,date.month,date.day).toISOString();
const zeroPad = (num, places = 2) => String(num).padStart(places, '0');
const DateToString = (date) => `${date.year}-${zeroPad(date.month)}-${zeroPad(date.day)}`;

@Injectable({
  providedIn: "root",
})
export class posteService extends EntityCollectionServiceBase<Poste> {
  readonly pageSize = environment.pageSize;
  private server = environment.serverURL;
  postes$: Observable<Poste[]>;
  
  communes$: Observable<Commune[]>;
  communeLoading = false;
  communeInput$ = new Subject<string>();

  departments$: Observable<Department[]>;
  departmentLoading = false;
  departmentInput$ = new Subject<string>();

  nodes$: Observable<Node[]>;
  nodeLoading = false;
  nodeInput$ = new Subject<string>();

  pagination$: Observable<Pagination>;
  submitted: boolean = false;
  isLoading = false;
  page:number = 1;
  lastSearchedParams;
  
  public selectedFile:File;
  public posteForm: FormGroup;
  public importForm: FormGroup;

  constructor(
    private serviceElementsFactory: EntityCollectionServiceElementsFactory,
    private confirmDialogService: ConfirmDialogService,
    public departmentService: departmentService,
    public communeService: communeService,
    private http: HttpClient,
    private toast: HotToastService
  ) {
    super("postes", serviceElementsFactory);
  }

  /**
   * Get records
   */
  findAll(): void {
    this.findByCriteria({ page: 1 });
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
  loadDepartments(byTerm = true): void {
    if(byTerm){
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
  loadNodes(defaultVal = []) : void{
    this.nodes$ = concat(
      of(defaultVal), // default items
      this.nodeInput$.pipe(
          debounceTime(500),
          distinctUntilChanged(),
          filter((val) => val != null),
          tap(() => this.nodeLoading = true),
          switchMap(term => 
            this.http.get<Node[]>(`${this.server}/api/nodes?properties[]=id&properties[]=titre&titre=${term}`+
            (this.department ?  "&department.id="+ this.department.value.match(/\d+/)[0] : "")
            )
            .pipe(
              map(response => response["hydra:member"]),
              catchError(() => of([])), // empty list on error
              tap(() => this.nodeLoading = false)
            )
          )
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
   * @param id poste id
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
              return "Poste supprimé avec succès";
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
    this.lastSearchedParams = this.posteForm.value;
    this.findByCriteria({ page: 1, ...this.lastSearchedParams });
  }

  /**
   * upload spreadsheet
   */
  uploadSpreadSheet(): void{
    this.submitted = true;    
    if (this.importForm.invalid) return;
    
    let url = `${this.server}/api/upload_spreadsheet`;
    let that = this;
    let toast = this.toast;
    let body: FormData = new FormData();
    body.append("spreadSheet", this.selectedFile);
    body.append("addNonExitingAssociation", this.addNonExitingAssociation.value);

     this.http.post( url, body, { reportProgress: true, responseType: 'json' }).pipe().subscribe({
      error: () => {
        that.isLoading = false;
        toast.error("un problème est survenu, veuillez réessayer")
      },
      complete() {
        that.importForm.reset();
        that.submitted = false;
        that.isLoading = false;
        toast.success("Postes importés avec succès");
      },
    });
  }


  /**
   * Persist : Create
   */
  onCreate(): void {
    let posteForm = this.posteForm;
    this.submitted = true;    
    if (posteForm.invalid) return;
    let toast = this.toast;
    let obj = Object.entries(posteForm.value as Poste);
    // remove empty values
    const poste = Object.fromEntries(obj.filter(([key, value]) => value !== ""));
    
    poste["dateMst"] && (poste["dateMst"] = formatDate(poste["dateMst"]));

    this.add(poste).subscribe({
      error: () => toast.error("un problème est survenu, veuillez réessayer"),
      complete() {
        posteForm.reset();
        this.submitted = false;
        toast.success("Poste ajouté avec succès");
      },
    });
  }
  /**
   * Persist : update
   */
  onUpdate(id:number): void {
    let posteForm = this.posteForm;
    this.submitted = true;
    if (posteForm.invalid) return;
    let toast = this.toast;
    let obj = posteForm.value;

    // remove empty values
    let poste = obj as Poste;
    poste["dateMst"] && (poste["dateMst"] = formatDate(poste["dateMst"]));
    poste.id = id;

      this.update(poste).subscribe({
        error: () => toast.error("un problème est survenu, veuillez réessayer"),
        complete() {
          toast.success("Poste a été mis à jour avec succès");
          this.submitted = false;
        },
      });
  }

  /**
   * find By Criteria
   * @param obj query parameters
   */
  findByCriteria(obj): void {
    this.postes$ = of([]); // clear table

    // format date
    if(Object.keys(obj).length > 1){
      // console.log(obj);
      const updateObj = (key:string) => obj[key] && delete Object.assign(obj, {["date_mst["+key+"]"]: DateToString(obj[key]) })[key];
      updateObj("before");updateObj("after");
    }

    // remove empty values
    let queryParams = Object.keys(obj)
      .filter((k) => obj[k] != "" && obj[k] != null)
      .reduce((a, k) => ({ ...a, [k]: obj[k] }), {});
    this.postes$ = this.getWithQuery(queryParams);
    this.getPagination();
  }

  /**
   * on Paginate
   * @param page page to search for
   */
  onPaginate(page: number) {
    this.findByCriteria({ page: page, ...this.lastSearchedParams });
  }
  get designation() {
    return this.posteForm.get("designation");
  }
  get node() {
    return this.posteForm.get("node");
  }
  get department() {
    return this.posteForm.get("department");
  }
  get addNonExitingAssociation() {
    return this.importForm.get("addNonExitingAssociation");
  }
  get spreadSheet() {
    return this.importForm.get("spreadSheet");
  }
}
