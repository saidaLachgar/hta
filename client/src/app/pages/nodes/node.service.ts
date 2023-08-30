import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { HotToastService } from "@ngneat/hot-toast";
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from "@ngrx/data";
import { concat, Observable, of, Subject } from "rxjs";
import { catchError, debounceTime, distinctUntilChanged, filter, map, switchMap, tap } from "rxjs/operators";
import { Pagination, Node, Department } from "src/app/core/models";
import { ConfirmDialogService } from "src/app/shared/components/confirm-dialog/confirm-dialog.service";
import { environment } from "src/environments/environment";
import { departmentService } from "../departments/department.service";

@Injectable({
  providedIn: "root",
})
export class nodeService extends EntityCollectionServiceBase<Node> {
  readonly pageSize = environment.pageSize;
  nodes$: Observable<Node[]>;

  departments$: Observable<Department[]>;
  departmentLoading = false;
  departmentInput$ = new Subject<string>();

  pagination$: Observable<Pagination>;
  submitted: boolean = false;
  page: number = 1;
  lastSearchedParams;
  public nodeForm: FormGroup;

  constructor(
    private serviceElementsFactory: EntityCollectionServiceElementsFactory,
    private confirmDialogService: ConfirmDialogService,
    public departmentService: departmentService,
    private toast: HotToastService
  ) {
    super("nodes", serviceElementsFactory);
  }

  /**
   * Get records
   */
  findAll(): void {
    this.findByCriteria({ page: 1 });
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
   * @param id node id
   * @param target html element
   */
  deleteItem(id: number, target: HTMLElement) {
    this.confirmDialogService.setConfirmation("Vous êtes sûr de vouloir supprimer cet node ?", () => {
      this.delete(id)
        .pipe(
          this.toast.observe({
            loading: "Suppression...",
            success: () => {
              target.closest("tr").remove();
              return "L'node supprimé avec succès";
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
    this.lastSearchedParams = this.nodeForm.value;
    this.findByCriteria({ page: 1, ...this.lastSearchedParams });
  }

  /**
   * Persist : Create
   */
  onCreate(): void {
    let nodeForm = this.nodeForm;
    this.submitted = true;
    if (nodeForm.invalid) return;
    this.submitted = false;
    let toast = this.toast;
    let node = nodeForm.value as Node;

    this.add(node).subscribe({
      error: () => toast.error("un problème est survenu, veuillez réessayer"),
      complete() {
        nodeForm.reset();
        toast.success("L'node ajouté avec succès");
      },
    });
  }
  /**
   * Persist : update
   */
  onUpdate(id: number): void {
    let nodeForm = this.nodeForm;
    this.submitted = true;
    if (nodeForm.invalid) return;
    this.submitted = false;

    let toast = this.toast;
    let node: Node = { ...nodeForm.value };
    node.id = id;
    this.update(node).subscribe({
      error: () => toast.error("un problème est survenu, veuillez réessayer"),
      complete() {
        toast.success("L'node a été mis à jour avec succès");
      },
    });
  }

  get titre() {
    return this.nodeForm.get("titre");
  }
  get membres() {
    return this.nodeForm.get("membres");
  }
  get departments() {
    return this.nodeForm.get("departments");
  }

  /**
   * find By Criteria
   * @param obj query parameters
   */
  findByCriteria(obj): void {
    this.nodes$ = of([]); // clear table
    // remove empty values
    let queryParams = Object.keys(obj)
      .filter((k) => obj[k] != "" && obj[k] != null)
      .reduce((a, k) => ({ ...a, [k]: obj[k] }), {});
    this.nodes$ = this.getWithQuery(queryParams);
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
