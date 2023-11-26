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
  breadCrumbItems: Array<{}>;
  visite: Visite;
  currentEdge: any;

  constructor(
    private route: ActivatedRoute,
    public service: visiteService,
    public authService: AuthenticationService,
  ) {
    let id = route.snapshot.paramMap.get("id");
    service.getByKey(id).subscribe(obj => {
      this.visite = obj;

      // anomalies
      this.currentEdge = {
        ANode: obj.node_a["@id"],
        BNode: obj.node_b.map((e) => e["@id"]),
        department: obj.node_a.department["@id"],
        type: 'false',
        date: obj.date
      }
    });
    
  }
}
