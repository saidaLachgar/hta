import { NgModule } from '@angular/core';

// import { UIModule } from 'src/app/shared/ui/ui.module';
import { UserRoutingModule } from './user-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UsersListComponent } from './users-list/users-list.component';
import { ReplacePipe } from 'src/app/core/pipes';
// import { ReplacePipe } from 'src/app/core/pipes';

@NgModule({
  imports: [
    UserRoutingModule,
    SharedModule,
  ],
  declarations: [
    UsersListComponent,
    UserCreateComponent,
    UserUpdateComponent,
    UserDetailsComponent,
    ReplacePipe,
  ],
})
export class userModule { }
