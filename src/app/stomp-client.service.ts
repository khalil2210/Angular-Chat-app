import { Injectable } from '@angular/core';
import { Stomp } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';

@Injectable({
  providedIn: 'root'
})
export class StompClientService {
   private stompClient:any ;
  constructor() { }


connect() {
  var socket = new SockJS('http://localhost:8090/ws-websocket');
  this.stompClient = Stomp.over(socket);
  this.stompClient.connect({},  (frame:any) => {
  this.stompClient.subscribe('/chatroom/1', function (greeting:any)
  {
  });
    });
}




sendMessage(message:any,chatroomId:number) {
this.stompClient.send("/app/sendMessageToChatroom/" +chatroomId, {},
JSON.stringify(message));
}

}
