import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpContextToken } from '@angular/common/http';
import { interval, Observable, timer } from 'rxjs';
import TkStorage from './storageHelper';
import {concatMap, delayWhen, filter, map, retry, retryWhen, shareReplay, take, takeLast, tap} from 'rxjs/operators';

export const RETRY_COUNT = new HttpContextToken(() => 9);
export const ERROR_COUNT = new HttpContextToken(() => 0);

@Injectable()
export class TokenInterceptorInterceptor implements HttpInterceptor {

  tokens = TkStorage.getInstance();

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const retryCount = request.context.get(RETRY_COUNT);
    
    //On vérifie qu'on a un token dans le localStorage
    if( this.tokens.getAccessToken() != null)
    {
      let clonedReq = request.clone({setHeaders : { "Authorization" : "Bearer " + this.tokens.getAccessToken() }});

      //On renvoie la requête clonée qui contient les headers avec le token
      return next.handle(clonedReq);
    }
    //Si pas de token, on envoie la requête non modifiée
    return next.handle(request).pipe(
                                filter(result => result !== null)
    );
  }
}

