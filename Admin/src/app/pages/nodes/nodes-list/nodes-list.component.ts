import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { NgSelectConfig } from "@ng-select/ng-select";
import { AuthenticationService } from "src/app/core/services/auth.service";
import { nodeService } from "../node.service";

@Component({
  selector: "app-nodes-list",
  templateUrl: "./nodes-list.component.html",
})
export class nodesListComponent {
  breadCrumbItems: Array<{}>;

  constructor(
    public service: nodeService,
    private fb: FormBuilder,
    public authService: AuthenticationService,
    private config: NgSelectConfig
  ) {
    service.findAll();
    service.loadDepartments();

    service.nodeForm = fb.group({
      id: [""],
      titre: [''],
      "departments.id[]": [''],
    });

    config.notFoundText = 'Aucune donnée trouvée !';


  }
}
