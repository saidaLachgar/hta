import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIModule } from './ui/ui.module';
import { NgbPaginationModule, NgbTypeaheadModule, NgbDropdownModule, NgbCollapseModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogModule } from './components/confirm-dialog/confirm-dialog.module';

@NgModule({
  declarations: [
    // pipes and directives
  ],
  imports: [
    // components
    CommonModule
  ],
  exports: [
    // everything
    CommonModule,
    UIModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    NgbCollapseModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
    NgbDropdownModule,
    NgbNavModule,
  ]
})

export class SharedModule { }
