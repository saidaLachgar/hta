import { NgModule } from '@angular/core';

// import { UIModule } from 'src/app/shared/ui/ui.module';
import { travauxRoutingModule } from './travaux-routing.module';

import { NgbDatepickerModule, NgbPopoverModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { travauxDetailsComponent } from './travaux-details/travaux-details.component';
import { travauxListComponent } from './travaux-list/travaux-list.component';
import { travauxPersistComponent } from './travaux-persist/travaux-persist.component';
import { NgApexchartsModule } from 'ng-apexcharts';
@NgModule({
  imports: [
    travauxRoutingModule,
    SharedModule,
    NgbDatepickerModule,
    NgbTimepickerModule ,
    NgbPopoverModule,
    NgApexchartsModule
  ],
  declarations: [
    travauxListComponent,
    travauxPersistComponent,
    travauxDetailsComponent,
  ],
})
export class travauxModule { }
