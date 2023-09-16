import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from "@ngrx/data";
import { Observable, Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Goal, Objective } from "src/app/core/models";
import { environment } from "src/environments/environment";
import { goalService } from "../goals/goal.service";

@Injectable({
  providedIn: "root",
})
export class ObjectivesService extends EntityCollectionServiceBase<Objective> {
  private server = environment.serverURL;

  goals$: Observable<Goal[]>;
  goalLoading = false;
  goalInput$ = new Subject<string>();

  constructor(
    private http: HttpClient,
    private goalervice: goalService,
    private serviceElementsFactory: EntityCollectionServiceElementsFactory
  ) {
    super("objectives", serviceElementsFactory);
  }

  loadGoals(): void {
    this.goals$ = this.goalervice.getWithQuery("properties[]=id&properties[]=name");
  }

  /**
   * Get records
   */
  getData(year: number): Observable<string[]> {
    return this.http
      .get<string[]>(`${this.server}/api/objectives/get-achievements?year=${year}`)
      .pipe(
        map(response => response["hydra:member"][0])
      );
  }
}