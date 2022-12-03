import { NgModule } from '@angular/core';

// import { UIModule } from 'src/app/shared/ui/ui.module';
import { posteRoutingModule } from './poste-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';
import { posteCreateComponent } from './poste-create/poste-create.component';
import { posteDetailsComponent } from './poste-details/poste-details.component';
import { posteUpdateComponent } from './poste-update/poste-update.component';
import { postesListComponent } from './postes-list/postes-list.component';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  imports: [
    posteRoutingModule,
    NgbDatepickerModule,
    SharedModule,
  ],
  declarations: [
    postesListComponent,
    posteCreateComponent,
    posteUpdateComponent,
    posteDetailsComponent,
  ],
})
export class posteModule { }
