import { Injectable } from '@angular/core';  
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDialogComponent } from './confirm-dialog.component';

@Injectable({
    providedIn: "root",
})
@Injectable() export class ConfirmDialogService {  
    
    constructor(private modalService: NgbModal) { }

    setConfirmation(message: string, confirm: () => void, reject: () => void = ()=>{}): any {  
        
        const modalRef = this.modalService.open(ConfirmDialogComponent);
        modalRef.componentInstance.message = {  
            text: message,  
            confirm(): any {  
                confirm();  
            },  
            reject(): any {  
                reject();  
            }  
        };
  
    }  
}  