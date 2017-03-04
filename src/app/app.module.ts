import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, Http, XHRBackend, RequestOptions} from '@angular/http';
import { ModalModule } from 'ng2-bootstrap/modal';

import { AppComponent } from './app.component';
import {HeroService} from "./service/hero.service";
import {CustomHttpFactory, CustomHttp}  from "./service/customerhttp" ;

@NgModule({
  declarations : [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModalModule.forRoot()
  ],
  providers: [
    HeroService,
    {
      provide: CustomHttp,
      useFactory: CustomHttpFactory,
      deps: [XHRBackend, RequestOptions]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
