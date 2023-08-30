import { NgModule } from '@angular/core';
import { StatistiquesRoutingModule } from './statistiques-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { StatistiquesComponent } from './statistiques.component';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  imports: [
    StatistiquesRoutingModule,
    SharedModule,
    NgbDatepickerModule,
    NgApexchartsModule
  ],
  declarations: [
    StatistiquesComponent
  ],
})
export class StatistiquesModule { }
