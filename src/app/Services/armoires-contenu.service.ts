import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ArmoiresContenu } from '../Models/ArmoiresContenu';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArmoiresContenuService {

  private _armoiresContenu! : ArmoiresContenu[];

  private _url : string = environment.apiURL + "/ArmoiresContenu/";

  constructor(private _http : HttpClient) { }

  getArmoiresContenu() : Observable<ArmoiresContenu[]> {
    return this._http.get<ArmoiresContenu[]>(this._url);
  }
  getArmoiresContenuById(id : number) : Observable<ArmoiresContenu> {
    return this._http.get<ArmoiresContenu>(this._url+id)
  }
  addArmoiresContenu(armoiresContenu : ArmoiresContenu) : Observable<ArmoiresContenu>{
    return this._http.post<ArmoiresContenu>(this._url, armoiresContenu);
  }
  editArmoiresContenu(id : number, armoiresContenu : ArmoiresContenu) : Observable<ArmoiresContenu>{
    return this._http.put<ArmoiresContenu>(this._url+armoiresContenu.ACarmoireId, armoiresContenu);
  }
  deleteArmoiresContenu(id : number) : Observable<ArmoiresContenu>{ 
    return this._http.delete<ArmoiresContenu>(this._url+id)
  }
}
