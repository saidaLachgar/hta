import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { HotToastService } from "@ngneat/hot-toast";
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from "@ngrx/data";
import { concat, Observable, of, Subject } from "rxjs";
import { catchError, distinctUntilChanged, filter, map, switchMap, tap } from "rxjs/operators";
import { AppareilCoupeur, Departement, Pagination, Team, Visite } from "src/app/core/models";
import { ConfirmDialogService } from "src/app/shared/components/confirm-dialog/confirm-dialog.service";
import { environment } from "src/environments/environment";
import { communeService } from "../communes/commune.service";
import { departementService } from "../departements/departement.service";

const formatDate = (date) => date !== "" ? date.year+"-"+date.month+"-"+("0" + date.day).slice(-2) : "";


@Injectable({
  providedIn: "root",
})
export class visiteService extends EntityCollectionServiceBase<Visite> {
  readonly pageSize = environment.pageSize;
  private server = environment.serverURL;
  visites$: Observable<Visite[]>;
  
  departements$: Observable<Departement[]>;
  departementLoading = false;
  departementInput$ = new Subject<string>();

  destinations$: Observable<AppareilCoupeur[]>;
  destinationLoading = false;
  destinationInput$ = new Subject<string>();
  
  sources$: Observable<AppareilCoupeur[]>;
  sourceLoading = false;
  sourceInput$ = new Subject<string>();

  teams$: Observable<Team[]>;
  teamLoading = false;
  teamInput$ = new Subject<string>();

  pagination$: Observable<Pagination>;
  submitted: boolean = false;
  page:number = 1;
  lastSearchedParams;
  public visiteForm: FormGroup;

  constructor(
    private serviceElementsFactory: EntityCollectionServiceElementsFactory,
    private confirmDialogService: ConfirmDialogService,
    public DepartementService: departementService,
    public communeService: communeService,
    private http: HttpClient,
    private toast: HotToastService
  ) {
    super("visites", serviceElementsFactory);
  }

  /**
   * Get records
   */
  findAll(): void {
    this.findByCriteria({ page: 1 });
  }
  
  loadTeams(defaultVal = []) : void{
    this.teams$ = concat(
      of(defaultVal), // default items
      this.teamInput$.pipe(
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
  loadSources(defaultVal = []) : void{
    this.sources$ = concat(
      of(defaultVal), // default items
      this.sourceInput$.pipe(
          distinctUntilChanged(),
          filter((val) => val != null),
          tap(() => this.sourceLoading = true),
          switchMap(term => 
            this.http.get<AppareilCoupeur[]>(`${this.server}/api/appareil_coupeurs?properties[]=id&properties[]=titre&titre=`+term)
            .pipe(
              map(response => response["hydra:member"]),
              catchError(() => of([])), // empty list on error
              tap(() => this.sourceLoading = false)
            )
          )
      )
    );
  }
  loadDestinations(defaultVal = []) : void{
    this.destinations$ = concat(
      of(defaultVal), // default items
      this.destinationInput$.pipe(
          distinctUntilChanged(),
          filter((val) => val != null),
          tap(() => this.destinationLoading = true),
          switchMap(term => 
            this.http.get<AppareilCoupeur[]>(`${this.server}/api/appareil_coupeurs?properties[]=id&properties[]=titre&titre=`+term)
            .pipe(
              map(response => response["hydra:member"]),
              catchError(() => of([])), // empty list on error
              tap(() => this.destinationLoading = false)
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
   * @param id visite id
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
              return "Visite supprimé avec succès";
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
   * Persist : Create
   */
  onCreate(): void {
    let visiteForm = this.visiteForm;
    this.submitted = true;
    if (visiteForm.invalid) return;
    this.submitted = false;
    let toast = this.toast;
    let obj = visiteForm.value;
    // console.log(obj);
    // return;
    // remove empty values
    let visite = Object.keys(obj)
      .filter((k) => obj[k] != "" && obj[k] != null)
      .reduce((a, k) => ({ ...a, [k]: obj[k] }), {}) as Visite;
    visite["date"] && (visite["date"] = formatDate(visite["date"]));

    this.add(visite).subscribe({
      error: () => toast.error("un problème est survenu, veuillez réessayer"),
      complete() {
        visiteForm.reset();
        toast.success("Visite ajouté avec succès");
      },
    });
  }
  /**
   * Persist : update
   */
  onUpdate(id:number): void {
    let visiteForm = this.visiteForm;
    this.submitted = true;
    if (visiteForm.invalid) return;
    this.submitted = false;
    let toast = this.toast;
    let obj = visiteForm.value;

    // remove empty values
    let visite = Object.keys(obj)
      .filter((k) => obj[k] != "" && obj[k] != null)
      .reduce((a, k) => ({ ...a, [k]: obj[k] }), {}) as Visite;
    visite["date"] && (visite["date"] = formatDate(visite["date"]));
    visite.id = id;

      this.update(visite).subscribe({
        error: () => toast.error("un problème est survenu, veuillez réessayer"),
        complete() {
          toast.success("Visite a été mis à jour avec succès");
        },
      });
  }

  /**
   * find By Criteria
   * @param obj query parameters
   */
  findByCriteria(obj): void {
    this.visites$ = of([]); // clear table

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
  get designation() {
    return this.visiteForm.get("designation");
  }
}
