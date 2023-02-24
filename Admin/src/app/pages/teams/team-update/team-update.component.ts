import { Component } from '@angular/core';
import {  FormBuilder, Validators } from '@angular/forms';
import { teamService } from '../team.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-update',
  templateUrl: './team-update.component.html',
})
export class teamUpdateComponent {
  breadCrumbItems: Array<{}>;
  id: number;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, public service: teamService) { 
    this.breadCrumbItems = [{ label: 'Équipes' }, { label: 'Mise à jour de l\'équipe', active: true }];
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    service.loadMembers();
    service.loadDepartments();
    service.teamForm = this.fb.group({
      titre: ["", Validators.required],
      departments: [[]],
      membres: [[]],
    });
    this.service.getByKey(this.id).subscribe((obj) => {
      service.loadDepartments(obj.departments ? obj.departments : []);
      service.loadMembers(obj.membres ? obj.membres : []);
      service.teamForm.setValue({
        titre : obj.titre,
        departments : obj.departments.length ? obj.departments.map((e)=>e["@id"]) : [],
        membres : obj.membres.length ? obj.membres.map((e)=>e["@id"]) : [],
      });
    });
  }
}
