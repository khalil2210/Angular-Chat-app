import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent  implements OnInit{

  constructor(){}
  ngOnInit(): void {
const myObservable =new Observable(observer=>{

  observer.next("started");

  setTimeout(()=>{
    observer.next("one second passed")

  },1000);

  observer.error('erorrr')
  setTimeout(()=>{
    observer.complete()


  },2000);


//observer.complete();
});


myObservable.subscribe(
  {
    next:(x:any)=> console.log('Observer got a next value: ' + x),
    error:(x:Error)=>console.log(''+x),
    complete:()=> console.log('Observer completed')
  }
 // x => console.log('Observer got a next value: ' + x),

);
  }







}
