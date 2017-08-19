import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdowndirectivesDirective {
  @HostBinding('class.open') isOpen = false;
  @HostListener('click') toggleOpen5() {
    this.isOpen = !this.isOpen;
  }
  constructor() { }

}
