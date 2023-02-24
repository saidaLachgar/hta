import { Component } from '@angular/core';
import {  FormBuilder, Validators } from '@angular/forms';
import { posteService } from '../poste.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-poste-update',
  templateUrl: './poste-update.component.html',
})
export class posteUpdateComponent {
  breadCrumbItems: Array<{}>;
  id: number;
  showError: boolean = false;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, public posteService: posteService) { 
    this.breadCrumbItems = [{ label: 'Postes' }, { label: 'Mettre à jour le poste', active: true }];
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    posteService.loadNodes();
    posteService.loadCommunes();
    posteService.loadDepartments();
    posteService.posteForm = this.fb.group({
      designation: ["", Validators.required],
      MLE: [""],
      PKVA: [null],
      nbClients: [null],
      dateMst: [""],
      department: [""],
      node: ["", Validators.required],
      commune: [""],
    });
    this.posteService.getByKey(this.id).subscribe((obj) => {
      
      let date = obj.date_mst?  new Date(obj.date_mst) : null;
      posteService.loadDepartments(obj.node.department ? [obj.node.department] : []);
      posteService.loadCommunes(obj.commune ? [obj.commune] : []);
      posteService.loadNodes(obj.node ? [obj.node] : []);

      posteService.posteForm.setValue({
        designation : obj.designation,
        MLE : obj.MLE,
        PKVA : obj.PKVA,
        nbClients : obj.nb_clients,
        dateMst : date ? {
          year: date.getFullYear() ,
          month: date.getMonth() +1,
          day: date.getDate()
        } : null,
        department: obj.node.department ? obj.node.department["@id"] : null,
        node: obj.node ? obj.node["@id"] : null,
        commune: obj.commune ? obj.commune["@id"] : null,
      });
    });
  }
}
