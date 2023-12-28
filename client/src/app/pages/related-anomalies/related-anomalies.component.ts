import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { NgSelectConfig } from "@ng-select/ng-select";
import { AuthenticationService } from "src/app/core/services/auth.service";
import { anomalyService } from "../anomalies/anomaly.service";
import { ViewportScroller } from "@angular/common";


@Component({
  selector: "app-related-anomalies",
  templateUrl: "./related-anomalies.component.html",
})
export class relatedAnomaliesComponent implements OnChanges {
  breadCrumbItems: Array<{}>;
  @Input() anomalies: FormArray;
  @Input() parentFormGroup: FormGroup;
  @Input() showErrors: boolean;
  @Input() currentEdge: any = { ANode: null, BNode: null, department: null, type: null, date: null };
  @Output() addAlert: EventEmitter<{ message: string, type: string }> = new EventEmitter<{ message: string, type: string }>();

  constructor(
    public service: anomalyService,
    private fb: FormBuilder,
    public authService: AuthenticationService,
    public anomalyService: anomalyService,
    private config: NgSelectConfig,
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller,
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    let change = changes.currentEdge;
    
    if (change && change.currentValue) {


      const { ANode, BNode, department, type, date } = change.currentValue;

      // Check if the objects are equal (excluding the 'type' property)
      const OnlyTypeChanged = change.previousValue && JSON.stringify(
        { ...change.currentValue, type: change.previousValue.type }
      ) === JSON.stringify(
        { ...change.previousValue, type: type }
      );


      if (ANode && ANode.trim() !== '' && !OnlyTypeChanged) {
        this.anomalyService.getRelatedAnomalies(ANode, BNode, department, date);

        // scroll to anomalies
        this.anomalyService.loading$.pipe().subscribe(loading => {
          !loading && setTimeout(() => this.route.fragment.subscribe(f =>
            f && this.viewportScroller.scrollToAnchor(f)), 50);
        });
      }

      // disable validation if is Coupure / Ouverture
      if (!change.previousValue || change.previousValue.type != type) {
        let anomalyFormArray = this.anomalies as FormArray;
        // let anomalyFormArray =  this.parentFormGroup.get("anomalies") as FormArray;
        // Disable each control within the FormArray
        if(anomalyFormArray) {
          for (const control of anomalyFormArray.controls) {
            type != 'false' ? control.enable() : control.disable();
          }
        }
      }
    }
  }

  // Anomalies status change
  changeStatus( status ) {
    const { ANode, BNode, department, date } = this.currentEdge;
    this.anomalyService.getRelatedAnomalies(ANode, BNode, department, date, status);
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
