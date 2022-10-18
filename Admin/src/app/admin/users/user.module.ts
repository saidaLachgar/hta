import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UIModule } from 'src/app/shared/ui/ui.module';
import { NgbPaginationModule, NgbTypeaheadModule, NgbDropdownModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { ConfirmDialogModule } from '../components/confirm-dialog/confirm-dialog.module';

import { UsersListComponent } from './users-list/users-list.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserDetailsComponent } from './user-details/user-details.component';

import { ReplacePipe } from 'src/app/core/pipes/replace.pipe';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    UIModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    
    NgbCollapseModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
    NgbDropdownModule,
  ],
  declarations: [
    UsersListComponent,
    UserCreateComponent,
    UserUpdateComponent,
    UserDetailsComponent,
    ReplacePipe
  ],
})
export class userModule { }
