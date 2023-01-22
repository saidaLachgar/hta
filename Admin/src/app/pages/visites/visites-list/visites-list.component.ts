import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { NgSelectConfig } from "@ng-select/ng-select";
import { AuthenticationService } from "src/app/core/services/auth.service";
import { visiteService } from "../visite.service";

// Chart data
export interface ChartType {
  chart?: any;
  plotOptions?: any;
  colors?: any;
  series?: any;
  stroke?: any;
  fill?: any;
  labels?: any;
  markers?: any;
  legend?: any;
  xaxis?: any;
  yaxis?: any;
  tooltip?: any;
  grid?: any;
  datasets?: any;
  options?: any;
  toolbar?: any;
  type?: any;
  height?: any;
  dataLabels?: any;
  sparkline?: any;
  responsive?: any;
  states?: any;
  title?: any;
  subtitle?: any;
}


@Component({
  selector: "app-visites-list",
  templateUrl: "./visites-list.component.html",
})
export class visitesListComponent {
  breadCrumbItems: Array<{}>;
  public hideExport = true;
  Chartdata: ChartType;

  constructor(
    public service: visiteService,
    private fb: FormBuilder,
    public authService: AuthenticationService,
    private config: NgSelectConfig,
  ) {
    service.findAll();
    service.loadTeams();


    service.visiteForm = fb.group({
      nbSupport: [null],
      before: [""],
      after: [""],
      "departements.id[]": [""],
      "source.id[]": [""],
      "destination.id[]": [""],
      "team.id[]": [""],
    });

    config.notFoundText = 'Aucune donnée trouvée !';


    this.Chartdata = {
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
        data: [380, 430, 450, 475, 550, 584]
      }],
      colors: ['#269ffb'],
      xaxis: {
        // tslint:disable-next-line: max-line-length
        categories: ['LAMZOUDIA', 'Chichaoua', 'SIDI BOUZID', 'Saidate', 'SIDI MED DALIL', 'Ahdil'],
      },
      grid: {
        borderColor: '#f1f1f1'
      },
    };
  }
}
