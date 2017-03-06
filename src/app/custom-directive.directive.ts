import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[disable]'
})
export class CustomDirectiveDirective {
  _disable: boolean;
  @Input() public set disable(value: boolean) {
    if (!value) {
      console.log("setter: " + value);
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
    this._disable = !this._disable;
  }
  constructor(private vcRef: ViewContainerRef, private templateRef: TemplateRef<any>) {

  }
}
