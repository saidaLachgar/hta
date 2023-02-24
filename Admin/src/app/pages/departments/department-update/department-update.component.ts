import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { departmentService } from '../department.service';


@Component({
  selector: 'app-department-update',
  templateUrl: './department-update.component.html',
})
export class departmentUpdateComponent  {
  breadCrumbItems: Array<{}>;
  id: number;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, public service: departmentService) {
    this.breadCrumbItems = [{ label: 'Départ' }, { label: 'Mise à jour du Départ', active: true }];
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    service.departmentForm = fb.group({
      titre: ["", Validators.required],
      team: [""],
      longueur: [null],
    });
    service.getByKey(this.id).subscribe((obj) => {
      service.loadTeams([obj.team]);

      service.uploadedFile = obj.visuel ? {id : obj.visuel.id, url: obj.visuel.contentUrl} : null;
      service.departmentForm.setValue({
        titre: obj.titre,
        longueur: obj.longueur,
        team: obj.team ? obj.team["@id"] : null,
      });
    });
  }

}
