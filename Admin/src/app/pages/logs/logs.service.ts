import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from "@ngrx/data";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { Log, Pagination } from "src/app/core/models";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class LogsService extends EntityCollectionServiceBase<Log> {
  readonly pageSize = environment.pageSize;
  Logs$: Observable<Log[]>;
  pagination$: Observable<Pagination>;
  page$: Observable<number>;
  submitted: boolean = false;
  public LogsForm: FormGroup;

  constructor(
    private serviceElementsFactory: EntityCollectionServiceElementsFactory,
  ) {
    super("logs", serviceElementsFactory);
  }

  /**
   * Get records
   */
  findAll(): void {
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
   * Search
   */
  onSearch(): void {
    this.findByCriteria(this.LogsForm.value);
  }

  get id() {
    return this.LogsForm.get("id");
  }
  get message() {
    return this.LogsForm.get("message");
  }
  get levelName() {
    return this.LogsForm.get("levelName");
  }
  get extra() {
    return this.LogsForm.get("extra");
  }
  get createdAt() {
    return this.LogsForm.get("createdAt");
  }
  get user() {
    return this.LogsForm.get("user");
  }

  /**
   * find By Criteria
   * @param obj query parameters
   */
  findByCriteria(obj): void {
    this.Logs$ = of([]); // clear table
    // remove empty values
    let queryParams = Object.keys(obj)
      .filter((k) => obj[k] != "" && obj[k] != null)
      .reduce((a, k) => ({ ...a, [k]: obj[k] }), {});
    this.Logs$ = this.getWithQuery(queryParams);
    this.getPagination();
  }

  /**
   * on Paginate
   * @param page page to search for
   */
  onPaginate(page: number) {
    this.findByCriteria({ page: page, ...this.LogsForm.value });
  }
}
