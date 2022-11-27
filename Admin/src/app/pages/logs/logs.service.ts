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
  page:number = 1;
  Logs$: Observable<Log[]>;
  pagination$: Observable<Pagination>;
  submitted: boolean = false;
  lastSearchedParams;
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
    // console.log("findAll")
    this.findByCriteria({ page: 1 });
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
   * Search
   */
  onSearch(): void {
    // console.log("onSearch")
    this.page = 1;
    this.lastSearchedParams = this.LogsForm.value;
    this.findByCriteria({ page: 1, ...this.lastSearchedParams });
  }

  /**
   * find By Criteria
   * @param obj query parameters
   */
  findByCriteria(obj): void {
    this.Logs$ = of([]); // clear table
    // format date
    if(Object.keys(obj).length > 1){
      // console.log(obj);
      const formatDate = (date) => date !== "" ? date.year+"-"+date.month+"-"+("0" + date.day).slice(-2) : "";
      const updateObj = (key:string) => obj[key] && delete Object.assign(obj, {["createdAt["+key+"]"]: formatDate(obj[key]) })[key];
      updateObj("before");updateObj("after");
    }

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
  onPaginate(page: number):void {
    // console.log("onPaginate", page);
    this.findByCriteria({ page: page, ...this.lastSearchedParams });
  }
}
