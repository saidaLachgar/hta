import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { HotToastService } from "@ngneat/hot-toast";
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,

} from "@ngrx/data";
import { Observable, of } from "rxjs";
import { map, tap } from "rxjs/operators";
import { User } from "src/app/core/models";
import { Pagination } from "src/app/store/additional-persistence-result-handler.service";
import { ConfirmDialogService } from "../components/confirm-dialog/confirm-dialog.service";

@Injectable({
  providedIn: "root",
})
export class UserService extends EntityCollectionServiceBase<User> {
  users$: Observable<User[]>;
  pagination$: Observable<Pagination>;
  page$: Observable<number>;
  public searchForm: FormGroup;

  constructor(
    private serviceElementsFactory: EntityCollectionServiceElementsFactory,
    private confirmDialogService: ConfirmDialogService,
    private toast: HotToastService,
  ) {
    super("users", serviceElementsFactory);
  }


  /**
   * Get records
   */
  findAll(): void {
    // this.users$ = this.getAll();
    // this.getPagination();
    this.findByCriteria({page : this.page$ || 1});
  }
  
  /**
   * Get pagination
   */
  getPagination():void{
    this.pagination$ = this.selectors$.entityActions$.pipe(map(action => {
      let pagination = (action as any).payload.pagination;
      pagination && (this.page$ = pagination.page);
      return pagination;
    }));
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
    this.findByCriteria(this.searchForm.value);
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
  onPaginate(page : number){
    this.findByCriteria({page : page, ...this.searchForm.value});
  }

}
