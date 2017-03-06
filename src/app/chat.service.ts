import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from "./log.service";

@Injectable()
export class ChatService {
  sendEvent: EventEmitter<string> = new EventEmitter<string>();
  messages: string[] = [];
  constructor(private logSvc: LogService) {
    this.sendEvent.subscribe((message) => {
      this.messages.push(message);
    });
  }

  public Send(text: string) {
    this.sendEvent.emit(text);
    this.logSvc.Write(text + " written :");
  }

  public Recieve(): string[] {
    this.logSvc.Write(this.messages.length.toString());
    return this.messages;
  }
}
