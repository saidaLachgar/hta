import { NgModule } from '@angular/core';

// import { UIModule } from 'src/app/shared/ui/ui.module';
import { goalRoutingModule } from './goal-routing.module';
import {  NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from 'src/app/shared/shared.module';
import { goalCreateComponent } from './goal-create/goal-create.component';
import { goalDetailsComponent } from './goal-details/goal-details.component';
import { goalUpdateComponent } from './goal-update/goal-update.component';
import { goalsListComponent } from './goals-list/goals-list.component';

@NgModule({
  imports: [
    NgbTooltipModule,
    goalRoutingModule,
    SharedModule,
  ],
  declarations: [
    goalsListComponent,
    goalCreateComponent,
    goalUpdateComponent,
    goalDetailsComponent,
  ],
})
export class goalModule { }
