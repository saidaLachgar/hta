import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { NgSelectConfig } from "@ng-select/ng-select";
import { AuthenticationService } from "src/app/core/services/auth.service";
import { posteService } from "../poste.service";

@Component({
  selector: "app-postes-list",
  templateUrl: "./postes-list.component.html",
})
export class postesListComponent {
  breadCrumbItems: Array<{}>;
  public hideExport = true;

  constructor(
    public posteService: posteService,
    private fb: FormBuilder,
    public authService: AuthenticationService,
    private config: NgSelectConfig
  ) {
    posteService.findAll();
    posteService.loadCommunes();
    posteService.loadDepartments();

    posteService.posteForm = fb.group({
      titre: [""],
      designation: [""],
      MLE: [""],
      PKVA: [""],
      nb_clients: [""],
      before: [""],
      after: [""],
      type: [""],
      marque: [""],
      poste: [""],
      n_serie: [""],
      "node.department.id[]": [''],
      "commune.id[]": [''],
    });

    config.notFoundText = 'Aucune donnée trouvée !';


  }
}
