import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { NgSelectConfig } from "@ng-select/ng-select";
import { AuthenticationService } from "src/app/core/services/auth.service";
import { departementService } from "../departement.service";
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: "app-departements-list",
  templateUrl: "./departements-list.component.html",
})
export class departementsListComponent {
  breadCrumbItems: Array<{}>;

  constructor(
    public departementService: departementService,
    private fb: FormBuilder,
    public authService: AuthenticationService,
    private config: NgSelectConfig,
    public lightbox: Lightbox
  ) {
    departementService.findAll();
    departementService.loadTeams();

    departementService.departementForm = fb.group({
      titre: [''],
      longueur: [null],
      "team.id[]": [''],
    });

    config.notFoundText = 'Aucune donnée trouvée !';


  }
}
