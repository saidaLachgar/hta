import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Edge } from 'src/app/core/models';
import { AuthenticationService } from 'src/app/core/services/auth.service';
import { edgeService } from '../edge.service';

@Component({
  selector: 'app-edge-details',
  templateUrl: './edge-details.component.html',
})
export class edgeDetailsComponent {
  edge: Edge;
  breadCrumbItems: Array<{}>;

  constructor(private route: ActivatedRoute, public service: edgeService, public authService: AuthenticationService) { 
    let id = this.route.snapshot.paramMap.get('id');
    service.getByKey(id).subscribe(obj => this.edge = obj);
  }

}
