import { Injectable } from "@angular/core";
import { concat, Observable, of, Subject } from "rxjs";
import { catchError, distinctUntilChanged, filter, switchMap, tap } from "rxjs/operators";
import { Departement } from "src/app/core/models";
import { departementService } from "../departements/departement.service";

@Injectable({
  providedIn: "root",
})
export class visiteService {

  departements$: Observable<Departement[]>;
  departementLoading = false;
  departementInput$ = new Subject<string>();


  constructor(
    public DepartementService: departementService,
  ) {
  }

 
  loadDepartements(defaultVal = []) : void{
    this.departements$ = concat(
      of(defaultVal), // default items
      this.departementInput$.pipe(
          distinctUntilChanged(),
          filter((val) => val != null),
          tap(() => this.departementLoading = true),
          switchMap(term => this.DepartementService.getWithQuery("properties[]=id&properties[]=titre&titre="+term).pipe(
              catchError(() => of([])), // empty list on error
              tap(() => this.departementLoading = false)
          ))
      )
    );
  }
  
}
