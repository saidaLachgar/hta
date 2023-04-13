import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Goal } from 'src/app/core/models';
import { AuthenticationService } from 'src/app/core/services/auth.service';
import { goalService } from '../goal.service';

@Component({
  selector: 'app-goal-details',
  templateUrl: './goal-details.component.html',
})

export class goalDetailsComponent {
  goal: Goal;
  breadCrumbItems: Array<{}>;

  constructor(private route: ActivatedRoute, public service: goalService, public authService: AuthenticationService) { 
    let id = this.route.snapshot.paramMap.get('id');
    service.getByKey(id).subscribe(obj => this.goal = obj);
  }

}