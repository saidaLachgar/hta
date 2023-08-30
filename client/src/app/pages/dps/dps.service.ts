import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { HotToastService } from "@ngneat/hot-toast";
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from "@ngrx/data";
import { Observable, Subject, concat, of } from "rxjs";
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  switchMap,
  tap,
} from "rxjs/operators";
import { Dps, Pagination, Team } from "src/app/core/models";
import { ConfirmDialogService } from "src/app/shared/components/confirm-dialog/confirm-dialog.service";
import { environment } from "src/environments/environment";
import { mediasService } from "../medias/media.service";

@Injectable({
  providedIn: "root",
})
export class dpsService extends EntityCollectionServiceBase<Dps> {
  readonly pageSize = environment.pageSize;
  public dpsForm: FormGroup;
  private server = environment.serverURL;

  dps$: Observable<Dps[]>;

  teams$: Observable<Team[]>;
  teamLoading = false;
  teamInput$ = new Subject<string>();

  pagination$: Observable<Pagination>;
  submitted: boolean = false;
  isLoading: boolean = false;
  page: number = 1;
  lastSearchedParams;

  constructor(
    private serviceElementsFactory: EntityCollectionServiceElementsFactory,
    private confirmDialogService: ConfirmDialogService,
    public MediasService: mediasService,
    private toast: HotToastService,
    private http: HttpClient
  ) {
    super("dps", serviceElementsFactory);
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
        tap(() => (this.teamLoading = true)),
        switchMap((term) =>
          this.http
            .get<Team[]>(
              `${this.server}/api/teams?properties[]=id&properties[]=titre&titre=` +
                term
            )
            .pipe(
              map((response) => response["hydra:member"]),
              catchError(() => of([])), // empty list on error
              tap(() => (this.teamLoading = false))
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
    this.pagination$ = this.selectors$.entityActions$.pipe(
      map((action) => (action as any).payload.pagination)
    );
  }

  /**
   * Delete item
   * @param id dps id
   * @param target html element
   */
  deleteItem(id: number, target: HTMLElement) {
    this.confirmDialogService.setConfirmation(
      "Vous êtes sûr de vouloir supprimer?",
      () => {
        this.delete(id)
          .pipe(
            this.toast.observe({
              loading: "Suppression...",
              success: () => {
                target.closest("tr").remove();
                return "Dps supprimé avec succès";
              },
              error: "un problème est survenu, veuillez réessayer",
            })
          )
          .subscribe();
      }
    );
  }

  /**
   * Search
   */
  onSearch(): void {
    this.page = 1;
    this.lastSearchedParams = this.dpsForm.value;
    this.findByCriteria({ page: 1, ...this.lastSearchedParams });
  }

  /**
   * Persist : Create
   */
  onCreate(): void {
    let form = this.dpsForm;
    this.submitted = true;
    if (form.invalid) return;
    this.submitted = false;
    this.isLoading = true;
    let toast = this.toast;
    let _this = this;
    let obj = Object.entries(form.value as Dps);
    // remove empty values
    const dps = Object.fromEntries(obj.filter(([key, value]) => value !== ""));

    // subscribe
    this.add(dps).subscribe({
      error: () => {
        _this.isLoading = false;
        toast.error("un problème est survenu, veuillez réessayer");
      },
      complete() {
        form.reset();
        _this.isLoading = false;
        toast.success("Dps ajouté avec succès");
      },
    });
  }
  /**
   * Persist : update
   */
  onUpdate(id: number): void {
    let form = this.dpsForm;
    this.submitted = true;
    if (form.invalid) return;
    this.submitted = false;
    this.isLoading = true;
    let _this = this;
    let toast = this.toast;
    let obj = Object.entries(form.value as Dps);
    // remove empty values
    const dps = Object.fromEntries(obj.filter(([key, value]) => value !== ""));
    dps.id = id;

    // subscribe
    this.update(dps).subscribe({
      error: () => {
        _this.isLoading = false;
        toast.error("un problème est survenu, veuillez réessayer");
      },
      complete() {
        _this.isLoading = false;
        toast.success("Dps a été mis à jour avec succès");
      },
    });
  }

  get titre() {
    return this.dpsForm.get("titre");
  }

  get team() {
    return this.dpsForm.get("team");
  }

  /**
   * find By Criteria
   * @param obj query parameters
   */
  findByCriteria(obj): void {
    this.dps$ = of([]); // clear table
    // remove empty values
    let queryParams = Object.keys(obj)
      .filter((k) => obj[k] != "" && obj[k] != null)
      .reduce((a, k) => ({ ...a, [k]: obj[k] }), {});
    this.dps$ = this.getWithQuery(queryParams);
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
