import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AuthenticationService } from "src/app/core/services/auth.service";
import { communeService } from "../commune.service";

@Component({
  selector: "app-communes-list",
  templateUrl: "./communes-list.component.html",
})
export class communesListComponent {
  breadCrumbItems: Array<{}>;
  public hideExport = true;

  constructor(
    public service: communeService,
    private fb: FormBuilder,
    public authService: AuthenticationService,
  ) {
    service.findAll();
    service.communeForm = fb.group({
      titre: [''],
    });
  }
}
