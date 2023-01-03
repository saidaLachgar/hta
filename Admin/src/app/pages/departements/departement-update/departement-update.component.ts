import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { departementService } from '../departement.service';


@Component({
  selector: 'app-departement-update',
  templateUrl: './departement-update.component.html',
})
export class departementUpdateComponent  {
  breadCrumbItems: Array<{}>;
  id: number;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, public service: departementService) {
    this.breadCrumbItems = [{ label: 'Départements' }, { label: 'Mise à jour du département', active: true }];
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    service.departementForm = fb.group({
      titre: ["", Validators.required],
      team: [""],
      longueur: [null],
    });
    service.getByKey(this.id).subscribe((obj) => {
      service.loadTeams([obj.team]);

      service.uploadedFile = obj.visuel ? {id : obj.visuel.id, url: obj.visuel.contentUrl} : null;
      service.departementForm.setValue({
        titre: obj.titre,
        longueur: obj.longueur,
        team: obj.team ? obj.team["@id"] : null,
      });
    });
  }

}
