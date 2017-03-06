import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Swith:number = 100;
  title:string = '---------------';
  Selected: boolean = false;
  toggle() {
    this.Selected = !this.Selected
  }
  toggleSwitch() {
    this.Swith = this.Swith === 100 ? 10 : 100;
  }
}
