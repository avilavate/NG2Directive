import { Directive, Renderer, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {
  constructor(elementRef: ElementRef, renderer: Renderer) {
    elementRef.nativeElement.style.backgroundColor = 'yellow';
    renderer.setElementStyle(elementRef.nativeElement, "background-color", "red");
  }
}
