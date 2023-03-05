import { NgModule } from '@angular/core';

// import { UIModule } from 'src/app/shared/ui/ui.module';
import { missionRoutingModule } from './mission-routing.module';

import { NgbDatepickerModule, NgbPopoverModule, NgbTimepickerModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { missionDetailsComponent } from './mission-details/mission-details.component';
import { missionListComponent } from './mission-list/mission-list.component';
import { missionPersistComponent } from './mission-persist/mission-persist.component';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { UiSwitchModule } from 'ngx-ui-switch';
import { NgApexchartsModule } from 'ng-apexcharts';
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
    UiSwitchModule.forRoot({
      size: 'small',
    }),
  ],
  declarations: [
    missionListComponent,
    missionPersistComponent,
    missionDetailsComponent,
  ],
})
export class missionModule { }
