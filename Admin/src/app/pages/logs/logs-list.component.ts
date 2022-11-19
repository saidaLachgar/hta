import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { LogsService } from "./logs.service";
import { NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { User } from "src/app/core/models";
import { UserService } from "../users/user.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-logs-list",
  templateUrl: "./logs-list.component.html",
})
export class LogsComponent {
  breadCrumbItems: Array<{}>;
  users$: Observable<User[]>;
  constructor(public LogsService: LogsService, public UserService: UserService, private fb: FormBuilder, calendar: NgbCalendar) {
    this.LogsService.findAll();
    this.users$ = this.UserService.getWithQuery("properties[]=id&properties[]=fullName");
    LogsService.LogsForm = this.fb.group({
      id: [""],
      message: [""],
      extra: [""],
      before: [""],
      after: [""],
      "user.id": [""],
    });
  }
}
