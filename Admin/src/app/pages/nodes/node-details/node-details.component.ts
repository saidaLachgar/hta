import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Node } from 'src/app/core/models';
import { AuthenticationService } from 'src/app/core/services/auth.service';
import { nodeService } from '../node.service';

@Component({
  selector: 'app-node-details',
  templateUrl: './node-details.component.html',
})
export class nodeDetailsComponent {
  node: Node;
  breadCrumbItems: Array<{}>;

  constructor(private route: ActivatedRoute, public service: nodeService, public authService: AuthenticationService) { 
    let id = this.route.snapshot.paramMap.get('id');
    service.getByKey(id).subscribe(obj => this.node = obj);
  }

}
