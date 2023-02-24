import { Component } from "@angular/core";

import { ActivatedRoute } from "@angular/router";
import { Lightbox } from "ngx-lightbox";
import { Department } from "src/app/core/models";
import { AuthenticationService } from "src/app/core/services/auth.service";
import { departmentService } from "../department.service";

@Component({
  selector: "app-department-details",
  templateUrl: "./department-details.component.html",
})
export class departmentDetailsComponent {
  department: Department;
  breadCrumbItems: Array<{}>;

  constructor(
    private route: ActivatedRoute,
    public lightbox: Lightbox,
    public departmentService: departmentService,
    public authService: AuthenticationService,
  ) {
    let id = route.snapshot.paramMap.get("id");
    departmentService.getByKey(id).subscribe(obj => this.department = obj);
  }
}
