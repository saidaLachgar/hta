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
  Math = Math;
  breadCrumbItems: Array<{}>;
  ShowSearch: boolean = false;
  DMSMonthly: boolean;
  months: { value: number, label: string }[] = [];
  selectedMonth: number;
  missionsStats$;
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
    this.generateMonths();
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

  }

  private generateMonths() {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth()+1;
    const monthMap = ["JAN", "FÉV", "MAR", "AVR","MAI", "JUN", "JUL", "AOÛ","SEP", "OCT", "NOV", "DÉC"];
    for (let month = currentMonth; month >= 1; month--) {
      this.months.push({
        value: month,
        label: monthMap[month-1]
      });
    }
    this.selectedMonth = currentMonth;
    this.ReportStats();
  }

  // isToday(date: string): boolean {
  //   return isSameDay(new Date(date), new Date());
  // }

  ReportStats() {
    this.missionsStats$ = this.http.get(`${this.server}/api/analytics/mission-stats/` + this.selectedMonth).pipe(
      map(data => {
        let causes = Object.values(data)
          .filter((v, i) => Object.keys(data)[i].includes("Cause_"))
          .map(value => value ? parseInt(value, 10) : 0);
        let previousDuration = data["prevDuration"] / 3600;
        let currentDuration = data["Duration"] / 3600;
        data["Duration"] = currentDuration;
        // Calculate the percentage difference
        if (previousDuration && currentDuration) {
          data["prevDuration"] = ((currentDuration - previousDuration) / previousDuration) * 100;
        }

        data['causes'] = causes.reduce((a, b) => a + b, 0) === 0 ? null : {
          series: causes,
          chart: {
            width: 400,
            type: "pie"
          },
          labels: this.service.causesList.slice(this.service.causesList.length / 2),
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
        data["types"] = {
          series: [
            {
              name: "distibuted",
              data: [parseInt(data["Incident"]), parseInt(data["Coupeur"])]
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
          yaxis: {
            labels: {
              formatter: value => Math.round(value)
            },
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
        console.log(data);
        
        return data;
      })
    )
  }

  ReportDMS(yearly: boolean = true) {
    const decimalHourToTimePipe = new DecimalHourToTimePipe();
    this.DMSMonthly = !yearly;
    this.DMSChart$ = this.http.get(`${this.server}/api/analytics/teams-dms` + (yearly ? "" : "/month")).pipe(
      map(data => {
        let totalDMS = 0;
        const monthMap: { [key: string]: string } = {
          "01": "JAN", "02": "FÉV", "03": "MAR", "04": "AVR",
          "05": "MAI", "06": "JUN", "07": "JUL", "08": "AOÛ",
          "09": "SEP", "10": "OCT", "11": "NOV", "12": "DÉC"
        };

        const statData = {
          series: [],
          chart: {
            height: 256,
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
            ...(!yearly && { title: { text: '30 derniers jours' } }),
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
              let dms = parseFloat(monthData["DMS_TOTAL"]);
              console.log(dms);
              
              dms && (totalDMS += dms)
              return dms;
            })
          });
        }
        statData["totalDMS"] = totalDMS;
        return statData;
      })
    );

  }
}
