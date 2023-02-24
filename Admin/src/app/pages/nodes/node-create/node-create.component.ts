import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { nodeService } from "../node.service";
@Component({
  selector: "app-node-create",
  templateUrl: "./node-create.component.html",
})
export class nodeCreateComponent {
  breadCrumbItems: Array<{}>;
  
  constructor(private fb: FormBuilder, public nodeService: nodeService) {
    this.breadCrumbItems = [{ label: 'Appareils' }, { label: 'Nouvel appareil', active: true }];
    nodeService.loadDepartments();
    nodeService.nodeForm = this.fb.group({
      titre: ["", Validators.required],
      department: [""],
    });
  }
}
