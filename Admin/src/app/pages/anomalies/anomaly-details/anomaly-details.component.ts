import { Component } from "@angular/core";

import { ActivatedRoute } from "@angular/router";
import { Anomaly } from "src/app/core/models";
import { AuthenticationService } from "src/app/core/services/auth.service";
import { anomalyService } from "../anomaly.service";

@Component({
  selector: "app-anomaly-details",
  templateUrl: "./anomaly-details.component.html",
})
export class anomalyDetailsComponent {
  anomaly: Anomaly;
  breadCrumbItems: Array<{}>;

  constructor(
    private route: ActivatedRoute,
    public service: anomalyService,
    public authService: AuthenticationService,
  ) {
    let id = route.snapshot.paramMap.get("id");
    service.getByKey(id).subscribe(obj => this.anomaly = obj);
  }
}
