import { NgModule } from '@angular/core';

// import { UIModule } from 'src/app/shared/ui/ui.module';
import { visiteRoutingModule } from './visite-routing.module';

import { NgbAlertModule, NgbDatepickerModule, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { visitesListComponent } from './visites-list/visites-list.component';
import { visitePersistComponent } from './visite-persist/visite-persist.component';
import { visiteDetailsComponent } from './visite-details/visite-details.component';
import { UiSwitchModule } from 'ngx-ui-switch';

@NgModule({
  imports: [
    visiteRoutingModule,
    SharedModule,
    NgbDatepickerModule,
    NgbPopoverModule,
    NgbAlertModule,
    NgApexchartsModule,
    UiSwitchModule.forRoot({
      size: 'small',
    }),
  ],
  declarations: [
    visitesListComponent,
    visitePersistComponent,
    visiteDetailsComponent,
  ],
})
export class visiteModule { }
