//import { Injectable } from '@angular/core';
//Logging NG2 Service:

export class LogService {
  public Write(message: string) {
    console.log(message + ": " + new Date(Number(new Date())));
  }
}
