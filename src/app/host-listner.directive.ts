import { Directive, HostListener, HostBinding, ElementRef, Renderer, Input, OnInit } from '@angular/core';
import {LogService} from "./log.service";

@Directive({
  selector: '[appHostListner]'
})
export class HostListnerDirective implements OnInit {
  renderer: Renderer;
  elementRef: ElementRef;
  @Input("appHostListner") backgroundColor: string;
  color: string = "red";
  @HostListener("click") onmouseenter() {
    this.renderer.setElementStyle(this.elementRef.nativeElement, "background-color", this.color);
  }
  @HostListener("mouseleave") onmouseleave() {
    this.logSvc.Write("mouseleave hostlistner");
    this.renderer.setElementStyle(this.elementRef.nativeElement, "background-color", this.backgroundColor);
  }
  ngOnInit() {
    this.renderer.setElementStyle(this.elementRef.nativeElement, "background-color", this.backgroundColor);
  }
  constructor(renderer: Renderer, elementRef: ElementRef, private logSvc:LogService) {
    this.renderer = renderer;
    this.elementRef = elementRef;
    this.renderer.setElementStyle(this.elementRef.nativeElement, "background-color", this.backgroundColor);
  }

}
