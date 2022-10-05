import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
})
export class UsersListComponent implements OnInit {

  users$: Observable<User[]>;
  constructor(private userService: UserService) { 
    this.users$ = new Observable;
  }

  ngOnInit(): void {
    this.users$ = this.userService.getAll();
  }

}
