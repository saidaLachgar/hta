import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { NgSelectConfig } from "@ng-select/ng-select";
import { AuthenticationService } from "src/app/core/services/auth.service";
import { visiteService } from "../visite.service";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { monthMap } from 'src/app/core/const/months-map';

@Component({
  selector: "app-visites-list",
  templateUrl: "./visites-list.component.html",
})
export class visitesListComponent {
  readonly server = environment.serverURL;
  breadCrumbItems: Array<{}>;
  selectedMonth: string;
  Math: any = Math;
  statsPerMonth$;
  visitsParCommunes$;
  teamCoveredDistance$;
  totalCoveredDistance$;

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
    this.visitsParCommunes();
    this.teamCoveredDistance();
    this.totalCoveredDistance();

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

  statsPerMonth(selectedMonth: string) {
    this.selectedMonth = monthMap[parseInt(selectedMonth) - 1];
    this.statsPerMonth$ = this.http.get(`${this.server}/api/analytics/visits-stats/stats-per-month?m=`+selectedMonth).pipe(
      map(data => {
        console.log(data);
        let currentMonthTasks = data["anomaliesCurrent"]*1;
        let lastMonthTasks = data["anomaliesPrev"]*1;
        // Calculate the difference 
        data["difference"] = currentMonthTasks - lastMonthTasks;
        return data;
      })
    )
  }

  totalCoveredDistance() {
    this.totalCoveredDistance$ = this.http.get(`${this.server}/api/analytics/visits-stats/total-covered-distance/`);
  }

  teamCoveredDistance() {
    this.teamCoveredDistance$ = this.http.get(`${this.server}/api/analytics/visits-stats/team-covered-distance/`);
  }

  visitsParCommunes() {
    this.visitsParCommunes$ = this.http.get<any>(`${this.server}/api/analytics/visits-stats/visits-per-communes`).pipe(map( data => 
      ({
          empty: data.length == 0,
          series: [
          {
            name: "Nombre de visites",
            data: data.map(item => item.VISTES)
          }
        ],

        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                height: "auto"
              },
            }
          }
        ],
        chart: {
          height: 350,
          type: "bar",
        },
        plotOptions: {
          bar: {
            columnWidth: "45%",
            distributed: true
          }
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          show: false
        },
        grid: {
          show: false
        },
        xaxis: {
          categories: data.map(item => item.COMMUNE),
        },
        yaxis: {
          labels: {
            formatter: value => Math.round(value)
          },
        },
      })
    ));
  }
}
