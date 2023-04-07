import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableComponent } from './observable/observable.component';
import { ChatComponent } from './chat/chat.component';
import { MessageComponent } from './message/message.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'observable',component:ObservableComponent},
  {path:'',component:AppComponent},
  {path:'chatroom',component:ChatComponent,
  children:[
  {path:':chatroomId',component:MessageComponent}
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
