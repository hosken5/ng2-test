import { Injectable}    from '@angular/core';
import { Headers} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {CustomHttp} from "./customerhttp";


@Injectable()
export class HeroService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private heroesUrl = 'api/heroes';  // URL to web api

  constructor(private http: CustomHttp) { }

  postRequest(): Promise<void> {
    return this.http
      .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data);
      // .catch(this.handleError);
  }
  // private handleError(error: any): Promise<any> {
  //   console.error('An error occurred', error); // how should i pop a dialog here
  //   return Promise.reject(error.message || error);
  // }
}
