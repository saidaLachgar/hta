import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { HotToastService } from "@ngneat/hot-toast";
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from "@ngrx/data";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { Pagination, User } from "src/app/core/models";
import { ConfirmDialogService } from "src/app/shared/components/confirm-dialog/confirm-dialog.service";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class UserService extends EntityCollectionServiceBase<User> {
  readonly pageSize = environment.pageSize;
  users$: Observable<User[]>;
  pagination$: Observable<Pagination>;
  page$: Observable<number>;
  submitted: boolean = false;
  public userForm: FormGroup;

  constructor(
    private serviceElementsFactory: EntityCollectionServiceElementsFactory,
    private confirmDialogService: ConfirmDialogService,
    private toast: HotToastService
  ) {
    super("users", serviceElementsFactory);
  }

  /**
   * Get records
   */
  findAll(): void {
    // this.users$ = this.getAll();
    // this.getPagination();
    this.findByCriteria({ page: this.page$ || 1 });
  }

  /**
   * Get pagination
   */
  getPagination(): void {
    this.pagination$ = this.selectors$.entityActions$.pipe(
      map((action) => {
        let pagination = (action as any).payload.pagination;
        pagination && (this.page$ = pagination.page);
        return pagination;
      })
    );
  }

  /**
   * Delete item
   * @param id user id
   * @param target html element
   */
  deleteItem(id: number, target: HTMLElement) {
    this.confirmDialogService.setConfirmation("Are you sure to delete?", () => {
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
    this.findByCriteria(this.userForm.value);
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
    let user = userForm.value as User;
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
  onUpdate(id:number): void {
    let userForm = this.userForm;
    this.submitted = true;
    if (userForm.invalid) return;
    this.submitted = false;

    let toast = this.toast;
    let user:User = {...userForm.value};
    user.id = id;
    user.roles = [user.roles.toString()];
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
    this.findByCriteria({ page: page, ...this.userForm.value });
  }
}
