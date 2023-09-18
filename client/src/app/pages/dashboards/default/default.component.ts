import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { DecimalHourToTimePipe } from 'src/app/core/pipes';
import { AuthenticationService } from 'src/app/core/services/auth.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  readonly server = environment.serverURL;
  isVisible: string;
  isActive: string;
  today: Date = new Date();
  AnomaliesPerTeamChart;
  teamsStats$;
  teamsCharts$;
  teamsAnomalies$;

  constructor(
    private http: HttpClient,
    public authService: AuthenticationService,
  ) {
    this.teamsStats$ = http.get(`${this.server}/api/analytics/teams-data`).pipe();
    this.teamsAnomalies$ = http.get(`${this.server}/api/analytics/teams-anomalies`).pipe(
      map(data => this.anomaliesPerTeamChart(data))
    );
    this.teamsCharts$ = http.get(`${this.server}/api/analytics/teams-monthly-data`).pipe(
      map(data => this.teamsMonthlyStatsChart(data))
    );
  }

  ngOnInit() {
    //  horizontal-vertical layput set
    const attribute = document.body.getAttribute('data-layout');
    const vertical = document.getElementById('layout-vertical');
    this.isVisible = attribute;
    vertical && vertical.setAttribute('checked', 'true');
  }

  teamsMonthlyStatsChart(data: any): any {
    const decimalHourToTimePipe = new DecimalHourToTimePipe();
    const statTypes = ['DMS_TOTAL', 'END_TOTAL', 'IFS_TOTAL'];
    const monthMap: { [key: string]: string } = {
      "01": "JAN", "02": "FÉV", "03": "MAR", "04": "AVR",
      "05": "MAI", "06": "JUN", "07": "JUL", "08": "AOÛ",
      "09": "SEP", "10": "OCT", "11": "NOV", "12": "DÉC"
    };
    let structuredData = [];

    for (const statType of statTypes) {
      const statData = {
        type: statType,
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
              if(statType == "IFS_TOTAL") {
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
            statData.xaxis.categories.push(monthMap[monthData["MONTH"]]);
            return monthData[statType];
          })
        });
      }

      structuredData.push(statData);
    }

    // console.log(structuredData);

    return structuredData;
  }

  anomaliesPerTeamChart(data: any): any {
    return{
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
        categories: data.map(item => item.TEAM)
      },
      yaxis: {
        labels: {
          formatter: value => Math.round(value)
        },
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
  }

}
