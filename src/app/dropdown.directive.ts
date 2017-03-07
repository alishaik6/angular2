import { Directive, HostBinding,HostListener } from '@angular/core';

@Directive({
  selector: '[rbDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') get opened() {

    return this.isopened;
  }

  @HostListener('mouseenter')  open()
  {
    this.isopened = true;
  }

  @HostListener('mouseleave')  closed()
  {
    this.isopened = false;
  }



  private isopened = false;

}
