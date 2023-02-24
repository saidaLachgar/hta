import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { departmentService } from "../department.service";

@Component({
  selector: "app-department-create",
  templateUrl: "./department-create.component.html",
})
export class departmentCreateComponent{
  breadCrumbItems: Array<{}>;
  
  constructor(private fb: FormBuilder, public service: departmentService) {
    this.breadCrumbItems = [{ label: 'Départ' }, { label: 'Nouveau Départ', active: true }];
    service.loadTeams();
    service.departmentForm = this.fb.group({
      titre: ["", Validators.required],
      team: [""],
      longueur: [null],
    });
  }

}
