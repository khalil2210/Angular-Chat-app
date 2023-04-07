import { HttpParams } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

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
  usersList:any[]=[];//to be move to chatroom
  @Input() chatroom:any;
  constructor(private apiService:ApiServiceService,private route: ActivatedRoute){}
  ngOnInit(): void {
  this.route.params.subscribe(params=>{
  let chatroomId =params["chatroomId"];
  this.getMessagesBychatroom(chatroomId);
  this.getAllUsersByChatroom(chatroomId);
  })
}


getMessagesBychatroom(idChatroom: number){
  this.idChatroom=idChatroom;
  this.apiService.getMesaagesByChatroom(idChatroom).subscribe(data=>{
  this.messageList=data;
  console.log(this.messageList)
})
}

sendMessage(idChatroom:number,message:any){
  this.apiService.sendMessage(idChatroom,message).subscribe({
    next:(res:any)=>{
     console.log(res);
    },
    complete:()=>{
    this.messageList.push(message)
    this.inputSendMessage=''}
  })
}


//to be moved to chatroom works
getAllUsersByChatroom(chatroomId:number){
  this.apiService.getAllusersByChatroom(chatroomId).subscribe({
    next:(res:any)=>{
     console.log(res);
     this.usersList=res;
    },
    complete:()=>{console.log('completed');}
  })
}


//to be moved to chatroom
addUserToChatroom(senderId:number,chatroomId:number){
  this.apiService.addUserToChatroom(senderId,chatroomId).subscribe({
    next:(res:any)=>{
     console.log(res);
    },
    complete:()=>{console.log('completed');}
  })
}

}
