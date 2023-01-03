import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { NgSelectConfig } from "@ng-select/ng-select";
import { AuthenticationService } from "src/app/core/services/auth.service";
import { travauxService } from "../travaux.service";

@Component({
  selector: "app-travaux-list",
  templateUrl: "./travaux-list.component.html",
})
export class travauxListComponent {
  breadCrumbItems: Array<{}>;

  constructor(
    public service: travauxService,
    private fb: FormBuilder,
    public authService: AuthenticationService,
    private config: NgSelectConfig
  ) {
    service.findAll();
    service.loadAppareils();
    service.loadDepartements();

    service.travauxForm = fb.group({
      id: [null],
      "departements.id[]": [''],
      "appareil.id[]": [''],
      "ps.id[]": [''],
      ps: [null],
      after: [null],
      before: [null],
      duration: [null],
      type: [null],
      causes: [null],
      clients: [null],
      DMS: [null],
      IFS: [null],
      NbAnomalies: [null],
    });

    config.notFoundText = 'Aucune donnée trouvée !';


  }
}
