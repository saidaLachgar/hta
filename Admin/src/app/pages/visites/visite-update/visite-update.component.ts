import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { visiteService } from '../visite.service';


@Component({
  selector: 'app-visite-update',
  templateUrl: './visite-update.component.html',
})
export class visiteUpdateComponent  {
  breadCrumbItems: Array<{}>;
  showError: boolean = false;
  id: number;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, public service: visiteService) {
    this.breadCrumbItems = [{ label: 'Visites' }, { label: 'Mise à jour de visite', active: true }];
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    service.loadDepartments();
    service.loadANodes();
    service.loadBNodes();
    service.loadTeams();
    service.visiteForm = fb.group({
      date: [""],
      department: ["", Validators.required],
      nodeA: ["", Validators.required],
      nodeB: [[]],
      nbSupport: [null],
      team: [""],
    });
    service.getByKey(this.id).subscribe((obj) => {
      service.loadDepartments(obj.node_a.department ? [obj.node_a.department] : []);
      service.loadTeams(obj.team ? [obj.team] : []);

      service.loadANodes(obj.node_a ? [obj.node_a] : []);
      service.loadBNodes(obj.node_b ? obj.node_b : []);

      service.visiteForm.setValue({
        date: obj.date,
        nbSupport: obj.nbSupport,
        team: obj.team ? obj.team["@id"] : null,

        department: obj.node_a.department ? obj.node_a.department["@id"] : null,
        nodeA :obj.node_a ? obj.node_a["@id"] : null,
        nodeB : obj.node_b.length ? obj.node_b.map((e)=>e["@id"]) : [],
      });
    });
  }

}



