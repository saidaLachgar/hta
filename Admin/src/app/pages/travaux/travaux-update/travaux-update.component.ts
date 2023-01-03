import { Component } from '@angular/core';
import {  FormBuilder, Validators } from '@angular/forms';
import { travauxService } from '../travaux.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-travaux-update',
  templateUrl: './travaux-update.component.html',
})
export class travauxUpdateComponent {
  breadCrumbItems: Array<{}>;
  id: number;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, public travauxService: travauxService) { 
    this.breadCrumbItems = [{ label: 'Utilisateurs' }, { label: 'Mettre à jour l\'utilisateur', active: true }];
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    travauxService.travauxForm = this.fb.group({
      titre: ["", Validators.required],
      departement: [[]],
      appareil: [[]],
    });
    this.travauxService.getByKey(this.id).subscribe((obj) => {
      // travauxService.loadAppareils(obj.appareil);
      // travauxService.loadDepartements(obj.departements);
      travauxService.travauxForm.setValue({
        departement : obj.departement["@id"],
        appareil : obj.appareil["@id"],
      });
    });
  }
}
