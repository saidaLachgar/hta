import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { NgSelectConfig } from "@ng-select/ng-select";
import { AuthenticationService } from "src/app/core/services/auth.service";
import { missionService } from "../mission.service";
import { isSameDay, setDefaultOptions } from 'date-fns';
import fr from 'date-fns/locale/fr';
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { DecimalHourToTimePipe } from "src/app/core/pipes";
setDefaultOptions({ locale: fr })

@Component({
  selector: "app-mission-list",
  templateUrl: "./mission-list.component.html",
})
export class missionListComponent {
  readonly server = environment.serverURL;
  breadCrumbItems: Array<{}>;
  ShowSearch: boolean = false;
  DMSMonthly: boolean;
  causesChart;
  typesChart;
  DMSChart$;

  constructor(
    public service: missionService,
    private fb: FormBuilder,
    public authService: AuthenticationService,
    private http: HttpClient,
    private config: NgSelectConfig
  ) {
    service.findAll();
    service.loadTeams();
    service.loadANodes();
    service.loadBNodes();
    service.loadDepartments();
    this.ReportDMS();
    config.notFoundText = 'Aucune donnée trouvée !';
    service.missionForm = fb.group({
      "node_a.department.id[]": [''],
      "node_a.id[]": [''],
      "node_b.id[]": [''],
      "node_a.department.team.id[]": [""],
      after: [null],
      before: [null],
      causes: [""],
      DMS: [null],
      IFS: [null],
      END: [null],
      type: [null],
    });



    this.causesChart = {
      series: [44, 55, 13, 43],
      chart: {
        width: 400,
        type: "pie"
      },
      labels: service.causesList.slice(service.causesList.length / 2),
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };

    this.typesChart = {
      series: [
        {
          name: "distibuted",
          data: [21, 10]
        }
      ],
      chart: {
        height: 250,
        type: "bar",
      },
      colors: [
        "#008FFB",
        "#FF4560",
      ],
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
        categories: [
          'Incident',
          'Coupeur',
        ],
        labels: {
          style: {
            colors: [
              "#FF4560",
              "#008FFB",
            ],
            fontSize: "12px"
          }
        }
      }
    };

  }



  isToday(date: string): boolean {
    return isSameDay(new Date(date), new Date());
  }

  // humanReadable(date){
  //   return formatDistanceToNow(parseDate(date), { includeSeconds: true, addSuffix: true });  // "a day ago"
  // }


  ReportDMS(yearly: boolean = true) {
    const decimalHourToTimePipe = new DecimalHourToTimePipe();
    this.DMSMonthly = !yearly;
    this.DMSChart$ = this.http.get(`${this.server}/api/analytics/teams-dms` + (yearly ? "" : "/month")).pipe(
      map(data => {
        const monthMap: { [key: string]: string } = {
          "01": "JAN", "02": "FÉV", "03": "MAR", "04": "AVR",
          "05": "MAI", "06": "JUN", "07": "JUL", "08": "AOÛ",
          "09": "SEP", "10": "OCT", "11": "NOV", "12": "DÉC"
        };

        const statData = {
          series: [],
          chart: {
            height: 275,
            type: "line"
          },
          dataLabels: {
            enabled: false,
          },
          yaxis: {
            labels: {
              rotate: -45,
              formatter: function (value) {
                // return val.toFixed(3);
                return decimalHourToTimePipe.transform(value);
              }
            },
          },
          stroke: {
            curve: "smooth"
          },
          xaxis: {
            labels: {
              rotate: -45
            },
            categories: [],
            ...(!yearly && {title: {text: '30 derniers jours'}}),
          },
        };
        // console.log(data);

        for (const teamName in data) {
          statData.series.push({
            name: teamName,
            data: data[teamName].map(monthData => {
              statData.xaxis.categories.push(
                yearly ? monthMap[monthData["MONTH"]] : monthData["DAY"]
              );
              return monthData["DMS_TOTAL"];
            })
          });
        }

        return statData;
      })
    );

  }
}
