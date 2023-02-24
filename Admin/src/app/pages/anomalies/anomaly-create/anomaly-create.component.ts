import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { anomalyService } from "../anomaly.service";

@Component({
  selector: "app-anomaly-create",
  templateUrl: "./anomaly-create.component.html",
})
export class anomalyCreateComponent{
  breadCrumbItems: Array<{}>;
  showError: boolean = false;
  
  constructor(private fb: FormBuilder, public service: anomalyService) {
    this.breadCrumbItems = [{ label: 'Anomalies' }, { label: 'Nouveau anomaly', active: true }];
    service.loadDepartments();
    service.loadEdges();
    service.anomalyForm = this.fb.group({
      severity: [""],
      status: [false],
      title: ["", Validators.required],
      edge: ["", Validators.required],
      department: ["", Validators.required],
    });
  }

}

