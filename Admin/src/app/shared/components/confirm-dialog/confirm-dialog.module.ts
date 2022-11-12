import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ConfirmDialogComponent } from './confirm-dialog.component';
import { ConfirmDialogService } from './confirm-dialog.service';

@NgModule({
    declarations: [ConfirmDialogComponent],
    imports: [CommonModule, NgbModule],
    exports: [ConfirmDialogComponent],
    providers: [ConfirmDialogService]
})
export class ConfirmDialogModule {
}  