import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormGroup, ValidationErrors } from "@angular/forms";
import { HotToastService } from "@ngneat/hot-toast";
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from "@ngrx/data";
import { concat, Observable, of, Subject } from "rxjs";
import { catchError, distinctUntilChanged, filter, map, switchMap, tap } from "rxjs/operators";
import { AppareilCoupeur, Commune, Departement, Pagination, Poste } from "src/app/core/models";
import { ConfirmDialogService } from "src/app/shared/components/confirm-dialog/confirm-dialog.service";
import { environment } from "src/environments/environment";
import { communeService } from "../communes/commune.service";
import { departementService } from "../departements/departement.service";

const formatDate = (date) => date !== "" ? date.year+"-"+date.month+"-"+("0" + date.day).slice(-2) : "";


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
  departements$: Observable<Departement[]>;
  departementLoading = false;
  departementInput$ = new Subject<string>();
  appareils$: Observable<AppareilCoupeur[]>;
  appareilLoading = false;
  appareilInput$ = new Subject<string>();
  pagination$: Observable<Pagination>;
  submitted: boolean = false;
  page:number = 1;
  lastSearchedParams;
  public posteForm: FormGroup;

  constructor(
    private serviceElementsFactory: EntityCollectionServiceElementsFactory,
    private confirmDialogService: ConfirmDialogService,
    public DepartementService: departementService,
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
          distinctUntilChanged(),
          filter((val) => val != null),
          tap(() => this.communeLoading = true),
          switchMap(term => this.DepartementService.getWithQuery("properties[]=id&properties[]=titre&titre="+term).pipe(
              catchError(() => of([])), // empty list on error
              tap(() => this.communeLoading = false)
          ))
      )
    );
  }
  loadDepartements(defaultVal = []) : void{
    this.departements$ = concat(
      of(defaultVal), // default items
      this.departementInput$.pipe(
          distinctUntilChanged(),
          filter((val) => val != null),
          tap(() => this.departementLoading = true),
          switchMap(term => this.DepartementService.getWithQuery("properties[]=id&properties[]=titre&titre="+term).pipe(
              catchError(() => of([])), // empty list on error
              tap(() => this.departementLoading = false)
          ))
      )
    );
  }
  loadAppareils(defaultVal = []) : void{
    this.appareils$ = concat(
      of(defaultVal), // default items
      this.appareilInput$.pipe(
          distinctUntilChanged(),
          filter((val) => val != null),
          tap(() => this.appareilLoading = true),
          switchMap(term => 
            this.http.get<AppareilCoupeur[]>(`${this.server}/api/appareil_coupeurs?properties[]=id&properties[]=titre&titre=`+term)
            .pipe(
              map(response => response["hydra:member"]),
              catchError(() => of([])), // empty list on error
              tap(() => this.appareilLoading = false)
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
   * Persist : Create
   */
  onCreate(): void {
    let posteForm = this.posteForm;
    this.submitted = true;
    if (posteForm.invalid) return;
    this.submitted = false;
    let toast = this.toast;
    let obj = posteForm.value;
    // console.log(obj);
    // return;
    // remove empty values
    let poste = Object.keys(obj)
      .filter((k) => obj[k] != "" && obj[k] != null)
      .reduce((a, k) => ({ ...a, [k]: obj[k] }), {}) as Poste;
    poste["dateMst"] && (poste["dateMst"] = formatDate(poste["dateMst"]));

    this.add(poste).subscribe({
      error: () => toast.error("un problème est survenu, veuillez réessayer"),
      complete() {
        posteForm.reset();
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
    this.submitted = false;
    let toast = this.toast;
    let obj = posteForm.value;

    // remove empty values
    let poste = Object.keys(obj)
      .filter((k) => obj[k] != "" && obj[k] != null)
      .reduce((a, k) => ({ ...a, [k]: obj[k] }), {}) as Poste;
    poste["dateMst"] && (poste["dateMst"] = formatDate(poste["dateMst"]));
    poste.id = id;

      this.update(poste).subscribe({
        error: () => toast.error("un problème est survenu, veuillez réessayer"),
        complete() {
          toast.success("Poste a été mis à jour avec succès");
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
      const updateObj = (key:string) => obj[key] && delete Object.assign(obj, {["createdAt["+key+"]"]: formatDate(obj[key]) })[key];
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
}
