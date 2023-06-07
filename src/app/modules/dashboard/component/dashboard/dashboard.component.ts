import {Component, ViewChild} from "@angular/core";
import {ChartComponent} from "ng-apexcharts";
import {ChartOptions} from "../../../../types/chartOptions.type";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: []
})
export class DashboardComponent {

  @ViewChild("chartOne") chartComponentOne!: ChartComponent;
  public chartOne: Partial<ChartOptions> | any;

  @ViewChild("chartTwo") chartComponentTwo!: ChartComponent;
  public chartTwo: Partial<ChartOptions> | any;

  constructor() {
    this.chartOne = {
      series: [{
        type: "area",
        name: "Tickets",
        data: [
          this.randomData, this.randomData, this.randomData,
          this.randomData, this.randomData, this.randomData,
          this.randomData, this.randomData, this.randomData,
          this.randomData, this.randomData, this.randomData
        ],
      }],
      colors: ["#661AE6"],
      chart: {
        height: '300',
        type: "area",
        toolbar: false,
        align: "center",
        dropShadow: {
          enabled: true,
          color: '#661AE6',
          top: 50,
          left: 2,
          blur: 6,
          opacity: 0.2,
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth",
        width: 1.5,
        colors: ["#661AE6"]
      },
      xaxis: {
        show: true,
        axisTicks: false,
        axisBorder: {
          show: false,
        },
        categories: [
          "Jan", "Feb", "Mar", "Apr", "Mai", "Jun",
          "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"
        ],
        labels: {
          show: true,
          rotate: 0,
          style: {
            colors: "#FFFFFF",
          }
        },
      },
      yaxis: {
        show: false,
        labels: {
          show: true,
          rotate: 0,
          style: {
            colors: "#FFFFFF",
          }
        }
      },
      fill: {
        type: "gradient",
        colors: ["#661AE6"]
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

    this.chartTwo = {
      series: [{
        type: "area",
        name: "Tickets",
        data: [
          this.randomData, this.randomData, this.randomData,
          this.randomData, this.randomData, this.randomData,
          this.randomData, this.randomData, this.randomData,
          this.randomData, this.randomData, this.randomData
        ],
      }],
      colors: ["#661AE6"],
      chart: {
        height: '300',
        type: "area",
        toolbar: false,
        align: "center",
        dropShadow: {
          enabled: true,
          color: '#661AE6',
          top: 50,
          left: 2,
          blur: 6,
          opacity: 0.2,
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth",
        width: 1.5,
        colors: ["#661AE6"]
      },
      xaxis: {
        show: true,
        axisTicks: false,
        axisBorder: {
          show: false,
        },
        categories: [
          "Jan", "Feb", "Mar", "Apr", "Mai", "Jun",
          "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"
        ],
        labels: {
          show: true,
          rotate: 0,
          style: {
            colors: "#FFFFFF",
          }
        },
      },
      yaxis: {
        show: false,
        labels: {
          show: true,
          rotate: 0,
          style: {
            colors: "#FFFFFF",
          }
        }
      },
      fill: {
        type: "gradient",
        colors: ["#661AE6"]
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
  }

  get randomData() {
    return Math.round(Math.random() * 100);
  }
}
