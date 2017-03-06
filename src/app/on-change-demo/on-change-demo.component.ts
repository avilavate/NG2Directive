import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-on-change-demo',
  template: `
    <p>
      <button (click)="changeIt()">Change It!</button>
    </p>
  `
})
export class OnChangeDemoComponent implements OnChanges {
  @Input() another: string;
  constructor() { }
  changeIt() {
    console.log("ChangeIt called....");
    this.somethingChages = this.somethingChages == "old value" ? "new value" : "old value";
    //  this.somethingChages = "sdjkfhkjsdhkfjh";
  }

  _somethingChages: string = "old value";
  public set somethingChages(val: string) {
    this._somethingChages = val;
    console.log("changed to value " + val);
  }
   public get somethingChages() {
   return this._somethingChages;
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      console.log("ngOnchages..");
      console.dir(propName);
    }
  }
}
