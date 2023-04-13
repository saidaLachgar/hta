import { NgModule } from '@angular/core';

// import { UIModule } from 'src/app/shared/ui/ui.module';
import { goalGroupRoutingModule } from './goal-group-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';
import { goalGroupListComponent } from './goal-groups-list/goal-groups-list.component';
import { goalGroupDetailsComponent } from './goal-group-details/goal-group-details.component';

@NgModule({
  imports: [
    goalGroupRoutingModule,
    SharedModule,
  ],
  declarations: [
    goalGroupListComponent,
    goalGroupDetailsComponent,
  ],
})
export class goalGroupModule { }
