import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  newServerName = '';
  newServerContent = '';
  constructor() { }

  ngOnInit() {
  }

  onServerAdded(newServerName: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: newServerName.value,
      serverContent: this.newServerContent
    });
  }

  onBluePrintAdded(newServerName: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: newServerName.value,
      serverContent: this.newServerContent
    });
  }
}
