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
import { Pagination, Team, User } from "src/app/core/models";
import { ConfirmDialogService } from "src/app/shared/components/confirm-dialog/confirm-dialog.service";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class UserService extends EntityCollectionServiceBase<User> {
  readonly pageSize = environment.pageSize;
  private server = environment.serverURL;
  teams$: Observable<Team[]>;
  teamLoading = false;
  teamInput$ = new Subject<string>();
  users$: Observable<User[]>;
  pagination$: Observable<Pagination>;
  submitted: boolean = false;
  page: number = 1;
  lastSearchedParams;
  public userForm: FormGroup;

  constructor(
    private serviceElementsFactory: EntityCollectionServiceElementsFactory,
    private confirmDialogService: ConfirmDialogService,
    private http: HttpClient,
    private toast: HotToastService
  ) {
    super("users", serviceElementsFactory);
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
   * @param id user id
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
              return "Utilisateur supprimé avec succès";
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
    this.lastSearchedParams = this.userForm.value;
    this.findByCriteria({ page: 1, ...this.lastSearchedParams });
  }

  /**
   * Persist : Create
   */
  onCreate(): void {
    let userForm = this.userForm;
    this.submitted = true;
    if (userForm.invalid) return;
    this.submitted = false;
    let toast = this.toast;
    let obj = Object.entries(userForm.value as User);
    // remove empty values
    const user = Object.fromEntries(obj.filter(([key, value]) => value !== ""));
    user.roles = [user.roles.toString()];
    this.add(user).subscribe({
      error: () => toast.error("un problème est survenu, veuillez réessayer"),
      complete() {
        userForm.reset();
        toast.success("Utilisateur ajouté avec succès");
      },
    });
  }
  /**
   * Persist : update
   */
  onUpdate(id: number, ignoreEmpty = false): void {
    let userForm = this.userForm;
    this.submitted = true;
    if (userForm.invalid) return;
    this.submitted = false;

    let toast = this.toast;
    let user: User = { ...userForm.value };
    user.id = id;

    if (ignoreEmpty) {
      user = Object.entries(user).reduce((acc, [key, value]) => {
        if (value !== "" && value !== null) {
          acc[key] = value;
        }
        return acc;
      }, {});
    } else {
      user.roles = [user.roles.toString()];
    }

    this.update(user).subscribe({
      error: () => toast.error("un problème est survenu, veuillez réessayer"),
      complete() {
        toast.success("L'utilisateur a été mis à jour avec succès");
      },
    });
  }
  get fullName() {
    return this.userForm.get("fullName");
  }
  get username() {
    return this.userForm.get("username");
  }
  get password() {
    return this.userForm.get("password");
  }
  get roles() {
    return this.userForm.get("roles");
  }
  get team() {
    return this.userForm.get("team");
  }

  /**
   * find By Criteria
   * @param obj query parameters
   */
  findByCriteria(obj): void {
    this.users$ = of([]); // clear table
    // remove empty values
    let queryParams = Object.keys(obj)
      .filter((k) => obj[k] != "" && obj[k] != null)
      .reduce((a, k) => ({ ...a, [k]: obj[k] }), {});
    this.users$ = this.getWithQuery(queryParams);
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
