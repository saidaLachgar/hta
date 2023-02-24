import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { HotToastService } from "@ngneat/hot-toast";
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from "@ngrx/data";
import { concat, forkJoin, Observable, of, Subject } from "rxjs";
import { catchError, debounceTime, distinctUntilChanged, filter, map, switchMap, tap } from "rxjs/operators";
import { Department, Pagination, Team } from "src/app/core/models";
import { ConfirmDialogService } from "src/app/shared/components/confirm-dialog/confirm-dialog.service";
import { environment } from "src/environments/environment";
import { mediasService } from "../medias/media.service";

@Injectable({
  providedIn: "root",
})
export class departmentService extends EntityCollectionServiceBase<Department> {
  readonly pageSize = environment.pageSize;
  public departmentForm: FormGroup;
  private server = environment.serverURL;
  departments$: Observable<Department[]>;
  teams$: Observable<Team[]>;
  teamLoading = false;
  teamInput$ = new Subject<string>();
  selectedFile?: FileList;
  pagination$: Observable<Pagination>;
  submitted: boolean = false;
  isLoading: boolean = false
  FileRemoved: boolean | number = false;
  uploadedFile?: { id: number, url: string };
  page: number = 1;
  lastSearchedParams;

  constructor(
    private serviceElementsFactory: EntityCollectionServiceElementsFactory,
    private confirmDialogService: ConfirmDialogService,
    public MediasService: mediasService,
    private toast: HotToastService,
    private http: HttpClient
  ) {
    super("departments", serviceElementsFactory);
  }

  /**
   * Get records
   */
  findAll(): void {
    this.findByCriteria({ page: 1 });
  }


  loadTeams(defaultVal = []) : void{
    this.teams$ = concat(
      of(defaultVal), // default items
      this.teamInput$.pipe(
          debounceTime(500),
          distinctUntilChanged(),
          filter((val) => val != null),
          tap(() => this.teamLoading = true),
          switchMap(term => 
            this.http.get<Team[]>(`${this.server}/api/teams?properties[]=id&properties[]=titre&titre=`+term)
            .pipe(
              map(response => response["hydra:member"]),
              catchError(() => of([])), // empty list on error
              tap(() => this.teamLoading = false)
            )
          )
      )
    );
  }

  /**
   * Get pagination
   */
  getPagination(): void {
    this.pagination$ = of(); // reset pagination
    this.pagination$ = this.selectors$.entityActions$.pipe(
      map(action => (action as any).payload.pagination)
    );
  }

  /**
   * Delete item
   * @param id department id
   * @param target html element
   */
  deleteItem(id: number, target: HTMLElement) {
    this.confirmDialogService.setConfirmation("Vous êtes sûr de vouloir supprimer?", () => {
      this.delete(id)
        .pipe(
          this.toast.observe({
            loading: "Suppression...",
            success: () => {
              target.closest("tr").remove();
              return "Départ supprimé avec succès";
            },
            error: "un problème est survenu, veuillez réessayer",
          })
        )
        .subscribe();
    });
  }

  /**
   * Search
   */
  onSearch(): void {
    this.page = 1;
    this.lastSearchedParams = this.departmentForm.value;
    this.findByCriteria({ page: 1, ...this.lastSearchedParams });
  }

  /**
   * Persist : Create
   */
  onCreate(): void {
    let form = this.departmentForm;
    this.submitted = true;
    if (form.invalid) return;
    this.submitted = false;
    this.isLoading = true;
    let toast = this.toast;
    let observable: Observable<Department>;
    let obj = form.value;
    let _this = this;
    // remove empty values
    let department = Object.keys(obj)
      .filter((k) => obj[k] != "" && obj[k] != null)
      .reduce((a, k) => ({ ...a, [k]: obj[k] }), {}) as Department;
    // if has attachment add new observable to upload the file
    if (this.selectedFile) {
      // upload the attach file id to department
      observable = this.MediasService.Upload(this.selectedFile[0]).pipe(
        switchMap(response => {
          department.visuel = response["@id"];
          return this.add(department);
        }),
      );
    } else {
      observable = this.add(department);
    }

    // subscribe
    observable.subscribe({
      error: () => {
        _this.isLoading = false;
        toast.error("un problème est survenu, veuillez réessayer")
      },
      complete() {
        form.reset();
        _this.isLoading = false;
        _this.selectedFile = null;
        toast.success("Départ ajouté avec succès");
      },
    });
  }
  /**
   * Persist : update
   */
  onUpdate(id: number): void {
    let form = this.departmentForm;
    this.submitted = true;
    if (form.invalid) return;
    this.submitted = false;
    this.isLoading = true;
    let _this = this;
    let toast = this.toast;
    let observables = [];
    let obj = form.value;
    // remove empty values
    let department: Department = {
      ...Object.keys(obj)
        .filter((k) => obj[k] != "" && obj[k] != null)
        .reduce((a, k) => ({ ...a, [k]: obj[k] }), {})
    };
    department.id = id;
    this.FileRemoved !== false && (department.visuel = null);
    // x if added (for first time just add it id)
    // if updated remove the old one and update the id
    // if removed remove it id and delete it from server

    // if has attachment add new observable to upload the file
    if (this.selectedFile) {
      this.isLoading = true;
      // upload the attach file id to department
      observables.push(
        this.MediasService.Upload(this.selectedFile[0]).pipe(
          switchMap(obj => {
            this.uploadedFile = { id: obj.id, url: obj.contentUrl };
            this.selectedFile = null;
            this.FileRemoved = false;
            department.visuel = obj["@id"];
            return this.update(department);
          }),
        ));
    } else {
      observables.push(this.update(department))
    }


    // subscribe
    forkJoin(observables).subscribe({
      error: () => {
        _this.isLoading = false;
        toast.error("un problème est survenu, veuillez réessayer")
      },
      complete() {
        if (_this.FileRemoved !== false) {
          _this.MediasService.delete(_this.FileRemoved as number).subscribe(() => {
            _this.isLoading = false;
            toast.success("Départ a été mis à jour avec succès");
          })
        } else {
          _this.isLoading = false;
          toast.success("Départ a été mis à jour avec succès");
        }
      },
    });

  }

  get titre() {
    return this.departmentForm.get("titre");
  }
  get visuel() {
    return this.departmentForm.get("visuel");
  }
  get team() {
    return this.departmentForm.get("team");
  }

  /**
   * find By Criteria
   * @param obj query parameters
   */
  findByCriteria(obj): void {
    this.departments$ = of([]); // clear table
    // remove empty values
    let queryParams = Object.keys(obj)
      .filter((k) => obj[k] != "" && obj[k] != null)
      .reduce((a, k) => ({ ...a, [k]: obj[k] }), {});
    this.departments$ = this.getWithQuery(queryParams);
    this.getPagination();
  }

  /**
   * on Paginate
   * @param page page to search for
   */
  onPaginate(page: number) {
    this.findByCriteria({ page: page, ...this.lastSearchedParams });
  }
}
