import {Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {UserModel} from "../../../../models/user.model";
import {TicketModel} from "../../../../models/ticket.model";
import {select, Store} from "@ngrx/store";
import {userErrorSelector, userIsLoadingSelector, userSelector} from "../../../../store/user/user.selectors";
import {ticketErrorSelector, ticketIsLoadingSelector, ticketSelector} from "../../../../store/ticket/ticket.selectors";
import * as TicketActions from "../../../../store/ticket/ticket.actions"
import {AppState} from "../../../../store/appState.interface";
import {TicketUrgencyEnum} from "../../../../models/ticketUrgency.enum";
import {TicketStateEnum} from "../../../../models/ticketState.enum";
import {ChatService} from "../../../../services/chat.service";
import {ChatMessage} from "../../../../protos/generated/ticket-chat_pb";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: []
})
export class TicketComponent implements OnInit {

  userIsLoading$: Observable<boolean>;
  userError$: Observable<HttpErrorResponse | null>;
  user$: Observable<UserModel | null>;

  ticketIsLoading$: Observable<boolean>;
  ticketError$: Observable<HttpErrorResponse | null>;
  ticket$: Observable<TicketModel | null>;

  messages: ChatMessage[] = []
  chatMessageInput: FormControl = new FormControl('');

  identifier!: string
  user!: UserModel

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private chatService: ChatService
  ) {
    this.userIsLoading$ = this.store.pipe(select(userIsLoadingSelector));
    this.userError$ = this.store.pipe(select(userErrorSelector));
    this.user$ = this.store.pipe(select(userSelector));

    this.ticketIsLoading$ = this.store.pipe(select(ticketIsLoadingSelector));
    this.ticketError$ = this.store.pipe(select(ticketErrorSelector));
    this.ticket$ = this.store.pipe(select(ticketSelector));
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.identifier = params["identifier"]

      if (!this.identifier) {
        this.router.navigate(["/ticket"]).then()
      }

      this.user$.subscribe(user => {
        if (!user) {
          return
        }

        this.user = user;

        this.chatService.joinChatRoom(this.identifier, user!.id).on('data', (data: ChatMessage) => {
          this.messages.push(data)
        })
      })

      this.store.dispatch(TicketActions.fetchTicket({
        identifier: this.identifier
      }))
    })
  }

  @HostListener('window:beforeunload', ['$event'])
  beforeUnloadHandler() {
    this.chatService.leaveChatRoom(this.identifier, this.user.id)
  }

  getTicketStates(): string[] {
    return Object.keys(TicketStateEnum)
  }

  getTicketUrgencies(): string[] {
    return Object.keys(TicketUrgencyEnum)
  }

  sendMessage() {
    if (this.chatMessageInput.value == "" || !this.identifier || !this.user) {
      return
    }

    this.chatService.sendMessage(
      this.identifier,
      this.user.id,
      this.user.firstName + " " + this.user.lastName,
      this.user.profilePictureUrl,
      this.chatMessageInput.value!,
      Date.now()
    )
  }

  wasSentByUser(senderId: number): boolean {
    return senderId == this.user.id
  }

  changeState(event: any) {
    let select = event.target as HTMLSelectElement

    this.store.dispatch(TicketActions.updateTicket({
      identifier: this.identifier,
      ticketUrgency: null,
      ticketState: select.value as TicketStateEnum
    }))
  }

  changeUrgency(event: any) {
    let select = event.target as HTMLSelectElement

    this.store.dispatch(TicketActions.updateTicket({
      identifier: this.identifier,
      ticketUrgency: select.value as TicketUrgencyEnum,
      ticketState: null
    }))
  }

  assignMyself() {
    this.store.dispatch(TicketActions.assignTicket({
      identifier: this.identifier,
    }))
  }
}
