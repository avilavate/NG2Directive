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

@NgModule({
  declarations: [
    AppComponent,
    MyDirectiveDirective,
    HostListnerDirective,
    DesugaringDirective,
    CustomDirectiveDirective,
    OnChangeDemoComponent,
    HostbindingBustedDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
