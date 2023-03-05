import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { anomalyService } from '../anomaly.service';


@Component({
  selector: 'app-anomaly-update',
  templateUrl: './anomaly-update.component.html',
})
export class anomalyUpdateComponent  {
  breadCrumbItems: Array<{}>;
  showError: boolean = false;
  id: number;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, public service: anomalyService) {
    this.breadCrumbItems = [{ label: 'Anomalies' }, { label: 'Mise à jour de anomalie', active: true }];
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    service.loadDepartments(false);
    service.loadEdges();
    service.anomalyForm = fb.group({
      severity: [""],
      status: [false],
      title: ["", Validators.required],
      edge: ["", Validators.required],
      department: ["", Validators.required],
    });
    service.getByKey(this.id).subscribe((obj) => {
      service.loadEdges(obj.edge ? [obj.edge] : []);

      service.anomalyForm.setValue({
        severity: obj.severity,
        status: obj.status,
        title: obj.title,
        department: obj.edge.department ? obj.edge.department["@id"] : null,
        edge: obj.edge ? obj.edge["@id"] : null,

      });
    });
  }

}



