import { ChatService } from './../../providers/chat.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent {
  
  mensaje = "";

  constructor(public _chatService: ChatService) { }

  enviar_mensaje() {
    console.log(this.mensaje);
    if (this.mensaje.length === 0) {
      return;
    } 
    this._chatService.addMensaje(this.mensaje)
                     .then( () => this.mensaje = "")
                     .catch( (err) => console.error('Error al enviar',  err))
  }

}
