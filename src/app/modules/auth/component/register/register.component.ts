import {Component} from "@angular/core";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: []
})
export class RegisterComponent {

  modalOpen: boolean = false

  switchModal() {
    this.modalOpen = !this.modalOpen
  }
}
