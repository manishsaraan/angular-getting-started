import { Component, Input, OnInit,
   ViewEncapsulation,AfterContentInit,
    OnChanges, SimpleChanges, DoCheck,
     AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck,
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked{
  @Input('srvElement') element: {
    type: string,
    name: string,
    content: string
  };

  @Input() name:string;

  constructor() { 
    console.log("constructor called");

  }

  ngOnChanges(changes: SimpleChanges){
     console.log("ngOnChanges called");
     console.log("--changes", changes);
  }

  ngOnInit() {
    console.log("ngOnInit called");
  }

  ngDoCheck(){
    console.log("ngDoCheck called")
  }

  ngAfterContentInit(){
    console.log("AfterContentInit called")
  }

  ngAfterContentChecked(){
    console.log("AfterContentChecked called")
  }

  ngAfterViewInit(){
    console.log("AfterViewInit called")
  }

  ngAfterViewChecked(){
    console.log("AfterViewChecked called");
  }
  

}
