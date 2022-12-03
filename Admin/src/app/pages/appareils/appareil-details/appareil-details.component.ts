import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { AppareilCoupeur } from 'src/app/core/models';
import { AuthenticationService } from 'src/app/core/services/auth.service';
import { appareilService } from '../appareil.service';

@Component({
  selector: 'app-appareil-details',
  templateUrl: './appareil-details.component.html',
})
export class appareilDetailsComponent {
  appareil: AppareilCoupeur;
  breadCrumbItems: Array<{}>;

  constructor(private route: ActivatedRoute, public service: appareilService, public authService: AuthenticationService) { 
    let id = this.route.snapshot.paramMap.get('id');
    service.getByKey(id).subscribe(obj => this.appareil = obj);
  }

}
