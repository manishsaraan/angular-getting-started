import { Directive , HostListener, OnInit, HostBinding} from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  @HostBinding('class.open') isOpen = false;
  ngOnInit(){
      console.log('sdfds');
  }

  @HostListener('click') click(eventData: Event){
    this.isOpen = !this.isOpen;
  }
}
