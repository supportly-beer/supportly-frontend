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
        show: false,
        axisTicks: false,
        axisBorder: {
          show: false,
        },
        categories: [
          "Jänner", "Februar", "März", "April", "Mai", "Juni",
          "Juli", "August", "September", "Oktober", "November", "Dezember"
        ],
        labels: {
          show: false
        }
      },
      yaxis: {
        show: false,
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
        show: false,
        axisTicks: false,
        axisBorder: {
          show: false,
        },
        categories: [
          "Jänner", "Februar", "März", "April", "Mai", "Juni",
          "Juli", "August", "September", "Oktober", "November", "Dezember"
        ],
        labels: {
          show: false
        }
      },
      yaxis: {
        show: false,
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
    };
  }

  get randomData() {
    return Math.round(Math.random() * 100);
  }
}
