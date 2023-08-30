import { NgModule } from '@angular/core';

// import { UIModule } from 'src/app/shared/ui/ui.module';
import { edgeRoutingModule } from './edge-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';
import { edgeCreateComponent } from './edge-create/edge-create.component';
import { edgeDetailsComponent } from './edge-details/edge-details.component';
import { edgeUpdateComponent } from './edge-update/edge-update.component';
import { edgesListComponent } from './edges-list/edges-list.component';

@NgModule({
  imports: [
    edgeRoutingModule,
    SharedModule,
  ],
  declarations: [
    edgesListComponent,
    edgeCreateComponent,
    edgeUpdateComponent,
    edgeDetailsComponent,
  ],
})
export class edgeModule { }
