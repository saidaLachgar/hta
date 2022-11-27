import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/core/models';
import { AuthenticationService } from 'src/app/core/services/auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
})
export class UserDetailsComponent {
  user:User;
  breadCrumbItems: Array<{}>;

  constructor(
    public authService: AuthenticationService,
    private route: ActivatedRoute,
    public userService: UserService
    ) { 
    let id = this.route.snapshot.paramMap.get('id');
    userService.getByKey(id).subscribe(obj => this.user = obj);
  }
}
