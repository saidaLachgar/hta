import { Component, Input } from '@angular/core';  
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
  
@Component({  
    selector: 'app-confirm-dialog',  
    template: `
        <div class="modal-content">
            <div class="modal-body">
                <p class="fs-5 fw-medium mt-4">{{message.text}}</p>
                <div class="row justify-content-end">
                    <div class="col-auto">
                        <button type="button" class="btn bg-light text-primary me-2" (click)="message.reject(); activeModal.close('');">Annuler</button>
                        <button type="button" class="btn btn-primary" (click)="message.confirm(); activeModal.close('');">Oui</button>
                    </div>
                </div>
            </div>
        </div>`,  
})  

export class ConfirmDialogComponent {  
    @Input() message: any;  
    constructor(public activeModal: NgbActiveModal){}
}  