import { NgModule } from '@angular/core';

// import { UIModule } from 'src/app/shared/ui/ui.module';
import { travauxRoutingModule } from './travaux-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';
import { travauxCreateComponent } from './travaux-create/travaux-create.component';
import { travauxDetailsComponent } from './travaux-details/travaux-details.component';
import { travauxUpdateComponent } from './travaux-update/travaux-update.component';
import { travauxListComponent } from './travaux-list/travaux-list.component';
import { NgbDatepickerModule, NgbTimepickerModule, NgbPopoverModule  } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  imports: [
    travauxRoutingModule,
    SharedModule,
    NgbDatepickerModule,
    NgbTimepickerModule ,
    NgbPopoverModule

  ],
  declarations: [
    travauxListComponent,
    travauxCreateComponent,
    travauxUpdateComponent,
    travauxDetailsComponent,
  ],
})
export class travauxModule { }
