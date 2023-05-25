import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/auth.service';
@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  isVisible: string;
  isActive: string;
  today: Date = new Date();
  AnomaliesPerTeamChart;
  DMSChart;
  IFSChart;

  constructor(
    public authService: AuthenticationService,
  ) {
    
    
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
    this.IFSChart = {
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
    };
    this.AnomaliesPerTeamChart = {
      series: [
        {
          name: "Réparé",
          data: [44, 55, 41]
        },
        {
          name: "Non réparé",
          data: [13, 23, 20]
        },
      ],
      chart: {
        type: "bar",
        height: 350,
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
      xaxis: {
        type: "category",
        categories: [
          "Equipe 1",
          "Equipe 2",
          "Equipe 3",
        ]
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

  ngOnInit() {

    /**
     * horizontal-vertical layput set
     */
     const attribute = document.body.getAttribute('data-layout');
     const vertical = document.getElementById('layout-vertical');
     this.isVisible = attribute;
     vertical && vertical.setAttribute('checked', 'true');
     
  }

}
