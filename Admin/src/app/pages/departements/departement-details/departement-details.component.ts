import { Component } from "@angular/core";

import { ActivatedRoute } from "@angular/router";
import { Lightbox } from "ngx-lightbox";
import { Departement } from "src/app/core/models";
import { AuthenticationService } from "src/app/core/services/auth.service";
import { departementService } from "../departement.service";

@Component({
  selector: "app-departement-details",
  templateUrl: "./departement-details.component.html",
})
export class departementDetailsComponent {
  departement: Departement;
  breadCrumbItems: Array<{}>;

  constructor(
    private route: ActivatedRoute,
    public lightbox: Lightbox,
    public departementService: departementService,
    public authService: AuthenticationService,
  ) {
    let id = route.snapshot.paramMap.get("id");
    departementService.getByKey(id).subscribe(obj => this.departement = obj);
  }
}
