import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { edgeService } from "../edge.service";
@Component({
  selector: "app-edge-create",
  templateUrl: "./edge-create.component.html",
})
export class edgeCreateComponent {
  breadCrumbItems: Array<{}>;
  showError: boolean = false;
  
  constructor(private fb: FormBuilder, public service: edgeService) {
    this.breadCrumbItems = [{ label: 'Tronçon' }, { label: 'Nouveau tronçon', active: true }];
    service.loadDepartments(false);
    service.loadANodes();
    service.loadBNodes();
    service.edgeForm = this.fb.group({
      titre: ["", Validators.required],
      department: [""],
      node_a: ["", Validators.required],
      node_b: ["", Validators.required],
    });
  }
}
