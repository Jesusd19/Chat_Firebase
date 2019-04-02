import { ChatService } from "./../../providers/chat.service";
import { Component } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styles: []
})
export class LoginComponent {
  constructor(private _chats: ChatService) {}

  login() {
    this._chats
      .login()
      .then(() => console.log("Me he autenticado bien"))
      .catch(() => console.error("No se ha podido logear"));
  }
}
