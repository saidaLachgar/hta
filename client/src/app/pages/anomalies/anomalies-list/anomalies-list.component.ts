import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { NgSelectConfig } from "@ng-select/ng-select";
import { AuthenticationService } from "src/app/core/services/auth.service";
import { anomalyService } from "../anomaly.service";


@Component({
  selector: "app-anomalies-list",
  templateUrl: "./anomalies-list.component.html",
})
export class anomaliesListComponent {
  breadCrumbItems: Array<{}>;

  constructor(
    public service: anomalyService,
    private fb: FormBuilder,
    public authService: AuthenticationService,
    private config: NgSelectConfig,
  ) {
    service.findAll();
    service.loadDepartments();
    service.loadUsers();

    service.anomalyForm = fb.group({
      severity: [null],
      status: [null],
      title: [""],
      before: [""],
      after: [""],
      "users.id[]": [""],
      "edge.department.id[]": [""],
    });

    config.notFoundText = 'Aucune donnée trouvée !';


  }
}
