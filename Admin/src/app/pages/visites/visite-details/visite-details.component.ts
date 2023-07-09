import { Component } from "@angular/core";

import { ActivatedRoute } from "@angular/router";
import { Visite } from "src/app/core/models";
import { AuthenticationService } from "src/app/core/services/auth.service";
import { visiteService } from "../visite.service";

@Component({
  selector: "app-visite-details",
  templateUrl: "./visite-details.component.html",
})
export class visiteDetailsComponent {
  visite: Visite;
  breadCrumbItems: Array<{}>;

  constructor(
    private route: ActivatedRoute,
    public service: visiteService,
    public authService: AuthenticationService,
  ) {
    let id = route.snapshot.paramMap.get("id");
    service.getByKey(id).subscribe(obj => this.visite = obj);
  }
}
