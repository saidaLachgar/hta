import { NgModule } from '@angular/core';

// import { UIModule } from 'src/app/shared/ui/ui.module';
import { missionRoutingModule } from './mission-routing.module';

import { NgbAccordionModule, NgbAlertModule, NgbDatepickerModule, NgbPopoverModule, NgbTimepickerModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from 'src/app/shared/shared.module';
import { relatedAnomaliesModule } from '../related-anomalies/related-anomalies.module';
import { missionDetailsComponent } from './mission-details/mission-details.component';
import { missionListComponent } from './mission-list/mission-list.component';
import { missionPersistComponent } from './mission-persist/mission-persist.component';
import { missionRowComponent } from './mission-list/mission-row.component';
import { accordionPanelComponent } from './mission-details/accordion-panel.component';
import { accordionHeaderComponent } from './mission-details/accordion-header.component';
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
    NgbAccordionModule,
    relatedAnomaliesModule
  ],
  declarations: [
    missionListComponent,
    missionPersistComponent,
    missionDetailsComponent,
    missionDetailsComponent,
    missionRowComponent,
    accordionPanelComponent,
    accordionHeaderComponent,
  ],
})
export class missionModule { }
