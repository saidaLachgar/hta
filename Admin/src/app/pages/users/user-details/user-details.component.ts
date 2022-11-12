import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/core/models';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
})
export class UserDetailsComponent implements OnInit {
  user$: Observable<User>;
  breadCrumbItems: Array<{}>;

  constructor(private route: ActivatedRoute, public userService: UserService) { 
    let id = this.route.snapshot.paramMap.get('id');
    this.user$ = this.userService.getByKey(id);
  }

  ngOnInit(): void {
  }

}
