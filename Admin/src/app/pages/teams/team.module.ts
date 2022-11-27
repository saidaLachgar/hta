import { NgModule } from '@angular/core';

// import { UIModule } from 'src/app/shared/ui/ui.module';
import { teamRoutingModule } from './team-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';
import { teamCreateComponent } from './team-create/team-create.component';
import { teamDetailsComponent } from './team-details/team-details.component';
import { teamUpdateComponent } from './team-update/team-update.component';
import { teamsListComponent } from './teams-list/teams-list.component';

@NgModule({
  imports: [
    teamRoutingModule,
    SharedModule,
  ],
  declarations: [
    teamsListComponent,
    teamCreateComponent,
    teamUpdateComponent,
    teamDetailsComponent,
  ],
})
export class teamModule { }
