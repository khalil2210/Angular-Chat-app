
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
  complete:()=>console.log("completed")
})
}

addChatroom(chatroom:any){
  this.apiService.addChatroom(chatroom).subscribe({
    next:(res:any)=>{
     console.log(res);
    },
    complete:()=>{this.chatroomList.push(chatroom),
      console.log(this.chatroomList);
      this.inputValue=''
}
})

}

deleteChatroom(chatroomId:number,index:number){
  this.apiService.deleteChatroom(chatroomId).subscribe({
    next:(res:any)=>{
     console.log(res);
    },
    complete:()=>this.chatroomList.splice(index,1)
  })

}

selectChatroom(chatroom:any){
  this.selectChatroom=chatroom
console.log(this.selectChatroom);


}

}
