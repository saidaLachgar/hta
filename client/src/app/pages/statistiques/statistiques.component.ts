import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { map } from "rxjs/operators";
import { CausesList } from "src/app/core/models";
import { DecimalHourToTimePipe } from "src/app/core/pipes";
import { AuthenticationService } from "src/app/core/services/auth.service";
import { environment } from 'src/environments/environment';
import { statistiquesService } from "./statistiques.service";

const zeroPad = (num, places = 2) => String(num).padStart(places, '0');
const DateToString = (date) => `${date.year}-${zeroPad(date.month)}-${zeroPad(date.day)}`;

@Component({
  selector: "app-statistiques",
  templateUrl: "./statistiques.component.html",
})
export class StatistiquesComponent {
  readonly server = environment.serverURL;
  readonly url = `${this.server}/api/analytics/by-team`;
  causesList = Object.keys(CausesList);
  dateToString = DateToString;
  form: FormGroup;
  today: Date = new Date();
  submitted: boolean = false;
  DMSType: boolean = true;
  IFSType: boolean = true;
  ENDType: boolean = true;
  postesStatsSubmitted: boolean = false;
  selectedPoste;
  RelatedPostes$;
  TotalActivity$;
  CausesAndType$;
  AnomalyCorrection$;
  InterruptionsPerformance$;
  PostInterruptionInfo$;
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
    let fields = form.value;
    let args = {
      dateStart: fields.dateStart ? DateToString(fields.dateStart) : null,
      dateEnd: fields.dateEnd ? DateToString(fields.dateEnd) : null,
      team: fields.team,
    }
    // console.log(form.value);
    // console.log(args);

    // Total des interruptions -  Total des Vistes -  Total des anomalies
    this.TotalActivity$ = this.http.post<[]>(this.url, {
      "stats": "TotalActivity",
      ...(args)
    }).pipe();

    // Causes And Types
    this.CausesAndType$ = this.http.post<[]>(this.url, {
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
          "#FF4560",
          "#008FFB",
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

    // DMS - IFS - END
    this.InterruptionsPerformance$ = this.http.post<any>(this.url, {
      "stats": "InterruptionsPerformance",
      ...(args)
    }).pipe(map(data => {
      const decimalHourToTimePipe = new DecimalHourToTimePipe();
      const statTypes = ['DMS_TOTAL', 'END_TOTAL', 'IFS_TOTAL'];
      let structuredData = [];

      for (const statType of statTypes) {

        const statData = {
          type: statType,
          incident_total: data.reduce((accumulator, item) =>
            accumulator + parseFloat(item[`${statType}_INCIDENT`]), 0),
          coupeur_total: data.reduce((accumulator, item) =>
            accumulator + parseFloat(item[`${statType}_COUPEUR`]), 0),
          incident_series: [{
            name: "distibuted",
            data: data.map(item => item[`${statType}_INCIDENT`])
          }],
          coupeur_series: [{
            name: "distibuted",
            data: data.map(item => item[`${statType}_COUPEUR`])
          }],

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
            height: 300,
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
            categories: data.map(item => item.DEPARTMENT),
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
        }

        structuredData.push(statData);
      }

      console.log(structuredData);
      return structuredData;
    }));

    // Taux de correction des anomalies
    this.AnomalyCorrection$ = this.http.post<any>(this.url, {
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
          height: 300,
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
              chart: {
                height: "auto"
              },
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

    // Nombre de kilomètres visités par commune
    this.KMVisitedPerCommune$ = this.http.post<any>(this.url, {
      "stats": "KMVisitedPerCommune",
      ...(args)
    }).pipe(map(data => {
      // console.log(data.map(item => item.DISTANCE));
      // console.log(data.map(item => item.COMMUNE));
      return {
        series: [
          {
            name: "distibuted",
            data: data.map(item => item.DISTANCE)
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
          height: 300,
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
            formatter: value => value.toFixed(2) + " km"
          },
        },
      };
    }));

    // Le nombre de clients coupés par commune
    this.ClientCutsByCommune$ = this.http.post<any>(this.url, {
      "stats": "ClientCutsByCommune",
      ...(args)
    }).pipe(map(data => {
      // console.log(data.map(item => item.CLIENTS));
      // console.log(data.map(item => item.COMMUNE));

      return {
        series: [
          {
            name: "distibuted",
            data: data.map(item => item.CLIENTS)
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
          height: 300,
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

    // list of team's related poste
    this.RelatedPostes$ = this.http.post<any>(this.url, {
      "stats": "RelatedPostes",
      ...(args)
    }).pipe();

  }

  postesStats(): void {
    let args = this.form.value;
    this.postesStatsSubmitted = true;
    args.team = this.selectedPoste;
    console.log(args);

    this.PostInterruptionInfo$ = this.http.post<any>(this.url, {
      "stats": "PostInterruptionInfo",
      ...(this.form.value)
    }).pipe();
  }

  getType(chartType): boolean {
    return chartType == 'DMS_TOTAL' ? this.DMSType : (chartType == 'IFS_TOTAL' ? this.IFSType : this.ENDType);
  }
  toggleType(chartType, value): void {
    if(chartType == 'DMS_TOTAL')  this.DMSType = value 
    else if (chartType == 'IFS_TOTAL') this.IFSType = value
    else this.ENDType = value;
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
