import { Component, TemplateRef, ViewChild } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { NgSelectConfig } from "@ng-select/ng-select";
import { AuthenticationService } from "src/app/core/services/auth.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { edgeService } from "../edge.service";

@Component({
  selector: "app-edges-list",
  templateUrl: "./edges-list.component.html",
})
export class edgesListComponent {
  breadCrumbItems: Array<{}>;

  constructor(
    public service: edgeService,
    private fb: FormBuilder,
    public authService: AuthenticationService,
    private modalService: NgbModal,
    private config: NgSelectConfig
  ) {
    service.findAll();
    service.loadDepartments();
    service.loadCommunes();
    service.loadANodes();
    service.loadBNodes();

    service.edgeForm = fb.group({
      "department.id[]": [''],
      "node_a.id[]": [''],
      "node_b.id[]": [''],
      "commune.id[]": [''],
      section: [null],
      marque: [""],
      longueur: [null],
    });
    service.exportForm = fb.group({
      "department.id[]": [''],
      "node_a.id[]": [''],
      "node_b.id[]": [''],
      "commune.id[]": [''],
      section: [null],
      marque: [""],
      longueur: [null],
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
