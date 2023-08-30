import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Poste } from 'src/app/core/models';
import { posteService } from '../poste.service';

@Component({
  selector: 'app-poste-details',
  templateUrl: './poste-details.component.html',
})
export class posteDetailsComponent {
  poste: Poste;
  breadCrumbItems: Array<{}>;

  constructor(private route: ActivatedRoute, public service: posteService) { 
    let id = this.route.snapshot.paramMap.get('id');
    service.getByKey(id).subscribe(obj => this.poste = obj);

  }

}
