import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { HotToastService } from "@ngneat/hot-toast";
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from "@ngrx/data";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { Commune, Pagination } from "src/app/core/models";
import { ConfirmDialogService } from "src/app/shared/components/confirm-dialog/confirm-dialog.service";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class communeService extends EntityCollectionServiceBase<Commune> {
  readonly pageSize = environment.pageSize;
  public communeForm: FormGroup;
  communes$: Observable<Commune[]>;
  pagination$: Observable<Pagination>;
  persistence: boolean | number = false;
  submitted: boolean = false;
  page: number = 1;
  lastSearchedParams;

  constructor(
    private serviceElementsFactory: EntityCollectionServiceElementsFactory,
    private confirmDialogService: ConfirmDialogService,
    private toast: HotToastService,
  ) {
    super("communes", serviceElementsFactory);
  }

  /**
   * Get records
   */
  findAll(): void {
    this.findByCriteria({ page: 1 });
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
   * @param id commune id
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
              return "Commune supprimé avec succès";
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
    this.lastSearchedParams = this.communeForm.value;
    this.findByCriteria({ page: 1, ...this.lastSearchedParams });
  }

  /**
   * Persist : Save
   */
  onSave(): void {
    let form = this.communeForm;
    this.submitted = true;
    if (form.invalid) return;
    let toast = this.toast;
    let _this = this;
    let observable: Observable<Commune>;
    if (this.persistence === false) {
      let commune = form.value as Commune;
      observable = this.add(commune);
    } else {
      let commune:Commune = { ...form.value };
      commune.id = this.persistence as number;
      observable = this.update(commune);
    }
    observable.subscribe({
      error: () => toast.error("un problème est survenu, veuillez réessayer"),
      complete() {
        form.reset();
        _this.findByCriteria({ page: 1, ..._this.lastSearchedParams });
        toast.success(`Commune a été ${_this.persistence === false ? 'ajouté' : 'mis à jour'} avec succès`);
        _this.persistence = false;
        _this.submitted = false;
      },
    });
  }

  /**
   * Toggle update
   */
  onUpdate(id: number, titre: string): void {
    this.persistence = id;
    this.communeForm.setValue({
      titre: titre,
    });
  }

  get titre() {
    return this.communeForm.get("titre");
  }

  /**
   * find By Criteria
   * @param obj query parameters
   */
  findByCriteria(obj): void {
    this.communes$ = of([]); // clear table
    // remove empty values
    let queryParams = Object.keys(obj)
      .filter((k) => obj[k] != "" && obj[k] != null)
      .reduce((a, k) => ({ ...a, [k]: obj[k] }), {});
    this.communes$ = this.getWithQuery(queryParams);
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
