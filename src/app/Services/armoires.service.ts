import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Armoires } from '../Models/Armoires';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArmoiresService {

  private _roles! : Armoires[];

  private _url : string = environment.apiURL + "/Armoires/";

  constructor(private _http : HttpClient) { }

  getArmoires() : Observable<Armoires[]> {
    return this._http.get<Armoires[]>(this._url);
  }
  getArmoiresById(id : number) : Observable<Armoires> {
    return this._http.get<Armoires>(this._url+id)
  }
  addRArmoires(armoires : Armoires) : Observable<Armoires>{
    return this._http.post<Armoires>(this._url, armoires);
  }
  editArmoires(id : number, armoires : Armoires) : Observable<Armoires>{
    return this._http.put<Armoires>(this._url+armoires.ArmoID, armoires);
  }
  deleteArmoires(id : number) : Observable<Armoires>{ 
    return this._http.delete<Armoires>(this._url+id)
  }
}
