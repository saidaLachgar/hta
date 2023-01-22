import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { HotToastService } from "@ngneat/hot-toast";
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from "@ngrx/data";
import { concat, Observable, of, Subject } from "rxjs";
import { catchError, debounceTime, distinctUntilChanged, filter, map, switchMap, tap } from "rxjs/operators";
import { Pagination, Travaux, Departement, AppareilCoupeur } from "src/app/core/models";
import { ConfirmDialogService } from "src/app/shared/components/confirm-dialog/confirm-dialog.service";
import { environment } from "src/environments/environment";
import { appareilService } from "../appareils/appareil.service";
import { departementService } from "../departements/departement.service";

const zeroPad = (num, places = 2) => String(num).padStart(places, '0');
const DateTimeToString = (date, time) => `${date.year}-${zeroPad(date.month)}-${zeroPad(date.day)}T${zeroPad(time.hour)}:${zeroPad(time.minute)}:${zeroPad(time.second)}.110Z`;
const DateToString = (date) => `${date.year}-${zeroPad(date.month)}-${zeroPad(date.day)}`;

@Injectable({
  providedIn: "root",
})
export class travauxService extends EntityCollectionServiceBase<Travaux> {
  readonly pageSize = environment.pageSize;
  travaux$: Observable<Travaux[]>;
  interruption: Travaux | boolean = false;

  appareils$: Observable<AppareilCoupeur[]>;
  appareilLoading = false;
  appareilInput$ = new Subject<string>();
  ps$: Observable<AppareilCoupeur[]>;
  psLoading = false;
  psInput$ = new Subject<string>();


  departements$: Observable<Departement[]>;
  departementLoading = false;
  departementInput$ = new Subject<string>();



  pagination$: Observable<Pagination>;
  submitted: boolean = false;
  page: number = 1;
  lastSearchedParams;
  lastFormData;
  // initialValues;
  public travauxForm: FormGroup;

  constructor(
    private serviceElementsFactory: EntityCollectionServiceElementsFactory,
    private confirmDialogService: ConfirmDialogService,
    public DepartementService: departementService,
    public appareilService: appareilService,
    private toast: HotToastService,
    private router: Router
  ) {
    super("travauxes", serviceElementsFactory);
  }

  /**
   * Get records
   */
  findAll(): void {
    this.findByCriteria({ page: 1 });
  }

  loadAppareils(defaultVal = []): void {
    this.appareils$ = concat(
      of(defaultVal), // default items
      this.appareilInput$.pipe(
        debounceTime(500),
        distinctUntilChanged(),
        filter((val) => val != null),
        tap(() => this.appareilLoading = true),
        switchMap(term => this.appareilService.getWithQuery("properties[]=id&properties[]=titre&properties[departement][]=titre&titre=" + term).pipe(
          catchError(() => of([])), // empty list on error
          tap(() => this.appareilLoading = false),
          map((data) => {
            // append depar name to the inter
            return data.map((obj: AppareilCoupeur) => {
              let temp = Object.assign({}, obj);
              temp.titre = temp.titre + " - " + temp.departement.titre;
              return temp;
            });
          })
        ))
      )
    );
  }
  loadPs(defaultVal = []): void {
    this.ps$ = concat(
      of(defaultVal), // default items
      this.psInput$.pipe(
        debounceTime(500),
        distinctUntilChanged(),
        filter((val) => val != null),
        tap(() => this.psLoading = true),
        switchMap(term => this.appareilService.getWithQuery("properties[]=id&properties[]=titre&properties[departement][]=titre&titre=" + term).pipe(
          catchError(() => of([])), // empty list on error
          tap(() => this.psLoading = false),
          map((data) => {
            // append depar name to the inter
            return data.map((obj: AppareilCoupeur) => {
              let temp = Object.assign({}, obj);
              temp.titre = temp.titre + " - " + temp.departement.titre;
              return temp;
            });
          })
        ))
      )
    );
  }

  loadDepartements(defaultVal = []): void {
    this.departements$ = concat(
      of(defaultVal), // default items
      this.departementInput$.pipe(
        distinctUntilChanged(),
        filter((val) => val != null),
        tap(() => this.departementLoading = true),
        switchMap(term => this.DepartementService.getWithQuery("properties[]=id&properties[]=titre&titre=" + term).pipe(
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
   * @param id travaux id
   * @param target html element
   */
  deleteItem(id: number = null, target: HTMLElement = null) {
    this.confirmDialogService.setConfirmation("Vous êtes sûr de vouloir supprimer?", () => {
      this.delete(id ? id : (this.interruption as Travaux).id)
        .pipe(
          this.toast.observe({
            loading: "Suppression...",
            success: () => {
              target && target.closest("tr").remove();
              // !id && this.travauxForm.reset(this.initialValues);
              // !id && window.location.reload();
              this.router.navigate(['/travaux']);
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
    this.lastSearchedParams = this.travauxForm.value;
    this.findByCriteria({ page: 1, ...this.lastSearchedParams });
  }

  /**
   * Persist : Create / update
   */
  Persist(id = null): void {
    let form = this.travauxForm.value;
    let toast = this.toast;
    let travaux = {
      dateStart: DateTimeToString(form.date, form.dateStart),
      dateEnd : form.dateEnd ? DateTimeToString(form.date, form.dateEnd) : null,
      type : form.type != null ? JSON.parse(form.type) : null,
      causes : form.causes && JSON.parse(form.type) ? JSON.parse(form.causes) : null,
      departement : form.departement ? form.departement : null,
      appareil : form.appareil ? form.appareil : null,
      ps : form.ps.length && form.source !== 0 ? form.ps: []
    } as Travaux;

    // console.log(form);
    console.log(travaux);
    // return;
    // compare last query with the new one to avoid unnecessary requests
    if (JSON.stringify(this.lastFormData) === JSON.stringify(travaux)) return;
    this.lastFormData = travaux;
    if (id) {
      travaux.id = id;
      this.update(travaux).subscribe({
        error: () => toast.error("un problème est survenu, veuillez réessayer"),
      });
    } else {

      this.add(travaux).pipe(tap(data => this.interruption = data))
        .subscribe({
          error: () => toast.error("un problème est survenu, veuillez réessayer"),
        });
    }
  }



  get source() {
    return this.travauxForm.get("source");
  }
  get type() {
    return this.travauxForm.get("type");
  }
  get appareil() {
    return this.travauxForm.get("appareil");
  }
  get departement() {
    return this.travauxForm.get("departement");
  }
  get dateEnd() {
    return this.travauxForm.get("dateEnd");
  }
  get dateStart() {
    return this.travauxForm.get("dateStart");
  }


  /**
   * find By Criteria
   * @param obj query parameters
   */
  findByCriteria(obj): void {
    this.travaux$ = of([]); // clear table

    // format date
    if(Object.keys(obj).length > 1){
      // console.log(obj);
      const updateObj = (key:string) => obj[key] && delete Object.assign(obj, {["dateStart["+key+"]"]: DateToString(obj[key]) })[key];
      updateObj("before");updateObj("after");
    }

    // remove empty values
    let queryParams = Object.keys(obj)
      .filter((k) => obj[k] != "" && obj[k] != null)
      .reduce((a, k) => ({ ...a, [k]: obj[k] }), {});
    this.travaux$ = this.getWithQuery(queryParams);
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
