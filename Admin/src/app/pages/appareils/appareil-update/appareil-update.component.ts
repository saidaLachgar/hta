import { Component } from '@angular/core';
import {  FormBuilder, Validators } from '@angular/forms';
import { appareilService } from '../appareil.service';
import { ActivatedRoute } from '@angular/router';
import { concat, of } from 'rxjs';

@Component({
  selector: 'app-appareil-update',
  templateUrl: './appareil-update.component.html',
})
export class appareilUpdateComponent {
  breadCrumbItems: Array<{}>;
  id: number;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, public appareilService: appareilService) { 
    this.breadCrumbItems = [{ label: 'Appareils' }, { label: 'Mettre à jour l\'appareil', active: true }];
    this.id = Number(this.route.snapshot.paramMap.get('id'));
      
    appareilService.appareilForm = this.fb.group({
      titre: ["", Validators.required],
      departement: [""],
      postes: [[]],
    });
    appareilService.getByKey(this.id).subscribe((obj) => {
      appareilService.loadPostes(obj.postes);
      appareilService.loadDepartements([obj.departement]);
      appareilService.appareilForm.patchValue({
        titre : obj.titre,
        departement :obj.departement ? obj.departement["@id"] : null,
        postes : obj.postes.map((e)=>e["@id"]),
      });
    });
  }
}
