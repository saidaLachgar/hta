import { NgModule } from '@angular/core';
import { UserRoutingModule } from './logs-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { LogsComponent } from './logs-list.component';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    UserRoutingModule,
    SharedModule,
    NgbDatepickerModule,
  ],
  declarations: [
    LogsComponent
  ],
})
export class LogsModule { }
