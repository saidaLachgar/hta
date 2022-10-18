import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
})
export class UsersListComponent implements OnInit {
  // breadcrumb items
  breadCrumbItems: Array<{}>;
  public hideExport = true;

  constructor(
    public userService: UserService,
    private fb: FormBuilder,
  ) {
    userService.searchForm = this.fb.group({
      fullName: [''],
      username: [''],
      roles: [''],
    });
  }

  ngOnInit(): void {
    this.userService.findAll();
  }
}
