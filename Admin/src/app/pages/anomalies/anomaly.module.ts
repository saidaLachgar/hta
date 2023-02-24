import { NgModule } from '@angular/core';

import { anomalyRoutingModule } from './anomaly-routing.module';

import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { UiSwitchModule } from 'ngx-ui-switch';
import { SharedModule } from 'src/app/shared/shared.module';
import { anomaliesListComponent } from './anomalies-list/anomalies-list.component';
import { anomalyCreateComponent } from './anomaly-create/anomaly-create.component';
import { anomalyDetailsComponent } from './anomaly-details/anomaly-details.component';
import { anomalyUpdateComponent } from './anomaly-update/anomaly-update.component';

@NgModule({
  imports: [
    anomalyRoutingModule,
    SharedModule,
    UiSwitchModule.forRoot({
      size: 'small',
    }),
    NgbDatepickerModule,
    NgApexchartsModule
  ],
  declarations: [
    anomaliesListComponent,
    anomalyCreateComponent,
    anomalyUpdateComponent,
    anomalyDetailsComponent,
  ],
})
export class anomalyModule { }
