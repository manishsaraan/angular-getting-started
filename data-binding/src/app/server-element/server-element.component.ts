import { Component, Input, OnInit,
   ViewEncapsulation,
    OnChanges, SimpleChanges, DoCheck,
     AfterContentInit, AfterContentChecked,
     AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck,
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
  @Input('srvElement') element: {
    type: string,
    name: string,
    content: string
  };

  @Input() name:string;
  @ViewChild("heading") header: ElementRef;

  constructor() { 
    console.log("constructor called");

  }

  ngOnChanges(changes: SimpleChanges){
     console.log("ngOnChanges called");
     console.log("--changes", changes);
  }

  ngOnInit() {
    console.log("ngOnInit called");
    console.log("Text Content",this.header.nativeElement.textConent);
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
    console.log("Text Content",this.header.nativeElement.textConent);

  }

  ngAfterViewChecked(){
    console.log("AfterViewChecked called");
  }
  
  ngOnDestroy(){
    console.log("OnDestroy called")
  }
}
