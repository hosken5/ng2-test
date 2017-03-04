import {Component, ViewChild} from '@angular/core';
import {HeroService} from "./service/hero.service";
import {ModalDirective} from "ng2-bootstrap";
import {CustomHttp} from "./service/customerhttp";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private heroServie:HeroService,
    private customHttp:CustomHttp,
  ){
    this.customHttp.missionAnnounced$.subscribe(result=>{
      this.global_error_message = result ;
      this.childModal.show();
    });
  }
  title = 'app works!';
  pop(){
    this.title = "poped";
  }
  global_error_message:string;
  postRequest(){
    this.heroServie.postRequest() ;
    // .catch(err=>{
    //   this.global_error_message = err ;
    //   this.childModal.show();
    // });
  }

  @ViewChild('staticModal') public childModal:ModalDirective;

  public showChildModal():void {
    this.childModal.show();
  }
}
