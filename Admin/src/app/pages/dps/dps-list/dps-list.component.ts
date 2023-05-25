import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { NgSelectConfig } from "@ng-select/ng-select";
import { AuthenticationService } from "src/app/core/services/auth.service";
import { dpsService } from "../dps.service";
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: "app-dps-list",
  templateUrl: "./dps-list.component.html",
})
export class dpsListComponent {
  breadCrumbItems: Array<{}>;

  constructor(
    public dpsService: dpsService,
    private fb: FormBuilder,
    public authService: AuthenticationService,
    private config: NgSelectConfig,
    public lightbox: Lightbox
  ) {
    dpsService.findAll();
    dpsService.loadTeams();

    dpsService.dpsForm = fb.group({
      titre: [''],
      "team.id[]": [''],
    });

    config.notFoundText = 'Aucune donnée trouvée !';


  }
}
