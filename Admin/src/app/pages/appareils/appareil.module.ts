import { NgModule } from '@angular/core';

// import { UIModule } from 'src/app/shared/ui/ui.module';
import { appareilRoutingModule } from './appareil-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';
import { appareilCreateComponent } from './appareil-create/appareil-create.component';
import { appareilDetailsComponent } from './appareil-details/appareil-details.component';
import { appareilUpdateComponent } from './appareil-update/appareil-update.component';
import { appareilsListComponent } from './appareils-list/appareils-list.component';

@NgModule({
  imports: [
    appareilRoutingModule,
    SharedModule,
  ],
  declarations: [
    appareilsListComponent,
    appareilCreateComponent,
    appareilUpdateComponent,
    appareilDetailsComponent,
  ],
})
export class appareilModule { }
