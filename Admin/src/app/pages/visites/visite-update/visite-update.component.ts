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
  id: number;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, public service: visiteService) {
    this.breadCrumbItems = [{ label: 'Visites' }, { label: 'Mise à jour de visite', active: true }];
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    service.loadDepartements();
    service.loadSources();
    service.loadDestinations();
    service.loadTeams();
    service.visiteForm = fb.group({
      date: [""],
      departement: ["", Validators.required],
      source: [""],
      destination: [""],
      nbSupport: [null],
      team: [""],
    });
    service.getByKey(this.id).subscribe((obj) => {
      service.loadDepartements(obj.departement ? [obj.departement] : []);
      service.loadSources(obj.source ? [obj.source] : []);
      service.loadDestinations(obj.destination ? [obj.destination] : []);
      service.loadTeams(obj.team ? [obj.team] : []);

      service.visiteForm.setValue({
        date: obj.date,
        nbSupport: obj.nbSupport,
        destination: obj.destination ? obj.destination["@id"] : null,
        departement: obj.departement ? obj.departement["@id"] : null,
        source: obj.source ? obj.source["@id"] : null,
        team: obj.team ? obj.team["@id"] : null,
      });
    });
  }

}
