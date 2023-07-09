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
    public service: posteService,
    private fb: FormBuilder,
    public authService: AuthenticationService,
    private modalService: NgbModal,
    private config: NgSelectConfig
  ) {
    service.findAll();
    service.loadCommunes();
    service.loadDepartments();

    service.posteForm = fb.group({
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
    service.exportForm = fb.group({
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
      orgine: [""],
      "node.department.id[]": [''],
      "node.commune.id[]": [''],
    });

    service.importForm = fb.group({
      addNonExitingAssociation: [true],
      updateIfExist: [false],
      spreadSheet: [null,Validators.required],
    });

    config.notFoundText = 'Aucune donnée trouvée !';

  }
  onUpload(fileInput: any){
    this.service.selectedFile = fileInput.target.files[0];
  }

  @ViewChild("content")
  private content: TemplateRef<any>;
  openModal() {
    this.modalService.open(this.content, { size: 'xl',centered: true });
  }
  @ViewChild("export_content")
  private export_content: TemplateRef<any>;
  ExportModal() {
    this.modalService.open(this.export_content, { size: 'xl',centered: true });
  }
}
