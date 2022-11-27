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

  constructor(private route: ActivatedRoute, private fb: FormBuilder, public teamService: teamService) { 
    this.breadCrumbItems = [{ label: 'Utilisateurs' }, { label: 'Mettre à jour l\'utilisateur', active: true }];
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    teamService.loadMembers();
    teamService.loadDepartements();
    teamService.teamForm = this.fb.group({
      titre: ["", Validators.required],
      departements: [[]],
      membres: [[]],
    });
    this.teamService.getByKey(this.id).subscribe((obj) => {
      teamService.teamForm.setValue({
        titre : obj.titre,
        departements : obj.departements.map((e)=>e["@id"]),
        membres : obj.membres.map((e)=>e["@id"]),
      });
    });
  }
}
