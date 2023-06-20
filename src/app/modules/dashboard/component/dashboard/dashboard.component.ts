import {Component, OnInit} from "@angular/core";
import {ChartOptions} from "../../../../types/chartOptions.type";
import {AppState} from "../../../../store/appState.interface";
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {StatsResultModel} from "../../../../models/statsResult.model";
import {statsErrorSelector, statsIsLoadingSelector, statsSelector} from "../../../../store/stats/stats.selectors";
import * as StatsActions from "../../../../store/stats/stats.actions";
import {UserModel} from "../../../../models/user.model";
import {userErrorSelector, userIsLoadingSelector, userSelector} from "../../../../store/user/user.selectors";
import {faGlobe, faLineChart, faUser, faUserClock, faUsers, IconDefinition} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: []
})
export class DashboardComponent implements OnInit {

  public ticketsResolvedByUserPerMonthChart: Partial<ChartOptions> | any;
  public ticketsResolvedGlobalPerMonthChart: Partial<ChartOptions> | any;

  userIsLoading$: Observable<boolean>;
  userError$: Observable<HttpErrorResponse | null>
  user$: Observable<UserModel | null>

  statsIsLoading$: Observable<boolean>;
  statsError$: Observable<HttpErrorResponse | null>
  statsResult$: Observable<StatsResultModel | null>

  usersIcon: IconDefinition = faUsers
  clockIcon: IconDefinition = faUserClock
  globeIcon: IconDefinition = faGlobe
  userIcon: IconDefinition = faUser
  chartIcon: IconDefinition = faLineChart

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

    this.userIsLoading$ = this.store.pipe(select(userIsLoadingSelector));
    this.userError$ = this.store.pipe(select(userErrorSelector));
    this.user$ = this.store.pipe(select(userSelector));

    this.statsIsLoading$ = this.store.pipe(select(statsIsLoadingSelector));
    this.statsError$ = this.store.pipe(select(statsErrorSelector));
    this.statsResult$ = this.store.pipe(select(statsSelector));
  }

  ngOnInit() {
    this.store.dispatch(StatsActions.fetchStats({
      start: 0,
      end: 9999999999999
    }))
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
