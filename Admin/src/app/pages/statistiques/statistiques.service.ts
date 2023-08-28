import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Dps, Team } from "src/app/core/models";
import { environment } from "src/environments/environment";
import { teamService } from "../teams/team.service";

@Injectable({
  providedIn: "root",
})
export class statistiquesService  {
  private server = environment.serverURL;

  teams$: Observable<Team[]>;
  dps$: Observable<Dps[]>;

  constructor(
    private teamService: teamService,
  ) {
  }

  loadTeams(): void {
    this.teams$ = this.teamService.getWithQuery("properties[]=id&properties[]=titre");
  }
 

  /**
   * Get records
   */
  // getData(year: number): Observable<string[]> {
  //   return this.http
  //     .get<string[]>(`${this.server}/api/objectives/get-achievements?year=${year}`)
  //     .pipe(
  //       map(response => response["hydra:member"][0])
  //     );
  // }
}