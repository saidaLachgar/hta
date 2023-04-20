import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { goalService } from "../goal.service";
@Component({
  selector: "app-goal-create",
  templateUrl: "./goal-create.component.html",
})
export class goalCreateComponent {
  breadCrumbItems: Array<{}>;

  constructor(private fb: FormBuilder, public service: goalService) {
    this.breadCrumbItems = [{ label: 'Objectifs' }, { label: 'Nouveau objectif', active: true }];
    service.loadGoalGroups();
    service.goalForm = this.fb.group({
      name: ['', Validators.required],
      targetYears: [''],
      calc: [''],
      targetAchievement: [null, Validators.required],
      goalGroup: ['', Validators.required],
    });
  }
}
