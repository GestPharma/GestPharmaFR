import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Ordonnances } from '../Models/Ordonnances';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdonnancesService {

  private _Ordonnances! : Ordonnances[];

  private _url : string = environment.apiURL + "/Ordonnances/";

  constructor(private _http : HttpClient) { }

  getOrdonnances() : Observable<Ordonnances[]> {
    return this._http.get<Ordonnances[]>(this._url);
  }

  getOrdonnancesById(id : number) : Observable<Ordonnances> {
    return this._http.get<Ordonnances>(this._url+id)
}

  addOrdonnances(ordonnances : Ordonnances) : Observable<Ordonnances>{
    return this._http.post<Ordonnances>(this._url, ordonnances);
  }

  editOrdonnances(id : number, ordonnances : Ordonnances) : Observable<Ordonnances>{
    return this._http.put<Ordonnances>(this._url+ordonnances.OrdonnanceId, ordonnances);
  }

  deleteOrdonnances(id : number) : Observable<Ordonnances>{ 
    return this._http.delete<Ordonnances>(this._url+id)
  }
}
