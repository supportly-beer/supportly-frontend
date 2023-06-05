import {Component, ViewChild} from "@angular/core";


import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke,

} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: []
})
export class DashboardComponent {
  @ViewChild("chartComponent") chartComponent!: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;

  constructor() {
    this.chartOptions = {
      series: [{
        name: "series1",
        data: [this.randomData, this.randomData, this.randomData, this.randomData,
               this.randomData, this.randomData, this.randomData, this.randomData,
               this.randomData, this.randomData, this.randomData, this.randomData,
               this.randomData, this.randomData, this.randomData, this.randomData,
               this.randomData, this.randomData, this.randomData, this.randomData
             , this.randomData, this.randomData, this.randomData, this.randomData]
      }],
      chart: {
        height: '290',
        type: "area",
        toolbar: false,
      },

      annotations: {
        yaxis: [
          {
            y: 0,
            strokeDashArray: 0,
            borderColor: "#333",
            fillColor: "#c2c2c2",
            opacity: 0.8,
            offsetX: 0,
            offsetY: 0
          }
        ]
      },

      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        axisBorder: {
          show: false
        },
        type: "datetime",
        categories: [
          "2023-06-02T00:00:00.000Z",
          "2023-06-02T01:30:00.000Z",
          "2023-06-02T02:30:00.000Z",
          "2023-06-02T03:30:00.000Z",
          "2023-06-02T04:30:00.000Z",
          "2023-06-02T05:30:00.000Z",
          "2023-06-02T06:30:00.000Z",
          "2023-06-02T07:30:00.000Z",
          "2023-06-02T08:30:00.000Z",
          "2023-06-02T09:30:00.000Z",
          "2023-06-02T10:30:00.000Z",
          "2023-06-02T11:30:00.000Z",
          "2023-06-02T12:30:00.000Z",
          "2023-06-02T13:30:00.000Z",
          "2023-06-02T14:30:00.000Z",
          "2023-06-02T15:30:00.000Z",
          "2023-06-02T16:30:00.000Z",
          "2023-06-02T17:30:00.000Z",
          "2023-06-02T18:30:00.000Z",
          "2023-06-02T19:30:00.000Z",
          "2023-06-02T20:30:00.000Z",
          "2023-06-02T21:30:00.000Z",
          "2023-06-02T22:30:00.000Z",
          "2023-06-02T23:30:00.000Z"
        ],

      },
      grid: {
        yaxis:{
          lines:{
            show: false
          }
        }
      },
      tooltip: {
        x: {
          format: "dd/MM/yyyy HH:mm"
        }
      }
    };
  }


  get randomData() {
    return Math.round(Math.random() * 100);
  }

}
