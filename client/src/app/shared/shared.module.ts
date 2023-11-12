import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIModule } from './ui/ui.module';
import { NgbPaginationModule, NgbTypeaheadModule, NgbDropdownModule, NgbCollapseModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogModule } from './components/confirm-dialog/confirm-dialog.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { DecimalHourToTimePipe } from '../core/pipes';
import { monthsSelectorComponent } from './components/months-selector/months-selector.component';
@NgModule({
  declarations: [
    // pipes and directives
    DecimalHourToTimePipe,
    monthsSelectorComponent, 
  ],
  imports: [
    // components
    FormsModule,
    CommonModule
  ],
  exports: [
    // everything (declarations && imports)
    CommonModule,
    NgSelectModule,
    UIModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    NgbCollapseModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
    NgbDropdownModule,
    NgbNavModule,
    monthsSelectorComponent, 
    DecimalHourToTimePipe
  ]
})

export class SharedModule { }
