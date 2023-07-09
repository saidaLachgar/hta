import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgSelectConfig } from "@ng-select/ng-select";
import { AuthenticationService } from "src/app/core/services/auth.service";
import { anomalyService } from "../anomalies/anomaly.service";


@Component({
  selector: "app-related-anomalies",
  templateUrl: "./related-anomalies.component.html",
})
export class relatedAnomaliesComponent implements OnChanges  {
  breadCrumbItems: Array<{}>;
  @Input() anomalies: FormArray;
  @Input() parentFormGroup: FormGroup;
  @Input() showErrors: boolean;
  @Input() currentEdge: any = { ANode: null,BNode: null,department: null,type: null};
  @Output() addAlert: EventEmitter<{ message: string, type: string }> = new EventEmitter<{ message: string, type: string }>();

  constructor(
    public service: anomalyService,
    private fb: FormBuilder,
    public authService: AuthenticationService,
    public anomalyService: anomalyService,
    private config: NgSelectConfig,
  ) {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.currentEdge && changes.currentEdge.currentValue) {
      const { ANode, BNode, department, type } = changes.currentEdge.currentValue;
      console.log(type);
      
      this.anomalyService.getRelatedAnomalies(ANode, BNode, department);
    }
  }

  // Anomalies CRUD
  newAnomaly(): FormGroup {
    return this.fb.group({
      severity: [""],
      status: [false],
      edge: ["", Validators.required],
      title: ["", Validators.required],
    })
  }

  addAnomaly() {
    if (!this.currentEdge.ANode)
      this.addAlert.emit({ message: "Vous devez choisir un Point coupure, pour pouvoir créer une anomalie.", type: "danger" });
    else if (this.currentEdge.type == null)
      this.addAlert.emit({ message: "Vous devez choisir le type de coupure !", type: "danger" });
    else
      this.anomalies.push(this.newAnomaly());
  }

  removeAnomaly(i: number) {
    this.anomalies.removeAt(i);
  }

  AlertEdgeChange() {
      this.addAlert.emit({ message: "Vous devez choisir un Point coupure, pour pouvoir choisir un tronçon !", type: "danger" });
  }
}
