import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { NgSelectConfig } from "@ng-select/ng-select";
import { AuthenticationService } from "src/app/core/services/auth.service";
import { appareilService } from "../appareil.service";

@Component({
  selector: "app-appareils-list",
  templateUrl: "./appareils-list.component.html",
})
export class appareilsListComponent {
  breadCrumbItems: Array<{}>;

  constructor(
    public service: appareilService,
    private fb: FormBuilder,
    public authService: AuthenticationService,
    private config: NgSelectConfig
  ) {
    service.findAll();
    service.loadPostes();
    service.loadDepartements();

    service.appareilForm = fb.group({
      titre: [''],
      "departements.id[]": [''],
      "postes.id[]": [''],
    });

    config.notFoundText = 'Aucune donnée trouvée !';


  }
}
