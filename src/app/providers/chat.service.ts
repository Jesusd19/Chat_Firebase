import { Mensaje } from '../interface/mensaje.interface';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<Mensaje>;
  public chats: Mensaje[] = [];

  constructor(private afs: AngularFirestore) {
    this.cargarMensajes().subscribe();
   }

  cargarMensajes() {
    this.itemsCollection = this.afs.collection<Mensaje>('chats');

    return this.itemsCollection.valueChanges().pipe(map( (mensajes:Mensaje[]) =>{
      console.log(mensajes);
      this.chats = mensajes;
    }));
  }

  addMensaje(texto: string){
    // TODO falta el UID  del usuario
    let mensaje: Mensaje = {
      nombre: 'Jesus',
      mensaje: texto,
      fecha: new Date().getTime()
    }
    return this.itemsCollection.add( mensaje );
  }
}
