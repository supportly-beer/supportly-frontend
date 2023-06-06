import {Component, ViewChild} from "@angular/core";


import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexXAxis,
  ApexYAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke,

} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  fill: ApexFill;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
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
  public chartSecond: Partial<ChartOptions> | any;

  constructor() {
    this.chartOptions = {
      series: [{
        type: "area",
        name: "Tickets",
        data: [this.randomData, this.randomData, this.randomData,
          this.randomData, this.randomData, this.randomData,
          this.randomData, this.randomData, this.randomData,
          this.randomData, this.randomData, this.randomData],
      }],
      color: ["#661AE6"],

      chart: {
        height: '300',
        type: "area",
        toolbar: false,
        align: "center",
      },

      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth",
        width: 1.5,
      },

      xaxis: {
        show: false,
        axisTicks: false,
        axisBorder: {
          show: false,
        },
        categories: ["Jänner", "Februar", "März", "April", "Mai", "Juni","Juli",
                     "August", "September", "Oktober", "November", "Dezember"],
        labels: {
          show: false
        }
      },

      yaxis: {
        show: false,
      },

      fill: {
        type: "gradient",
      },

      grid: {
        yaxis: {
          lines: {show: false}
        }
      },
      tooltip: {
        enabled: true,
        followCursor: false,
        backgroundColor: "#242933",
        onDatasetHover: {
          highlightDataSeries: false,
        },
      },

    };

    this.chartSecond = {
      series: [{
        type: "area",
        name: "Tickets",
        data: [this.randomData, this.randomData, this.randomData,
          this.randomData, this.randomData, this.randomData,
          this.randomData, this.randomData, this.randomData,
          this.randomData, this.randomData, this.randomData],
      }],
      color: ["#661AE6"],

      chart: {
        height: '300',
        type: "area",
        toolbar: false,
        align: "center",
      },

      /*annotations: {
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
      },*/

      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth",
        width: 1.5,
      },

      xaxis: {
        show: false,
        axisTicks: false,
        axisBorder: {
          show: false,
        },
        categories: ["Jänner", "Februar", "März", "April", "Mai", "Juni","Juli",
                     "August", "September", "Oktober", "November", "Dezember"],
        labels: {
          show: false
        }
      },

      yaxis: {
        show: false,
      },

      fill: {
        type: "gradient",
      },

      grid: {
        yaxis: {
          lines: {show: false}
        }
      },


    };

  }


  get randomData() {
    return Math.round(Math.random() * 100);
  }

}
