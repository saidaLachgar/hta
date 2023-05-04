import { Component, TemplateRef, ViewChild } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { HotToastService } from "@ngneat/hot-toast";
import { BehaviorSubject, Observable, of } from "rxjs";
import { switchMap, tap } from "rxjs/operators";
import { Objective } from "src/app/core/models";
import { ObjectivesService } from "./objectives.service";

@Component({
  selector: "app-objectives-list",
  templateUrl: "./objectives-list.component.html",
})
export class ObjectivesComponent {
  breadCrumbItems: Array<{}>;
  form: FormGroup;
  months: string[];
  current_year: number;
  submitted: boolean = false;
  loading: boolean = false;
  data_loading: boolean = false;
  planned: boolean = false;
  edit_mode: boolean | number = false;
  data$: Observable<any[]>;
  private refreshTrigger$ = new BehaviorSubject<void>(undefined);

  constructor(
    public service: ObjectivesService,
    private fb: FormBuilder,
    private toast: HotToastService,
    private modalService: NgbModal
  ) {
    this.months = [
      "Janv.",
      "Févr.",
      "Mars",
      "Avr.",
      "Mai",
      "Juin",
      "Juill.",
      "Août",
      "Sept.",
      "Oct.",
      "Nov.",
      "Déc.",
    ];
    this.current_year = new Date().getFullYear();
    this.data$ = this.refreshTrigger$.pipe(
      tap(() => this.data_loading = true),
      switchMap(() => service.getData(this.current_year)),
      tap(() => this.data_loading = false)
    );

    this.form = this.fb.group({
      date: [
        "",
        [
          Validators.required,
          Validators.pattern(/^([12]\d{3}-(0[1-9]|1[0-2]))$/),
        ],
      ],
      id: [null],
      count: [null],
      plannedCount: [null],
      goal: ["", Validators.required],
    });
    service.loadGoals();
  }

  refreshData() {
    this.refreshTrigger$.next();
  }

  showForm(p: boolean, month: number, goal_id: string, achievement = null) {
    this.edit_mode =
      achievement && ((p && achievement.p) || (!p && achievement.r));
    this.planned = p;
    this.openModal();
    this.form.patchValue({
      date: this.current_year + "-" + String(month).padStart(2, "0"),
      goal: "/api/goals/" + goal_id,
      id: achievement ? achievement.id : null,
      plannedCount: achievement && achievement.p ? achievement.p : null,
      count: achievement && achievement.r ? achievement.r : null,
    });
  }

  updateYear(year: number) {
    // this.data$ = of([]);
    this.current_year = year;
    this.refreshData();
  }

  deleteAchievement(p: boolean) {
    if (confirm("Vous êtes sûr de vouloir supprimer?")) {
      if (this.count.value && this.plannedCount.value) {
        p ? this.plannedCount.reset() : this.count.reset();
        this.modalService.dismissAll();
        this.persistAchievement();
      } else {
        let id = this.id.value;
        let _this = this;
        this.service
          .delete(id)
          .pipe(
            this.toast.observe({
              loading: "Suppression...",
              success: () => {
                _this.loading = false;
                _this.modalService.dismissAll();
                _this.form.reset();
                _this.refreshData();
                return "Supprimé avec succès";
              },
              error: "un problème est survenu, veuillez réessayer",
            })
          )
          .subscribe();
      }
    }
  }

  persistAchievement() {
    this.submitted = true;
    if (this.form.invalid) return;
    let _this = this;
    let toast = this.toast;

    if (!this.count.value && !this.plannedCount.value) {
      toast.error("Vous devez remplir le formulaire");
      return;
    }

    this.loading = true;
    this.submitted = false;
    let objective = this.form.value as Objective;
    objective.date = objective.date + "-01";
    let request: Observable<Objective>;

    if (objective.id) {
      request = this.service.update(objective);
    } else {
      delete objective.id;
      request = this.service.add(objective);
    }

    request.subscribe({
      error: () => toast.error("un problème est survenu, veuillez réessayer"),
      complete() {
        _this.loading = false;
        _this.modalService.dismissAll();
        _this.form.reset();
        _this.refreshData();

        toast.success("Terminée avec succès");
      },
    });
  }

  @ViewChild("content")
  private content: TemplateRef<any>;
  openModal() {
    this.modalService.open(this.content, { centered: true });
  }

  get date() {
    return this.form.get("date");
  }
  get id() {
    return this.form.get("id");
  }
  get goal() {
    return this.form.get("goal");
  }
  get count() {
    return this.form.get("count");
  }
  get plannedCount() {
    return this.form.get("plannedCount");
  }
}
