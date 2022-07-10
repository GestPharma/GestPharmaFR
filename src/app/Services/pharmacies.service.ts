import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Pharmacies } from '../Models/Pharmacies';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PharmaciesService {

  private _pharmacies! : Pharmacies[];

  private _url : string = environment.apiURL + "/Pharmacies/";

  constructor(private _http : HttpClient) { }

  getPharmacies() : Observable<Pharmacies[]> {
    return this._http.get<Pharmacies[]>(this._url);
  }

  getPharmaciesById(id : number) : Observable<Pharmacies> {
    return this._http.get<Pharmacies>(this._url+id)
}

  addPharmacies(pharmacies : Pharmacies) : Observable<Pharmacies>{
    return this._http.post<Pharmacies>(this._url, pharmacies);
  }

  editPharmacies(id : number, pharmacies : Pharmacies) : Observable<Pharmacies>{
    return this._http.put<Pharmacies>(this._url+pharmacies.PharmacieId, pharmacies);
  }

  deletePharmacies(id : number) : Observable<Pharmacies>{ 
    return this._http.delete<Pharmacies>(this._url+id)
  }
}
