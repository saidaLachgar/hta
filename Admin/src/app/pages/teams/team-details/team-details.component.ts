import { Component, OnInit } from '@angular/core';

import { Team } from 'src/app/core/models';
import { teamService } from '../team.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
})
export class teamDetailsComponent implements OnInit {
  team$: Observable<Team>;
  breadCrumbItems: Array<{}>;

  constructor(private route: ActivatedRoute, public teamService: teamService) { 
    let id = this.route.snapshot.paramMap.get('id');
    this.team$ = this.teamService.getByKey(id);
  }

  ngOnInit(): void {
  }

}
