import { Component } from '@angular/core';
import {HeroService} from "./service/hero.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private heroServie:HeroService
  ){

  }
  title = 'app works!';
  pop(){
    this.title = "poped";
  }
  postRequest(){
    this.heroServie.postRequest();
  }
}
