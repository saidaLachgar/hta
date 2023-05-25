import { Component, TemplateRef, ViewChild } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { NgSelectConfig } from "@ng-select/ng-select";
import { AuthenticationService } from "src/app/core/services/auth.service";
import { posteService } from "../poste.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-postes-list",
  templateUrl: "./postes-list.component.html",
})
export class postesListComponent {
  breadCrumbItems: Array<{}>;

  constructor(
    public posteService: posteService,
    private fb: FormBuilder,
    public authService: AuthenticationService,
    private modalService: NgbModal,
    private config: NgSelectConfig
  ) {
    posteService.findAll();
    posteService.loadCommunes();
    posteService.loadDepartments();

    posteService.posteForm = fb.group({
      titre: [""],
      designation: [""],
      MLE: [""],
      PKVA: [""],
      nb_clients: [""],
      before: [""],
      after: [""],
      type: [""],
      marque: [""],
      poste: [""],
      n_serie: [""],
      "node.department.id[]": [''],
      "node.commune.id[]": [''],
    });
    posteService.importForm = fb.group({
      addNonExitingAssociation: [true],
      spreadSheet: [null,Validators.required],
    });

    config.notFoundText = 'Aucune donnée trouvée !';

  }
  onUpload(fileInput: any){
    this.posteService.selectedFile = fileInput.target.files[0];
  }

  @ViewChild("content")
  private content: TemplateRef<any>;
  openModal() {
    this.modalService.open(this.content, { size: 'xl',centered: true });
  }
}
