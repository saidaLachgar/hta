import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Observable, Subject } from "rxjs";
import { User } from "src/app/core/models";
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
  constructor(public LogsService: LogsService, private fb: FormBuilder) {
    this.LogsService.findAll();
    LogsService.loadUsers();
    LogsService.LogsForm = this.fb.group({
      id: [""],
      message: [""],
      extra: [""],
      before: [""],
      after: [""],
      "user.id[]": [""],
    });
  }

}
