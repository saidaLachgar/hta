import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { goalService } from "../goal.service";

@Component({
  selector: "app-goal-update",
  templateUrl: "./goal-update.component.html",
})
export class goalUpdateComponent {
  breadCrumbItems: Array<{}>;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    public service: goalService
  ) {
    this.breadCrumbItems = [
      { label: "Objectifs" },
      { label: "Mise à jour de objectif", active: true },
    ];
    this.id = Number(this.route.snapshot.paramMap.get("id"));
    service.loadGoalGroups();
    service.goalForm = this.fb.group({
      name: ["", Validators.required],
      targetYears: [""],
      targetAchievement: [null, Validators.required],
      goalGroup: ["", Validators.required],
    });
    this.service.getByKey(this.id).subscribe((obj) => {
      service.loadGoalGroups(obj.goalGroup ? [obj.goalGroup] : []);
      service.goalForm.setValue({
        name: obj.name,
        targetYears: obj.targetYears,
        targetAchievement: obj.targetAchievement,
        goalGroup: obj.goalGroup ? obj.goalGroup["@id"] : null,
      });
    });
  }
}
