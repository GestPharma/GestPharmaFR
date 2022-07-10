import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Users } from '../Models/Users';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _url : string = environment.apiURL + "/Users/";
  private _users! : Users[];

  constructor(private _http : HttpClient) { }

  getUsers() : Observable<Users[]> {
    return this._http.get<Users[]>(this._url);
  }
  usersAuthenticate(user : Users) : Observable<Users>{
    return this._http.post<Users>(this._url, user);
  }
}
