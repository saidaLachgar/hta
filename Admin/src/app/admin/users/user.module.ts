import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UIModule } from 'src/app/shared/ui/ui.module';
import { NgbPaginationModule, NgbTypeaheadModule, NgbDropdownModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';

import { UsersListComponent } from './users-list/users-list.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { ReplacePipe } from 'src/app/core/pipes/replace.pipe';
// import { userDetailComponent } from './user-detail/user-detail.component';


@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    UIModule,
    FormsModule,
    ReactiveFormsModule,
    
    NgbCollapseModule,
    NgbPaginationModule, NgbTypeaheadModule, NgbDropdownModule,
  ],
  declarations: [
    UsersListComponent,
    UserCreateComponent,
    UserUpdateComponent,
    // userDetailComponent,
    ReplacePipe
  ],
})
export class userModule { }
