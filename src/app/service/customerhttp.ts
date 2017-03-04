import {
  Http,
  ConnectionBackend,
  RequestOptions,
  Request,
  RequestOptionsArgs,
  Response,
  XHRBackend
} from "@angular/http";

import {Observable} from "rxjs";
import { Subject }  from 'rxjs/Subject';


export class CustomHttp extends Http {
  constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
    super(backend, defaultOptions);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    return super.request(url, options).catch(res => {
      return this.handleError(res) ;
    });
  }

  get(url: string                                                                                                                                          , options?: RequestOptionsArgs): Observable<Response> {
    return super.get(url, options).catch(res => {
      return this.handleError(res) ;
    });
  }

  handleError(res: Response) {
    let message =  res.toString() ;
    this.missionAnnouncedSource.next(message);
    return Observable.throw(message);
  }

  post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response>{
    return super.post(body,url,options).catch(res=>{
      return  this.handleError(res)  ;
    });
  }

  private missionAnnouncedSource = new Subject<string>();
  missionAnnounced$ = this.missionAnnouncedSource.asObservable();

}

export function  CustomHttpFactory(backend: XHRBackend, defaultOptions: RequestOptions ){
 return   new CustomHttp(backend,defaultOptions) ;
}

