import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { NgSelectConfig } from "@ng-select/ng-select";
import { AuthenticationService } from "src/app/core/services/auth.service";
import { visiteService } from "../visite.service";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Component({
  selector: "app-visites-list",
  templateUrl: "./visites-list.component.html",
})
export class visitesListComponent {
  readonly server = environment.serverURL;
  breadCrumbItems: Array<{}>;
  Math: any = Math;
  Chartdata: any;
  visitsStats$;

  constructor(
    public service: visiteService,
    private fb: FormBuilder,
    public authService: AuthenticationService,
    private http: HttpClient,
    private config: NgSelectConfig,
  ) {
    service.findAll();
    service.loadTeams();
    service.loadANodes();
    service.loadBNodes();
    service.loadDepartments();

    config.notFoundText = 'Aucune donnée trouvée !';

    service.visiteForm = fb.group({
      nbSupport: [null],
      before: [""],
      after: [""],
      "node_a.department.id[]": [""],
      "node_a.id[]": [''],
      "node_b.id[]": [''],
      "node_a.department.team.id[]": [""],
    });

  }

  ReportStats(selectedMonth: string) {
    this.visitsStats$ = this.http.get(`${this.server}/api/analytics/visits-stats/`).pipe(
      map(data => {
        console.log(data);
        let VistesByCommune = data["VistesByCommune"];
        let currentMonthTasks = data["anomaliesCurrent"]*1;
        let lastMonthTasks = data["anomaliesPrev"]*1;
        // Calculate the difference 
        data["difference"] = currentMonthTasks - lastMonthTasks;

        this.Chartdata = {
          empty: VistesByCommune.length == 0,
          chart: {
            height: 220,
            type: 'bar',
            toolbar: {
              show: false
            }
          },
          plotOptions: {
            bar: {
              horizontal: true,
            }
          },
          dataLabels: {
            enabled: false
          },
          series: [{
            data: VistesByCommune.map(item => item.VISTES)
          }],
          colors: ['#269ffb'],
          xaxis: {
            // tslint:disable-next-line: max-line-length
            categories: VistesByCommune.map(item => item.COMMUNE),
          },
          yaxis: {
            labels: {
              formatter: value => Math.round(value)
            },
          },
          grid: {
            borderColor: '#f1f1f1'
          },
        };

        
        return data;
      })
    )
  }
}
