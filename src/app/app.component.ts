import { Component } from '@angular/core';
import { ChatService } from "./chat.service";
import { LogService } from "./log.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public chatSvc: ChatService, private logSvc: LogService) { }
  Swith: number = 100;
  title: string = '---------------';
  Selected: boolean = false;
  toggle() {
    this.Selected = !this.Selected
  }
  toggleSwitch() {
    this.Swith = this.Swith === 100 ? 10 : 100;
  }
  send(text: string) {
    this.logSvc.Write(text);
    this.chatSvc.Send(text);
  }
  
}
