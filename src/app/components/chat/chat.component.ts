import { ChatService } from './../../providers/chat.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit {
  
  mensaje:string = "";
  elemento:any;

  constructor(public _chatService: ChatService) {
    this._chatService.cargarMensajes().subscribe( () => {
      setTimeout(() => {
        this.elemento.scrollTop =  this.elemento.scrollHeight;
      }, 10);
    });
   }

  ngOnInit() {
    this.elemento = document.getElementById('app-mensajes');
  }

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
