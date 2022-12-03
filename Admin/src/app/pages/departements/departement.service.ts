import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { HotToastService } from "@ngneat/hot-toast";
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from "@ngrx/data";
import { forkJoin, Observable, of } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { Departement, Pagination, Team } from "src/app/core/models";
import { ConfirmDialogService } from "src/app/shared/components/confirm-dialog/confirm-dialog.service";
import { environment } from "src/environments/environment";
import { mediasService } from "../medias/media.service";

@Injectable({
  providedIn: "root",
})
export class departementService extends EntityCollectionServiceBase<Departement> {
  readonly pageSize = environment.pageSize;
  public departementForm: FormGroup;
  private server = environment.serverURL;
  departements$: Observable<Departement[]>;
  teams$: Observable<Team[]>;
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
    super("departements", serviceElementsFactory);
  }

  /**
   * Get records
   */
  findAll(): void {
    this.findByCriteria({ page: 1 });
  }

  loadTeams(): void {
    this.teams$ = this.http.get<Team[]>(`${this.server}/api/teams?properties[]=id&properties[]=titre`)
    .pipe(map(response => response["hydra:member"]));
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
   * @param id departement id
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
              return "Département supprimé avec succès";
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
    this.lastSearchedParams = this.departementForm.value;
    this.findByCriteria({ page: 1, ...this.lastSearchedParams });
  }

  /**
   * Persist : Create
   */
  onCreate(): void {
    let form = this.departementForm;
    this.submitted = true;
    if (form.invalid) return;
    this.submitted = false;
    this.isLoading = true;
    let toast = this.toast;
    let observable: Observable<Departement>;
    let obj = form.value;
    let _this = this;
    // remove empty values
    let departement = Object.keys(obj)
      .filter((k) => obj[k] != "" && obj[k] != null)
      .reduce((a, k) => ({ ...a, [k]: obj[k] }), {}) as Departement;
    // if has attachment add new observable to upload the file
    if (this.selectedFile) {
      // upload the attach file id to departement
      observable = this.MediasService.Upload(this.selectedFile[0]).pipe(
        switchMap(response => {
          departement.visuel = response["@id"];
          return this.add(departement);
        }),
      );
    } else {
      observable = this.add(departement);
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
        toast.success("Département ajouté avec succès");
      },
    });
  }
  /**
   * Persist : update
   */
  onUpdate(id: number): void {
    let form = this.departementForm;
    this.submitted = true;
    if (form.invalid) return;
    this.submitted = false;
    this.isLoading = true;
    let _this = this;
    let toast = this.toast;
    let observables = [];
    let obj = form.value;
    // remove empty values
    let departement: Departement = {
      ...Object.keys(obj)
        .filter((k) => obj[k] != "" && obj[k] != null)
        .reduce((a, k) => ({ ...a, [k]: obj[k] }), {})
    };
    departement.id = id;
    this.FileRemoved !== false && (departement.visuel = null);
    // x if added (for first time just add it id)
    // if updated remove the old one and update the id
    // if removed remove it id and delete it from server

    // if has attachment add new observable to upload the file
    if (this.selectedFile) {
      this.isLoading = true;
      // upload the attach file id to departement
      observables.push(
        this.MediasService.Upload(this.selectedFile[0]).pipe(
          switchMap(obj => {
            this.uploadedFile = { id: obj.id, url: obj.contentUrl };
            this.selectedFile = null;
            this.FileRemoved = false;
            departement.visuel = obj["@id"];
            return this.update(departement);
          }),
        ));
    } else {
      observables.push(this.update(departement))
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
            toast.success("Département a été mis à jour avec succès");
          })
        } else {
          _this.isLoading = false;
          toast.success("Département a été mis à jour avec succès");
        }
      },
    });

  }

  get titre() {
    return this.departementForm.get("titre");
  }
  get visuel() {
    return this.departementForm.get("visuel");
  }
  get team() {
    return this.departementForm.get("team");
  }

  /**
   * find By Criteria
   * @param obj query parameters
   */
  findByCriteria(obj): void {
    this.departements$ = of([]); // clear table
    // remove empty values
    let queryParams = Object.keys(obj)
      .filter((k) => obj[k] != "" && obj[k] != null)
      .reduce((a, k) => ({ ...a, [k]: obj[k] }), {});
    this.departements$ = this.getWithQuery(queryParams);
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
