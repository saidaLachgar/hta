import { NgModule } from '@angular/core';

// import { UIModule } from 'src/app/shared/ui/ui.module';
import { dpsRoutingModule } from './dps-routing.module';
import { LightboxModule } from 'ngx-lightbox';

import { SharedModule } from 'src/app/shared/shared.module';
import { dpsCreateComponent } from './dps-create/dps-create.component';
import { dpsDetailsComponent } from './dps-details/dps-details.component';
import { dpsUpdateComponent } from './dps-update/dps-update.component';
import { dpsListComponent } from './dps-list/dps-list.component';

@NgModule({
  imports: [
    dpsRoutingModule,
    SharedModule,
    LightboxModule
  ],
  declarations: [
    dpsListComponent,
    dpsCreateComponent,
    dpsUpdateComponent,
    dpsDetailsComponent,
  ],
})
export class dpsModule { }
