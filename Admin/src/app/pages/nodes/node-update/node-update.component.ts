import { Component } from '@angular/core';
import {  FormBuilder, Validators } from '@angular/forms';
import { nodeService } from '../node.service';
import { ActivatedRoute } from '@angular/router';
import { concat, of } from 'rxjs';

@Component({
  selector: 'app-node-update',
  templateUrl: './node-update.component.html',
})
export class nodeUpdateComponent {
  breadCrumbItems: Array<{}>;
  id: number;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, public nodeService: nodeService) { 
    this.breadCrumbItems = [{ label: 'Appareils' }, { label: 'Mettre à jour l\'appareil', active: true }];
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    nodeService.loadDepartments();
      
    nodeService.nodeForm = this.fb.group({
      titre: ["", Validators.required],
      department: [""],
      postes: [[]],
    });
    nodeService.getByKey(this.id).subscribe((obj) => {
      nodeService.nodeForm.patchValue({
        titre : obj.titre,
        department :obj.department ? obj.department["@id"] : null,
      });
    });
  }
}
