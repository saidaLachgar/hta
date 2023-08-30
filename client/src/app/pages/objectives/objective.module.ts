import { NgModule } from '@angular/core';
import { UserRoutingModule } from './objectives-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ObjectivesComponent } from './objectives-list.component';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    UserRoutingModule,
    SharedModule,
    NgbProgressbarModule,
  ],
  declarations: [
    ObjectivesComponent
  ],
})
export class objectiveModule { }
