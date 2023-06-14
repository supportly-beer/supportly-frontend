import {Component} from "@angular/core";
import {ChartOptions} from "../../../../types/chartOptions.type";
import {AppState} from "../../../../store/appState.interface";
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {StatsResultModel} from "../../../../models/statsResult.model";
import {statsErrorSelector, statsIsLoadingSelector, statsSelector} from "../../../../store/stats/stats.selectors";
import * as StatsActions from "../../../../store/stats/stats.actions";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: []
})
export class DashboardComponent {

  public ticketsResolvedByUserPerMonthChart: Partial<ChartOptions> | any;
  public ticketsResolvedGlobalPerMonthChart: Partial<ChartOptions> | any;

  statsIsLoading$: Observable<boolean>;
  statsError$: Observable<HttpErrorResponse | null>
  statsResult$: Observable<StatsResultModel | null>

  constructor(
    private store: Store<AppState>
  ) {
    this.ticketsResolvedByUserPerMonthChart = {
      series: [{
        type: "area",
        name: "Tickets",
        data: [
          this.randomData(), this.randomData(), this.randomData(),
          this.randomData(), this.randomData(), this.randomData(),
          this.randomData(), this.randomData(), this.randomData(),
          this.randomData(), this.randomData(), this.randomData()
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
    this.ticketsResolvedGlobalPerMonthChart = {
      series: [{
        type: "area",
        name: "Tickets",
        data: [
          this.randomData(), this.randomData(), this.randomData(),
          this.randomData(), this.randomData(), this.randomData(),
          this.randomData(), this.randomData(), this.randomData(),
          this.randomData(), this.randomData(), this.randomData()
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

    this.statsIsLoading$ = this.store.pipe(select(statsIsLoadingSelector));
    this.statsError$ = this.store.pipe(select(statsErrorSelector));
    this.statsResult$ = this.store.pipe(select(statsSelector));

    store.dispatch(StatsActions.fetchStats({
      start: 0,
      end: 9999999999999
    }))
  }

  rightColorForMinutes(amount: number): string {
    if (amount == -1) {
      return 'text-error';
    }

    if (amount <= 10) {
      return 'text-success';
    }

    if (amount <= 50) {
      return 'text-warning';
    }

    return 'text-error';
  }

  rightColorForNumbersLow(amount: number): string {
    if (amount <= 10) {
      return 'text-success';
    }

    if (amount <= 50) {
      return 'text-warning';
    }

    return 'text-error';
  }

  rightColorForNumbersHigh(amount: number): string {
    if (amount <= 10) {
      return 'text-error';
    }

    if (amount <= 50) {
      return 'text-warning';
    }

    return 'text-success';
  }

  parseToMinutes(millis: number): number {
    return Math.round(millis / 1000 / 60);
  }

  parseToString(millis: number): string {
    let minutes = this.parseToMinutes(millis)

    if (minutes <= 0) {
      return 'Keine Daten';
    }

    if (minutes <= 1) {
      return '1 Minute';
    }

    return minutes + ' Minuten';
  }

  randomData() {
    return Math.round(Math.random() * 100);
  }
}
