import { Component } from "@angular/core";

import { ActivatedRoute } from "@angular/router";
import { Lightbox } from "ngx-lightbox";
import { Dps } from "src/app/core/models";
import { AuthenticationService } from "src/app/core/services/auth.service";
import { dpsService } from "../dps.service";

@Component({
  selector: "app-dps-details",
  templateUrl: "./dps-details.component.html",
})
export class dpsDetailsComponent {
  dps: Dps;
  breadCrumbItems: Array<{}>;

  constructor(
    private route: ActivatedRoute,
    public lightbox: Lightbox,
    public dpsService: dpsService,
    public authService: AuthenticationService,
  ) {
    let id = route.snapshot.paramMap.get("id");
    dpsService.getByKey(id).subscribe(obj => this.dps = obj);
  }
}
