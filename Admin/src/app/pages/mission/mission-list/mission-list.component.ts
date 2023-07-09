import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { NgSelectConfig } from "@ng-select/ng-select";
import { AuthenticationService } from "src/app/core/services/auth.service";
import { missionService } from "../mission.service";
import {  isSameDay, setDefaultOptions } from 'date-fns';
import fr from 'date-fns/locale/fr';
setDefaultOptions({ locale: fr })

@Component({
  selector: "app-mission-list",
  templateUrl: "./mission-list.component.html",
})
export class missionListComponent {
  breadCrumbItems: Array<{}>;
  ShowSearch: boolean = false;
  DMSMonthly: boolean;
  causesChart;
  typesChart;
  DMSChart;

  constructor(
    public service: missionService,
    private fb: FormBuilder,
    public authService: AuthenticationService,
    private config: NgSelectConfig
  ) {
    service.findAll();
    service.loadANodes();
    service.loadBNodes();
    service.loadDepartments();
    this.ReportDMS(true);

    service.missionForm = fb.group({
      "node_a.department.id[]": [''],
      "node_a.id[]": [''],
      "node_b.id[]": [''],
      after: [null],
      before: [null],
      causes: [""],
      DMS: [null],
      IFS: [null],
      type: [null],
    });

    config.notFoundText = 'Aucune donnée trouvée !';

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

    this.DMSChart = {
      series: [
        {
          name: "Equpe 1",
          data: [0.31, 0.40, 0.28, 0.51, 0.42, 0.109, 0.100]
        },
        {
          name: "Equpe 2",
          data: [ 0.42, 0.109, 0.31, 0.40, 0.28, 0.51, 0.100]
        },
        {
          name: "Equpe 3",
          data: [0.51, 0.42, 0.109, 0.31, 0.40, 0.28, 0.100]
        },
        // {
        //   name: "Equpe 4",
        //   data: [0.28, 0.51, 0.42, 0.31, 0.40, 0.109, 0.100]
        // },
      ],
      chart: {
        height: 275,
        type: "line"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']},
      // colors: [
      //   // "#FF4560",
      //   "#008FFB",
      //   '#F44336', '#E91E63'
      //   , '#9C27B0'
      // ],
    };


  }

  

  isToday(date: string): boolean {
    return isSameDay(new Date(date), new Date());
  }

  // humanReadable(date){
  //   return formatDistanceToNow(parseDate(date), { includeSeconds: true, addSuffix: true });  // "a day ago"
  // }


  ReportDMS(DMSMonthly:boolean){
    this.DMSMonthly = DMSMonthly;
  }
}
