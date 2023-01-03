import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { concat, Observable, of, Subject } from "rxjs";
import { catchError, distinctUntilChanged, filter, switchMap, tap } from "rxjs/operators";
import { User } from "src/app/core/models";
import { UserService } from "../users/user.service";
import { LogsService } from "./logs.service";

@Component({
  selector: "app-logs-list",
  templateUrl: "./logs-list.component.html",
})
export class LogsComponent {
  breadCrumbItems: Array<{}>;
  users$: Observable<User[]>;
  userLoading = false;
  userInput$ = new Subject<string>();
  constructor(public LogsService: LogsService, public UserService: UserService, private fb: FormBuilder, calendar: NgbCalendar) {
    this.LogsService.findAll();
    this.loadUsers();
    LogsService.LogsForm = this.fb.group({
      id: [""],
      message: [""],
      extra: [""],
      before: [""],
      after: [""],
      "user.id": [""],
    });
  }

  loadUsers(defaultVal = []) : void{
    this.users$ = concat(
      of(defaultVal), // default items
      this.userInput$.pipe(
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
}
