import { StompClientService } from './stomp-client.service';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(private stompClientService:StompClientService){

  }
  ngOnInit(): void {
  //  this.stompClientService.connect()
  }
  title = 'PiDev';



}
