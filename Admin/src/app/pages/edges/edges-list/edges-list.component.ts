import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { NgSelectConfig } from "@ng-select/ng-select";
import { AuthenticationService } from "src/app/core/services/auth.service";
import { edgeService } from "../edge.service";

@Component({
  selector: "app-edges-list",
  templateUrl: "./edges-list.component.html",
})
export class edgesListComponent {
  breadCrumbItems: Array<{}>;

  constructor(
    public service: edgeService,
    private fb: FormBuilder,
    public authService: AuthenticationService,
    private config: NgSelectConfig
  ) {
    service.findAll();
    service.loadDepartments();
    service.loadCommunes();
    service.loadANodes();
    service.loadBNodes();

    service.edgeForm = fb.group({
      "department.id[]": [''],
      "node_a.id[]": [''],
      "node_b.id[]": [''],
      "commune.id[]": [''],
      section: [null],
      marque: [""],
      longueur: [null],
    });

    config.notFoundText = 'Aucune donnée trouvée !';


  }
}
