import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Dps, Team } from "src/app/core/models";
import { environment } from "src/environments/environment";
import { teamService } from "../teams/team.service";
import { dpsService } from "../dps/dps.service";

@Injectable({
  providedIn: "root",
})
export class statistiquesService  {
  private server = environment.serverURL;

  teams$: Observable<Team[]>;
  dps$: Observable<Dps[]>;

  constructor(
    private http: HttpClient,
    private teamService: teamService,
    private dpsService: dpsService,
  ) {
  }

  loadTeams(): void {
    this.teams$ = this.teamService.getWithQuery("properties[]=id&properties[]=name");
  }
  loadDps(): void {
    this.dps$ = this.dpsService.getWithQuery("properties[]=id&properties[]=name");
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