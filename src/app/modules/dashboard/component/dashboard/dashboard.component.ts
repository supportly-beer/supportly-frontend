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
  colors: any;
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
        type: "area",
        name: "Tickets",
        data: [this.randomData, this.randomData, this.randomData,
               this.randomData, this.randomData, this.randomData,
               this.randomData, this.randomData, this.randomData,
               this.randomData, this.randomData, this.randomData]
      }],
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
      },
      title: {
        text: "Wie viele Tickets wurden erstellt",
        align: "left",
        colors: ["white"],
      },
      xaxis: {
        axisBorder: {
          show: true,
        },
        categories: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
        labelStyle: {
            color: "white",
          }
        },
      yaxis: {
        labelStyle: {
            color: "white",
          }
        },

      grid: {
        yaxis:{
          lines:{
            show: false
          }
        }
      },

    };
  }


  get randomData() {
    return Math.round(Math.random() * 100);
  }

}
