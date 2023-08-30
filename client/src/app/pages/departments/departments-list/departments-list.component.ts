import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { NgSelectConfig } from "@ng-select/ng-select";
import { AuthenticationService } from "src/app/core/services/auth.service";
import { departmentService } from "../department.service";
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: "app-departments-list",
  templateUrl: "./departments-list.component.html",
})
export class departmentsListComponent {
  breadCrumbItems: Array<{}>;

  constructor(
    public departmentService: departmentService,
    private fb: FormBuilder,
    public authService: AuthenticationService,
    private config: NgSelectConfig,
    public lightbox: Lightbox
  ) {
    departmentService.findAll();
    departmentService.loadTeams();

    departmentService.departmentForm = fb.group({
      titre: [''],
      longueur: [null],
      courantMax: [null],
      "team.id[]": [''],
    });

    config.notFoundText = 'Aucune donnée trouvée !';


  }
}
