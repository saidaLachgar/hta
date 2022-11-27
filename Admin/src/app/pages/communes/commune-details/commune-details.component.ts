import { Component } from "@angular/core";

import { ActivatedRoute } from "@angular/router";
import { Commune } from "src/app/core/models";
import { AuthenticationService } from "src/app/core/services/auth.service";
import { communeService } from "../commune.service";

@Component({
  selector: "app-commune-details",
  templateUrl: "./commune-details.component.html",
})
export class communeDetailsComponent {
  commune: Commune;
  breadCrumbItems: Array<{}>;

  constructor(
    private route: ActivatedRoute,
    public communeService: communeService,
    public authService: AuthenticationService,
  ) {
    let id = route.snapshot.paramMap.get("id");
    communeService.getByKey(id).subscribe(obj => this.commune = obj);
  }
}
