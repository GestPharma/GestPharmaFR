import { Injectable, Pipe } from '@angular/core';
import { environment } from '../../environments/environment';
import { Roles } from '../Models/Roles';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import TkStorage from './storageHelper';
import { PersonnesService } from './personnes.service';

@Pipe({
  name: 'KeyValuePipe'
})
@Injectable({
  providedIn: 'root'
})

export class RolesService {

  private _roles! : Roles[];
  private _url : string = environment.apiURL + "/Roles/";
  tokens = TkStorage.getInstance();
  isUserLogin : boolean = false;
  timeOut : number = 500*5;

  constructor(private _http : HttpClient, private _personnesService : PersonnesService) {  }
  
  getRoles() : Observable<Roles[]> {
    if (this.tokens.getAccessToken() !== null) { this.isUserLogin =  true; }
    let myheaders = new HttpHeaders({ 'Authorization' : 'Bearer ' + TkStorage.getInstance() });
    return this._http.get<Roles[]>(this._url);
  }

  getRolesById(id : number) : Observable<Roles> {
    let myheaders = new HttpHeaders({ 'Authorization' : 'Bearer ' + TkStorage.getInstance() });
    return this._http.get<Roles>(this._url+id, { headers : myheaders});
  }

  addRoles(role : Roles) : Observable<Roles>{
    let myheaders = new HttpHeaders({ 'Authorization' : 'Bearer ' + TkStorage.getInstance() });
    return this._http.post<Roles>(this._url, role, { headers : myheaders});
  }

  editRoles(id : number, role : Roles) : Observable<Roles>{
    let myheaders = new HttpHeaders({ 'Authorization' : 'Bearer ' + TkStorage.getInstance() });
    return this._http.put<Roles>(this._url+role.Id, role, { headers : myheaders});
  }

  deleteRoles(id : number) : Observable<Roles>{ 
    let myheaders = new HttpHeaders({ 'Authorization' : 'Bearer ' + TkStorage.getInstance() });
    return this._http.delete<Roles>(this._url+id, { headers : myheaders});
  }
}
