import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from "./log.service";

@Injectable()
export class ChatService {
  sendEvent: EventEmitter<string> = new EventEmitter<string>();
  messages: string[] = [];
  constructor(private logSvc:LogService){}
  
  public Send(text: string) {
    this.sendEvent.emit(text);
    this.logSvc.Write(text+ "written :");
  }

  public Recieve() {
    this.sendEvent.subscribe((message) => {
    this.messages.push(message);
    })
  }
}
