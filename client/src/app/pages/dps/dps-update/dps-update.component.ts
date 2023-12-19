import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { dpsService } from '../dps.service';


@Component({
  selector: 'app-dps-update',
  templateUrl: './dps-update.component.html',
})
export class dpsUpdateComponent  {
  breadCrumbItems: Array<{}>;
  id: number;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, public service: dpsService) {
    this.breadCrumbItems = [{ label: 'Dps' }, { label: 'Mise à jour du Dps', active: true }];
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    service.loadTeams();
    service.dpsForm = fb.group({
      titre: ["", Validators.required],
      nbClients: [null],
      team: [[]],
    });
    service.getByKey(this.id).subscribe((obj) => {
      service.loadTeams(obj.team ? obj.team : []);
      service.dpsForm.setValue({
        titre: obj.titre,
        team : obj.team.length ? obj.team.map((e)=>e["@id"]) : [],
        nbClients: obj.nbClients,
      });
    });
  }

}
