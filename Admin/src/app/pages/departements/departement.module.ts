import { NgModule } from '@angular/core';

// import { UIModule } from 'src/app/shared/ui/ui.module';
import { departementRoutingModule } from './departement-routing.module';
import { LightboxModule } from 'ngx-lightbox';

import { SharedModule } from 'src/app/shared/shared.module';
import { departementCreateComponent } from './departement-create/departement-create.component';
import { departementDetailsComponent } from './departement-details/departement-details.component';
import { departementUpdateComponent } from './departement-update/departement-update.component';
import { departementsListComponent } from './departements-list/departements-list.component';

@NgModule({
  imports: [
    departementRoutingModule,
    SharedModule,
    LightboxModule
  ],
  declarations: [
    departementsListComponent,
    departementCreateComponent,
    departementUpdateComponent,
    departementDetailsComponent,
  ],
})
export class departementModule { }
