import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { HotToastService } from "@ngneat/hot-toast";
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from "@ngrx/data";
import { concat, Observable, of, Subject } from "rxjs";
import { catchError, debounceTime, distinctUntilChanged, filter, map, switchMap, tap } from "rxjs/operators";
import { Pagination, Team, Department, User } from "src/app/core/models";
import { ConfirmDialogService } from "src/app/shared/components/confirm-dialog/confirm-dialog.service";
import { environment } from "src/environments/environment";
import { departmentService } from "../departments/department.service";
import { UserService } from "../users/user.service";

@Injectable({
  providedIn: "root",
})
export class teamService extends EntityCollectionServiceBase<Team> {
  readonly pageSize = environment.pageSize;
  teams$: Observable<Team[]>;

  membres$: Observable<User[]>;
  membreLoading = false;
  membreInput$ = new Subject<string>();


  departments$: Observable<Department[]>;
  departmentLoading = false;
  departmentInput$ = new Subject<string>();



  pagination$: Observable<Pagination>;
  submitted: boolean = false;
  page:number = 1;
  lastSearchedParams;
  public teamForm: FormGroup;

  constructor(
    private serviceElementsFactory: EntityCollectionServiceElementsFactory,
    private confirmDialogService: ConfirmDialogService,
    public departmentService: departmentService,
    public UserService: UserService,
    private toast: HotToastService
  ) {
    super("teams", serviceElementsFactory);
  }

  /**
   * Get records
   */
  findAll(): void {
    this.findByCriteria({ page: 1 });
  }
  
  loadMembers(defaultVal = []): void {
    this.membres$ = concat(
      of(defaultVal), // default items
      this.membreInput$.pipe(
        debounceTime(500),
        distinctUntilChanged(),
        filter((val) => val != null),
        tap(() => this.membreLoading = true),
        switchMap(term => this.UserService.getWithQuery("properties[]=id&properties[]=fullName&fullName="+term).pipe(
          catchError(() => of([])), // empty list on error
          tap(() => this.membreLoading = false)
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
   * @param id team id
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
              return "L'équipe supprimé avec succès";
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
    this.lastSearchedParams = this.teamForm.value;
    this.findByCriteria({ page: 1, ...this.lastSearchedParams });
  }

  /**
   * Persist : Create
   */
  onCreate(): void {
    let teamForm = this.teamForm;
    this.submitted = true;
    if (teamForm.invalid) return;
    this.submitted = false;
    let toast = this.toast;
    let team = teamForm.value as Team;
    this.add(team).subscribe({
      error: () => toast.error("un problème est survenu, veuillez réessayer"),
      complete() {
        teamForm.reset();
        toast.success("L'équipe ajouté avec succès");
      },
    });
  }
  /**
   * Persist : update
   */
  onUpdate(id:number): void {
    let teamForm = this.teamForm;
    this.submitted = true;
    if (teamForm.invalid) return;
    this.submitted = false;

    let toast = this.toast;
    let team:Team = {...teamForm.value};
    team.id = id;
      this.update(team).subscribe({
        error: () => toast.error("un problème est survenu, veuillez réessayer"),
        complete() {
          toast.success("L'équipe a été mis à jour avec succès");
        },
      });
  }

  get titre() {
    return this.teamForm.get("titre");
  }
  get membres() {
    return this.teamForm.get("membres");
  }
  get departments() {
    return this.teamForm.get("departments");
  }

  /**
   * find By Criteria
   * @param obj query parameters
   */
  findByCriteria(obj): void {
    this.teams$ = of([]); // clear table
    // remove empty values
    let queryParams = Object.keys(obj)
      .filter((k) => obj[k] != "" && obj[k] != null)
      .reduce((a, k) => ({ ...a, [k]: obj[k] }), {});
    this.teams$ = this.getWithQuery(queryParams);
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
