import { NgModule } from '@angular/core';

import { UserPermissionsComponent } from './user-permissions.component';
import { UserPermissionsRoutingModule } from './user-permissions-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TypeofPipe } from 'src/app/core/pipes';

@NgModule({
  imports: [
    UserPermissionsRoutingModule,
    SharedModule,
  ],
  declarations: [
    UserPermissionsComponent,
    TypeofPipe,
  ],
})
export class UserPermissionsModule { }
