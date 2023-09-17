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
    this.ReportStats();


    service.visiteForm = fb.group({
      nbSupport: [null],
      before: [""],
      after: [""],
      "node_a.department.id[]": [""],
      "node_a.id[]": [''],
      "node_b.id[]": [''],
      "node_a.department.team.id[]": [""],
    });

    config.notFoundText = 'Aucune donnée trouvée !';
  }

  ReportStats() {
    this.visitsStats$ = this.http.get(`${this.server}/api/analytics/visits-stats/`).pipe(
      map(data => {
        console.log(data);
        let VistesByCommune = data["VistesByCommune"];
        let currentMonthTasks = data["anomaliesPrev"]*1;
        let lastMonthTasks = data["anomaliesCurrent"]*1;
        data["percentageChange"] = 0;
        // Calculate the percentage change
        if(lastMonthTasks){
          data["percentageChange"] = ((currentMonthTasks - lastMonthTasks) / lastMonthTasks) * 100;
        }

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
