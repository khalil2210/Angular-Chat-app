
import { ApiServiceService } from './../api-service.service';
import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  faTrash = faTrash;
  chatroomList:any[]= [];
  inputValue:String='' ;
  selectedChatroom?:any;
  constructor(private apiService:ApiServiceService){}
  ngOnInit(): void {
  this.getChatrooms();}


getChatrooms(){
this.apiService.getChatrooms().subscribe({
  next:(chatrooms:any)=>{
    this.chatroomList=chatrooms
  },
})
}

addChatroom(chatroom:any){
  this.apiService.addChatroom(chatroom).subscribe({
    next:(res:any)=>{
      this.chatroomList.push(res)},
    complete:()=>{
      this.inputValue=''
      }
})

}

deleteChatroom(chatroomId:number,index:number){
  this.apiService.deleteChatroom(chatroomId).subscribe({
    complete:()=>this.chatroomList.splice(index,1)})
}
}
