import { NgModule } from '@angular/core';

import { VisiteRoutingModule } from './visite-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';
import { VisitesListComponent } from './visites-list/visites-list.component';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    VisiteRoutingModule,
    SharedModule,
    NgbDatepickerModule,
  ],
  declarations: [
    VisitesListComponent,
  ],
})
export class visiteModule { }
