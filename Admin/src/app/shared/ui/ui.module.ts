import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbCollapseModule, NgbDatepickerModule, NgbTimepickerModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { PagetitleComponent } from './pagetitle/pagetitle.component';
@NgModule({
  declarations: [PagetitleComponent],
  imports: [
    CommonModule,
    NgbCollapseModule,
    NgbDatepickerModule,
    NgbTimepickerModule,
    NgbDropdownModule
  ],
  exports: [PagetitleComponent]
})
export class UIModule { }
