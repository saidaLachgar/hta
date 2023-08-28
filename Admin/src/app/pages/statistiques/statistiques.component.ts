import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthenticationService } from "src/app/core/services/auth.service";
import { environment } from 'src/environments/environment';
import { statistiquesService } from "./statistiques.service";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { CausesList } from "src/app/core/models";
import { DecimalHourToTimePipe } from "src/app/core/pipes";

@Component({
  selector: "app-statistiques",
  templateUrl: "./statistiques.component.html",
})
export class StatistiquesComponent {
  readonly server = environment.serverURL;
  causesList = Object.keys(CausesList);
  form: FormGroup;
  today: Date = new Date();
  submitted: boolean = false;
  TotalActivity$;
  CausesAndType$;
  InterruptionsPerformance$;
  AnomalyCorrection$;
  KMVisitedPerCommune$;
  ClientCutsByCommune$;

  constructor(
    private fb: FormBuilder,
    public service: statistiquesService,
    private http: HttpClient,
    public authService: AuthenticationService
  ) {
    this.form = this.fb.group({
      dateStart: [null],
      dateEnd: [null],
      team: [null, Validators.required],
    });
    service.loadTeams();
  }

  getStatistics() {
    let form = this.form;
    if (form.invalid) return;
    this.submitted = true;
    // console.log(form.value);

    let url = `${this.server}/api/analytics/by-team`;
    let args = form.value;

    this.TotalActivity$ = this.http.post<[]>(url, {
      "stats": "TotalActivity",
      ...(args)
    }).pipe();
    this.CausesAndType$ = this.http.post<[]>(url, {
      "stats": "CausesAndType",
      ...(args)
    }).pipe(map(data => {
      let causes = Object.values(data)
        .filter((v, i) => Object.keys(data)[i].includes("Cause_"))
        .map(value => value ? parseInt(value, 10) : 0);

      data['causes'] = causes.reduce((a, b) => a + b, 0) === 0 ? null : {
        series: causes,
        chart: {
          height: 250,
          type: "pie"
        },
        labels: this.causesList.slice(this.causesList.length / 2),
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

      return data;
    }));

    this.InterruptionsPerformance$ = this.http.post(url, {
      "stats": "InterruptionsPerformance",
      ...(args)
    }).pipe(map(data => {
      const decimalHourToTimePipe = new DecimalHourToTimePipe();
      const statTypes = ['DMS_TOTAL', 'END_TOTAL', 'IFS_TOTAL'];
      let structuredData = [];

      for (const statType of statTypes) {
        const statData = {
          type: statType,
          total: 0,
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
              formatter: function (val) {
                if (statType == "IFS_TOTAL") {
                  return val.toFixed(3);
                }
                return decimalHourToTimePipe.transform(val);
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
          },
        };
        // console.log(data);

        for (const teamName in data) {
          statData.series.push({
            name: teamName,
            data: data[teamName].map(monthData => {
              let value = parseFloat(monthData[statType]);
              statData.xaxis.categories.push(monthData["TIMEFRAME"]);
              value && (statData.total += value)
              return value;
            })
          });
        }

        structuredData.push(statData);
      }

      // console.log(structuredData);
      return structuredData;
    }));

    this.AnomalyCorrection$ = this.http.post<any>(url, {
      "stats": "AnomalyCorrection",
      ...(args)
    }).pipe(map(data => {
      return {
        series: [
          {
            name: "Réaliser",
            data: data.map(item => item.ACHIEVED_ANOMALIES)
          },
          {
            name: "Non réparé",
            data: data.map(item => item.TOTAL_ANOMALIES - item.ACHIEVED_ANOMALIES)
          }
        ],
        xaxis: {
          type: "category",
          categories: data.map(item => item.DEPARTMENT)
        },
        chart: {
          type: "bar",
          height: 275,
          stacked: true,
          toolbar: {
            show: true
          },
          zoom: {
            enabled: true
          }
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: "bottom",
                offsetX: -10,
                offsetY: 0
              }
            }
          }
        ],
        plotOptions: {
          bar: {
            horizontal: false
          }
        },
        legend: {
          position: "right",
          offsetY: 40
        },
        fill: {
          opacity: 1
        }
      };
    }));
    this.KMVisitedPerCommune$ = this.http.post<any>(url, {
      "stats": "KMVisitedPerCommune",
      ...(args)
    }).pipe(map(data => {

      return {
        series: [
          {
            name: "distibuted",
            data: data.map(item => item.CLIENTS)
          }
        ],
        chart: {
          height: 275,
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
      };

    }));
    this.ClientCutsByCommune$ = this.http.post<[]>(url, {
      "stats": "ClientCutsByCommune",
      ...(args)
    }).pipe();
    // let getPostInterruptionInfo = this.http.post<[]>(url, {
    //   "stats": "getPostInterruptionInfo",
    //   ...(args)
    // }).pipe();

  }

  get dateStart() {
    return this.form.get("dateStart");
  }
  get dateEnd() {
    return this.form.get("dateEnd");
  }
  get team() {
    return this.form.get("team");
  }
}
