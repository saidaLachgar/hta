import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { posteService } from "../poste.service";
@Component({
  selector: "app-poste-create",
  templateUrl: "./poste-create.component.html",
})
export class posteCreateComponent {
  breadCrumbItems: Array<{}>;
  showError: boolean = false;
  
  constructor(private fb: FormBuilder, public posteService: posteService) {
    this.breadCrumbItems = [{ label: 'Postes' }, { label: 'Nouveau poste', active: true }];
    posteService.loadCommunes();
    posteService.loadDepartments(false);
    posteService.loadNodes();
    posteService.posteForm = this.fb.group({
      designation: ["", Validators.required],
      MLE: [""],
      PKVA: [null],
      nbClients: [null],
      dateMst: [null],
      department: [""],
      type: [""],
      marque: [""],
      poste: [""],
      n_serie: [""],
      node: ["", Validators.required],
    });
  }
}
