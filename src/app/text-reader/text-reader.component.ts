import { Component, OnInit } from '@angular/core';
import { ChatService } from "../chat.service";

@Component({
  selector: 'app-text-reader',
  template: '<button (click)="recieve()">Refresh Texts</button><ul *ngFor="let text of Texts">	{{text}}</ul>',
})
export class TextReaderComponent implements OnInit {

  Texts: string[] = [];
  constructor(public chatSvc: ChatService) { }
  recieve() {
    this.Texts = this.chatSvc.Recieve();
  }
  ngOnInit() {
  }

}
