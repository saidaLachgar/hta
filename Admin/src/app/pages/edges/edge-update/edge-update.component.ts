import { Component } from '@angular/core';
import {  FormBuilder, Validators } from '@angular/forms';
import { edgeService } from '../edge.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edge-update',
  templateUrl: './edge-update.component.html',
})
export class edgeUpdateComponent {
  breadCrumbItems: Array<{}>;
  showError: boolean = false;
  id: number;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, public service: edgeService) { 
    this.breadCrumbItems = [{ label: 'Tronçons' }, { label: 'Mettre à jour l\'tronçon', active: true }];
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    service.loadDepartments();
    service.loadANodes();
    service.loadBNodes();

    service.edgeForm = this.fb.group({
      titre: ["", Validators.required],
      node_a: ["", Validators.required],
      node_b: ["", Validators.required],
      department: [""],
    });

    service.getByKey(this.id).subscribe((obj) => {
      service.loadDepartments(obj.department ? [obj.department] : []);
      service.loadANodes(obj.node_a ? [obj.node_a] : []);
      service.loadBNodes(obj.node_b ? [obj.node_b] : []);
      service.edgeForm.patchValue({
        titre : obj.titre,
        department :obj.department ? obj.department["@id"] : null,
        node_a :obj.node_a ? obj.node_a["@id"] : null,
        node_b :obj.node_b ? obj.node_b["@id"] : null,
      });
    });

    
  }
}
