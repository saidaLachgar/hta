import { NgModule } from '@angular/core';

// import { UIModule } from 'src/app/shared/ui/ui.module';
import { communeRoutingModule } from './commune-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';
import { communesListComponent } from './communes-list/communes-list.component';
import { communeDetailsComponent } from './commune-details/commune-details.component';

@NgModule({
  imports: [
    communeRoutingModule,
    SharedModule,
  ],
  declarations: [
    communesListComponent,
    communeDetailsComponent,
  ],
})
export class communeModule { }
