import { NgModule } from '@angular/core';

// import { UIModule } from 'src/app/shared/ui/ui.module';
import { visiteRoutingModule } from './visite-routing.module';

import { NgbAlertModule, NgbDatepickerModule, NgbPopoverModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { visitesListComponent } from './visites-list/visites-list.component';
import { visitePersistComponent } from './visite-persist/visite-persist.component';
import { visiteDetailsComponent } from './visite-details/visite-details.component';
import { relatedAnomaliesModule } from '../related-anomalies/related-anomalies.module';

@NgModule({
  imports: [
    visiteRoutingModule,
    SharedModule,
    NgbDatepickerModule,
    NgbTimepickerModule,
    NgbPopoverModule,
    NgbAlertModule,
    NgApexchartsModule,
    relatedAnomaliesModule
  ],
  declarations: [
    visitesListComponent,
    visitePersistComponent,
    visiteDetailsComponent,
  ],
})
export class visiteModule { }
