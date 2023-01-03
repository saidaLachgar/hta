import { Component, OnInit } from '@angular/core';

import { Travaux } from 'src/app/core/models';
import { travauxService } from '../travaux.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-travaux-details',
  templateUrl: './travaux-details.component.html',
})
export class travauxDetailsComponent implements OnInit {
  travaux$: Observable<Travaux>;
  breadCrumbItems: Array<{}>;

  constructor(private route: ActivatedRoute, public travauxService: travauxService) { 
    let id = this.route.snapshot.paramMap.get('id');
    this.travaux$ = this.travauxService.getByKey(id);
  }

  ngOnInit(): void {
  }

}
