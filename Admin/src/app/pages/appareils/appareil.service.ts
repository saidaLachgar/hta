import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { HotToastService } from "@ngneat/hot-toast";
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from "@ngrx/data";
import { concat, Observable, of, Subject } from "rxjs";
import { catchError, distinctUntilChanged, filter, map, switchMap, tap } from "rxjs/operators";
import { Pagination, AppareilCoupeur, Departement, Poste } from "src/app/core/models";
import { ConfirmDialogService } from "src/app/shared/components/confirm-dialog/confirm-dialog.service";
import { environment } from "src/environments/environment";
import { departementService } from "../departements/departement.service";
import { posteService } from "../postes/poste.service";

@Injectable({
  providedIn: "root",
})
export class appareilService extends EntityCollectionServiceBase<AppareilCoupeur> {
  readonly pageSize = environment.pageSize;
  appareils$: Observable<AppareilCoupeur[]>;
  
  postes$: Observable<Poste[]>;
  posteLoading = false;
  posteInput$ = new Subject<string>();
  
  departements$: Observable<Departement[]>;
  departementLoading = false;
  departementInput$ = new Subject<string>();

  pagination$: Observable<Pagination>;
  submitted: boolean = false;
  page:number = 1;
  lastSearchedParams;
  public appareilForm: FormGroup;

  constructor(
    private serviceElementsFactory: EntityCollectionServiceElementsFactory,
    private confirmDialogService: ConfirmDialogService,
    public DepartementService: departementService,
    public PosteService: posteService,
    private toast: HotToastService
  ) {
    super("appareil_coupeurs", serviceElementsFactory);
  }

  /**
   * Get records
   */
  findAll(): void {
    this.findByCriteria({ page: 1 });
  }
  
  loadPostes() : void{
    this.postes$ = concat(
      of([]), // default items
      this.posteInput$.pipe(
          distinctUntilChanged(),
          filter((val) => val != null),
          tap(() => this.posteLoading = true),
          switchMap(term => this.PosteService.getWithQuery("properties[]=id&properties[]=titre&designation="+term).pipe(
              catchError(() => of([])), // empty list on error
              tap(() => this.posteLoading = false)
          ))
      )
    );
  }

  loadDepartements() : void{
    this.departements$ = concat(
      of([]), // default items
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
   * @param id appareil id
   * @param target html element
   */
  deleteItem(id: number, target: HTMLElement) {
    this.confirmDialogService.setConfirmation("Vous êtes sûr de vouloir supprimer cet appareil ?", () => {
      this.delete(id)
        .pipe(
          this.toast.observe({
            loading: "Suppression...",
            success: () => {
              target.closest("tr").remove();
              return "L'appareil supprimé avec succès";
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
    this.lastSearchedParams = this.appareilForm.value;
    this.findByCriteria({ page: 1, ...this.lastSearchedParams });
  }

  /**
   * Persist : Create
   */
  onCreate(): void {
    let appareilForm = this.appareilForm;
    this.submitted = true;
    if (appareilForm.invalid) return;
    this.submitted = false;
    let toast = this.toast;
    let appareil = appareilForm.value as AppareilCoupeur;

    this.add(appareil).subscribe({
      error: () => toast.error("un problème est survenu, veuillez réessayer"),
      complete() {
        appareilForm.reset();
        toast.success("L'appareil ajouté avec succès");
      },
    });
  }
  /**
   * Persist : update
   */
  onUpdate(id:number): void {
    let appareilForm = this.appareilForm;
    this.submitted = true;
    if (appareilForm.invalid) return;
    this.submitted = false;

    let toast = this.toast;
    let appareil:AppareilCoupeur = {...appareilForm.value};
    appareil.id = id;
      this.update(appareil).subscribe({
        error: () => toast.error("un problème est survenu, veuillez réessayer"),
        complete() {
          toast.success("L'appareil a été mis à jour avec succès");
        },
      });
  }

  get titre() {
    return this.appareilForm.get("titre");
  }
  get membres() {
    return this.appareilForm.get("membres");
  }
  get departements() {
    return this.appareilForm.get("departements");
  }

  /**
   * find By Criteria
   * @param obj query parameters
   */
  findByCriteria(obj): void {
    this.appareils$ = of([]); // clear table
    // remove empty values
    let queryParams = Object.keys(obj)
      .filter((k) => obj[k] != "" && obj[k] != null)
      .reduce((a, k) => ({ ...a, [k]: obj[k] }), {});
    this.appareils$ = this.getWithQuery(queryParams);
    this.getPagination();
  }

  /**
   * on Paginate
   * @param page page to search for
   */
  onPaginate(page: number) {
    this.findByCriteria({ page: page, ...this.lastSearchedParams });
  }
}
