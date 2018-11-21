import { Component } from "@angular/core";


@Component({
//  selector: 'app-server', //by selector
 selector: '[app-server]', //by attribute
//  selector: '.app-server', //by attribute
 templateUrl: './server.component.html',
 styleUrls: ['./server.component.css']
})

export class ServerComponent {
  serverId:number =  10;
  allowNewServer: boolean = false;
  serverStatus: string = 'runing';
  serverCreationStatus: string = 'no server was created';
  serverName="test name";
  
  constructor(){
    setTimeout(() => {
        this.allowNewServer = true;
    },2000);
  }

  getServerStatus(){
      return this.serverStatus;
  }

  onCreateServer(){
      this.serverCreationStatus = 'no server was created with name: ' + this.serverName;
  }
}