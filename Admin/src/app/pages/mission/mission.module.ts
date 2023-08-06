import { NgModule } from '@angular/core';

// import { UIModule } from 'src/app/shared/ui/ui.module';
import { missionRoutingModule } from './mission-routing.module';

import { NgbDatepickerModule, NgbPopoverModule, NgbTimepickerModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { missionDetailsComponent } from './mission-details/mission-details.component';
import { missionListComponent } from './mission-list/mission-list.component';
import { missionPersistComponent } from './mission-persist/mission-persist.component';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { relatedAnomaliesModule } from '../related-anomalies/related-anomalies.module';
import { DecimalHourToTimePipe } from 'src/app/core/pipes';
@NgModule({
  imports: [
    missionRoutingModule,
    SharedModule,
    NgbDatepickerModule,
    NgbTimepickerModule,
    NgbPopoverModule,
    NgApexchartsModule,
    NgbTooltipModule,
    NgbAlertModule,
    relatedAnomaliesModule
  ],
  declarations: [
    missionListComponent,
    missionPersistComponent,
    missionDetailsComponent,
    DecimalHourToTimePipe
  ],
})
export class missionModule { }
