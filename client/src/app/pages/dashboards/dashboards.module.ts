import { NgModule } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardsRoutingModule } from './dashboards-routing.module';
import { DefaultComponent } from './default/default.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    DashboardsRoutingModule,
    NgbTooltipModule,
    SharedModule,
    NgApexchartsModule,
  ],
  declarations: [
    DefaultComponent,
  ],
})
export class DashboardsModule { }
