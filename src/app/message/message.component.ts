import { StompClientService } from './../stomp-client.service';
import { Component, Input } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { ActivatedRoute } from '@angular/router';

import { Stomp } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  messageList:any[]= [];
  idChatroom?:number;
  sender:number=1;
  inputSendMessage:String='';
  constructor(
  private apiService:ApiServiceService,
  private route: ActivatedRoute,)
  {}
  private stompClient:any ;

  ngOnInit(): void {
  this.route.params.subscribe(params=>{
    var socket = new SockJS('http://localhost:8090/ws-websocket');
    this.stompClient = Stomp.over(socket);
    this.stompClient.connect({}, (frame:any) => {
    this.stompClient.subscribe('/chatroom/'+this.idChatroom, (greeting:any)=>
    {
     this.messageList.push(JSON.parse(greeting.body))
    });
      });
  let chatroomId =params["chatroomId"];
  this.getMessagesBychatroom(chatroomId);
  this.getAllUsersByChatroom(chatroomId);
  })
}


getMessagesBychatroom(idChatroom: number){
  this.idChatroom=idChatroom;
  this.apiService.getMesaagesByChatroom(idChatroom).subscribe(data=>{
  this.messageList=data;

})
}


//no longer needed
// sendMessage(idChatroom:number,message:any){
//   this.apiService.sendMessage(idChatroom,message).subscribe({
//     next:(message:any)=>{
//       this.messageList.push(message)},
//     complete:()=>{
//     this.inputSendMessage=''}
//   })
// }


//to be moved to chatroom works
getAllUsersByChatroom(chatroomId:number){
  this.apiService.getAllusersByChatroom(chatroomId).subscribe({
    next:(res:any)=>{
    },
    complete:()=>{}
  })
}


//to be moved to chatroom
addUserToChatroom(senderId:number,chatroomId:number){
  this.apiService.addUserToChatroom(senderId,chatroomId).subscribe({
    next:(res:any)=>{
    },
    complete:()=>{}
  })
}


sendMessageWebSocket(message:any,chatroomId:number){
this.stompClient.send("/app/sendMessageToChatroom/" +chatroomId, {},
JSON.stringify(message));
this.inputSendMessage=''
}


}
