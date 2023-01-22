import { NgModule } from '@angular/core';

// import { UIModule } from 'src/app/shared/ui/ui.module';
import { visiteRoutingModule } from './visite-routing.module';

import { NgbDatepickerModule, NgbPopoverModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { visitesListComponent } from './visites-list/visites-list.component';
import { visiteCreateComponent } from './visite-create/visite-create.component';
import { visiteUpdateComponent } from './visite-update/visite-update.component';
import { visiteDetailsComponent } from './visite-details/visite-details.component';

@NgModule({
  imports: [
    visiteRoutingModule,
    SharedModule,
    NgbDatepickerModule,
    NgbTimepickerModule ,
    NgbPopoverModule,
    NgApexchartsModule
  ],
  declarations: [
    visitesListComponent,
    visiteCreateComponent,
    visiteUpdateComponent,
    visiteDetailsComponent,
  ],
})
export class visiteModule { }
