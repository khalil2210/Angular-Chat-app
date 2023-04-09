import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

constructor(private http:HttpClient) {}

getChatrooms(){
  return this.http.get<any>('http://localhost:8090/chatroom/getAllChatroom')
  }

addChatroom(chatroom:any){
    const url='http://localhost:8090/chatroom/addChatroom'
    const params = new HttpParams().set('ownerId', chatroom.ownerId);
    return this.http.post(url, chatroom,{params});
  }

deleteChatroom(chatroomId:number){
    return this.http.delete('http://localhost:8090/chatroom/deleteChatroom/'+chatroomId)
  }


sendMessage(chatroomId:number,message:any){
  const url='http://localhost:8090/message/addMessage'
    const headers= new HttpHeaders(
      {
      'Content-Type': 'application/json'
    });
  const params = new HttpParams()
  .set('chatroomId', chatroomId)
  return this.http.post(url, message,{params:params,headers:headers});
}


getMesaagesByChatroom(idChatroom: number){
    return this.http.get<any>('http://localhost:8090/message/getAllByChatroom/'+idChatroom)
 }


getAllusersByChatroom(chatroomId:number){
  const url='http://localhost:8090/chatroom/getAllUsersByChatroom'
  const params = new HttpParams().set('chatroomId', chatroomId);
  return this.http.get(url,{params});
}

//to be implemented
addUserToChatroom(userId:number,chatroomId:number){
  const url='http://localhost:8090/chatroom/addUserToChatroom'
  const params = new HttpParams()
  .set('userId',userId)
  .set('chatroomId',chatroomId);
  return this.http.post(url,{params});
}


//to be implemented
removeUserFromChatroom(userId:number,chatroomId:number){
  const url='http://localhost:8090/chatroom/removeUserFromChatroom'
  const params = new HttpParams()
  .set('userId', userId)
  .set('chatroomId',chatroomId);
  return this.http.delete(url,{params});
}


//to be implemented
getUserById(userId:number){

}


}
