import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { HotToastService } from "@ngneat/hot-toast";
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from "@ngrx/data";
import { concat, Observable, of, Subject } from "rxjs";
import { catchError, debounceTime, distinctUntilChanged, filter, map, switchMap, tap } from "rxjs/operators";
import { Goal, GoalGroup, Pagination } from "src/app/core/models";
import { ConfirmDialogService } from "src/app/shared/components/confirm-dialog/confirm-dialog.service";
import { environment } from "src/environments/environment";
import { departmentService } from "../departments/department.service";
import { goalGroupService } from "../goal-groups/goal-group.service";

@Injectable({
  providedIn: "root",
})
export class goalService extends EntityCollectionServiceBase<Goal> {
  readonly pageSize = environment.pageSize;
  goals$: Observable<Goal[]>;

  goalGroups$: Observable<GoalGroup[]>;
  goalGroupLoading = false;
  goalGroupInput$ = new Subject<string>();

  pagination$: Observable<Pagination>;
  submitted: boolean = false;
  page:number = 1;
  lastSearchedParams;
  public goalForm: FormGroup;

  constructor(
    private serviceElementsFactory: EntityCollectionServiceElementsFactory,
    private confirmDialogService: ConfirmDialogService,
    public departmentService: departmentService,
    public goalGroupService: goalGroupService,
    private toast: HotToastService
  ) {
    super("goals", serviceElementsFactory);
  }

  /**
   * Get records
   */
  findAll(): void {
    this.findByCriteria({ page: 1 });
  }
  
  loadGoalGroups(defaultVal = []): void {
    this.goalGroups$ = concat(
      of(defaultVal), // default items
      this.goalGroupInput$.pipe(
        debounceTime(500),
        distinctUntilChanged(),
        filter((val) => val != null),
        tap(() => this.goalGroupLoading = true),
        switchMap(term => this.goalGroupService.getWithQuery("name="+term).pipe(
          catchError(() => of([])), // empty list on error
          tap(() => this.goalGroupLoading = false)
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
   * @param id goal id
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
    this.lastSearchedParams = this.goalForm.value;
    this.findByCriteria({ page: 1, ...this.lastSearchedParams });
  }

  /**
   * Persist : Create
   */
  onCreate(): void {
    let goalForm = this.goalForm;
    this.submitted = true;
    if (goalForm.invalid) return;
    this.submitted = false;
    let toast = this.toast;
    let goal = goalForm.value as Goal;
    console.log(goal);
    
    this.add(goal).subscribe({
      error: () => toast.error("un problème est survenu, veuillez réessayer"),
      complete() {
        goalForm.reset();
        toast.success("L'équipe ajouté avec succès");
      },
    });
  }
  /**
   * Persist : update
   */
  onUpdate(id:number): void {
    let goalForm = this.goalForm;
    this.submitted = true;
    if (goalForm.invalid) return;
    this.submitted = false;

    let toast = this.toast;
    let goal:Goal = {...goalForm.value};
    goal.id = id;
      this.update(goal).subscribe({
        error: () => toast.error("un problème est survenu, veuillez réessayer"),
        complete() {
          toast.success("L'équipe a été mis à jour avec succès");
        },
      });
  }

  get name() {
    return this.goalForm.get("name");
  }
  get targetAchievement() {
    return this.goalForm.get("targetAchievement");
  }
  get goalGroup() {
    return this.goalForm.get("goalGroup");
  }

  /**
   * find By Criteria
   * @param obj query parameters
   */
  findByCriteria(obj): void {
    this.goals$ = of([]); // clear table
    // remove empty values
    let queryParams = Object.keys(obj)
      .filter((k) => obj[k] != "" && obj[k] != null)
      .reduce((a, k) => ({ ...a, [k]: obj[k] }), {});
    this.goals$ = this.getWithQuery(queryParams);
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
