import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHostbindingBusted]'
})
export class HostbindingBustedDirective {
  value: string = "Put your password..";
  @HostListener("click") mouseenter() {
    this.value = "";
  }
   @HostListener("mouseleave") mouseleave() {
    this.value = "Put your password..";
  }

  @HostBinding("value") get getNewVal() {
    return this.value;
    // return "New Value";
  }
}
