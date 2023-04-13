import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from "@ngrx/data";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Objective } from "src/app/core/models";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ObjectivesService extends EntityCollectionServiceBase<Objective> {
  private server = environment.serverURL;
  public ObjectivesForm: FormGroup;

  constructor(
    private http: HttpClient,
    private serviceElementsFactory: EntityCollectionServiceElementsFactory
  ) {
    super("objectives", serviceElementsFactory);
  }

  /**
   * Get records
   */
  getData(year: number): Observable<string[]> {
    return this.http
      .get<string[]>(`${this.server}/api/objectives/get-achievements?year=${year}`)
      .pipe(
        // map(response => response["hydra:member"][0])
        map((response) => {
          console.log(response["hydra:member"][0]);
          return response["hydra:member"][0];
        })
      );
  }
}
// http://127.0.0.1:8000/objectives/get-achievements?year=2023
// http://127.0.0.1:8000/api/objectives/get-achievements?year=2023&page=1