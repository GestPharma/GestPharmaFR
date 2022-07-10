import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { MedicamentsPrescrits } from '../Models/MedicamentsPrescrits';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedicamentsPrescritsService {

  private _medicamentsPrescrits! : MedicamentsPrescrits[];

  private _url : string = environment.apiURL + "/MedicamentsPrescrits/";

  constructor(private _http : HttpClient) { }

  getMedicamentsPrescrits() : Observable<MedicamentsPrescrits[]> {
    return this._http.get<MedicamentsPrescrits[]>(this._url);
  }
  getMedicamentsPrescritsById(id : number) : Observable<MedicamentsPrescrits> {
    return this._http.get<MedicamentsPrescrits>(this._url+id)
  }
  addMedicamentsPrescrits(medicamentsPrescrits : MedicamentsPrescrits) : Observable<MedicamentsPrescrits>{
    return this._http.post<MedicamentsPrescrits>(this._url, medicamentsPrescrits);
  }
  editMedicamentsPrescrits(id : number, medicamentsPrescrits : MedicamentsPrescrits) : Observable<MedicamentsPrescrits>{
    return this._http.put<MedicamentsPrescrits>(this._url+medicamentsPrescrits.MPMedicamentId, medicamentsPrescrits);
  }
  deleteMedicamentsPrescrits(id : number) : Observable<MedicamentsPrescrits>{ 
    return this._http.delete<MedicamentsPrescrits>(this._url+id)
  }
}
