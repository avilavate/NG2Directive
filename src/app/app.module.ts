import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyDirectiveDirective } from './my-directive.directive';
import { HostListnerDirective } from './host-listner.directive';
import { DesugaringDirective } from './desugaring.directive';
import { CustomDirectiveDirective } from './custom-directive.directive';
import { OnChangeDemoComponent } from './on-change-demo/on-change-demo.component';
import { HostbindingBustedDirective } from './hostbinding-busted.directive';

//NG2 Service:
import {LogService} from "./log.service";
import { TextReaderComponent } from './text-reader/text-reader.component';
import {ChatService} from "./chat.service";

@NgModule({
  declarations: [
    AppComponent,
    MyDirectiveDirective,
    HostListnerDirective,
    DesugaringDirective,
    CustomDirectiveDirective,
    OnChangeDemoComponent,
    HostbindingBustedDirective,
    TextReaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [LogService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
