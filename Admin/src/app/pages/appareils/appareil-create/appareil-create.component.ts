import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { appareilService } from "../appareil.service";
@Component({
  selector: "app-appareil-create",
  templateUrl: "./appareil-create.component.html",
})
export class appareilCreateComponent {
  breadCrumbItems: Array<{}>;
  
  constructor(private fb: FormBuilder, public appareilService: appareilService) {
    this.breadCrumbItems = [{ label: 'Appareils' }, { label: 'Nouvel appareil', active: true }];
    appareilService.loadPostes();
    appareilService.loadDepartements();
    appareilService.appareilForm = this.fb.group({
      titre: ["", Validators.required],
      departement: [""],
      postes: [[]],
    });
  }
}
