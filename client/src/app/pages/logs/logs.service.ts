import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from "@ngrx/data";
import { catchError, debounceTime, distinctUntilChanged, filter, map, switchMap, takeUntil, tap } from "rxjs/operators";
import { concat, Observable, of, Subject } from "rxjs";
import { Log, Pagination, User } from "src/app/core/models";
import { environment } from "src/environments/environment";
import { UserService } from "../users/user.service";

const zeroPad = (num, places = 2) => String(num).padStart(places, '0');
const DateToString = (date) => `${date.year}-${zeroPad(date.month)}-${zeroPad(date.day)}`;

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

  users$: Observable<User[]>;
  userLoading = false;
  userInput$ = new Subject<string>();

  public LogsForm: FormGroup;

  constructor(
    public UserService: UserService,
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

  loadUsers(defaultVal = []) : void{
    this.users$ = concat(
      of(defaultVal), // default items
      this.userInput$.pipe(
          debounceTime(500),
          distinctUntilChanged(),
          filter((val) => val != null),
          tap(() => this.userLoading = true),
          switchMap(term => this.UserService.getWithQuery("properties[]=id&properties[]=fullName&fullName="+term).pipe(
              catchError(() => of([])), // empty list on error
              tap(() => this.userLoading = false)
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
      const updateObj = (key:string) => obj[key] && delete Object.assign(obj, {["createdAt["+key+"]"]: DateToString(obj[key]) })[key];
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
