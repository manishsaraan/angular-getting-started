import { Component, OnInit, EventEmitter, Output, ViewChild , ElementRef} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  onServerAdded(newServerName: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: newServerName.value,
      serverContent: this.serverContentInput.nativeElement.value, // getting value of underlying native element
    });
  }

  onBluePrintAdded(newServerName: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: newServerName.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }
}
