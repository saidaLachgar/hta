import { NgModule } from '@angular/core';

// import { UIModule } from 'src/app/shared/ui/ui.module';
import { nodeRoutingModule } from './node-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';
import { nodeCreateComponent } from './node-create/node-create.component';
import { nodeDetailsComponent } from './node-details/node-details.component';
import { nodeUpdateComponent } from './node-update/node-update.component';
import { nodesListComponent } from './nodes-list/nodes-list.component';

@NgModule({
  imports: [
    nodeRoutingModule,
    SharedModule,
  ],
  declarations: [
    nodesListComponent,
    nodeCreateComponent,
    nodeUpdateComponent,
    nodeDetailsComponent,
  ],
})
export class nodeModule { }
