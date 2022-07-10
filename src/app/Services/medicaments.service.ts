import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Medicaments } from '../Models/Medicaments';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedicamentsService {

  private _medicaments! : Medicaments[];

  private _url : string = environment.apiURL + "/Medicaments/";

  constructor(private _http : HttpClient) { }

  getMedicaments() : Observable<Medicaments[]> {
    return this._http.get<Medicaments[]>(this._url);
  }
  getMedicamentsById(id : number) : Observable<Medicaments> {
    return this._http.get<Medicaments>(this._url+id)
  }
  addMedicaments(medicaments : Medicaments) : Observable<Medicaments>{
    return this._http.post<Medicaments>(this._url, medicaments);
  }
  editMedicaments(id : number, medicaments : Medicaments) : Observable<Medicaments>{
    return this._http.put<Medicaments>(this._url+medicaments.MedicamentId, medicaments);
  }
  deleteMedicaments(id : number) : Observable<Medicaments>{ 
    return this._http.delete<Medicaments>(this._url+id)
  }
}
