import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Medecins } from '../Models/Medecins';
import { Observable } from 'rxjs';
import TkStorage from './storageHelper';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IMedecins } from '../Models/IMedecins';
import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class MedecinsService {

  private _medecins! : Medecins[];
  tokens = TkStorage.getInstance();
  private _url : string = environment.apiURL + "/Medecins/";

  constructor(private _http : HttpClient) { }

  getMedecins() : Observable<IMedecins[]> {
    const myheaders = new HttpHeaders({ 'Authorization' : 'Bearer ' + this.tokens.getAccessToken() });
    return this._http.get<IMedecins[]>(this._url+"GetAll", { headers : myheaders});
  }
  getMedecinsById(id : number) : Observable<any> {
    const myheaders = new HttpHeaders({ 'Authorization' : 'Bearer ' + this.tokens.getAccessToken() });
    return this._http.get<Medecins[]>(this._url+"GetOne/"+id, { headers : myheaders});
  }
  addMedecins(medecins : Medecins) : Observable<IMedecins[]>{
    const myheaders = new HttpHeaders({ 'Authorization' : 'Bearer ' + this.tokens.getAccessToken() , 'Content-Type':'application/json'});
    const mybody = JSON.stringify(medecins);
    return this._http.post<IMedecins[]>(this._url+"Create/", mybody, { headers : myheaders});
  }
  editMedecins(id : number, medecins : Medecins) : Observable<any>{
    const myheaders = new HttpHeaders({ 'Authorization' : 'Bearer ' + this.tokens.getAccessToken() , 'Content-Type':'application/json'});
    const mybody = JSON.stringify(medecins);
    return this._http.put<Medecins[]>(this._url+medecins.MedecinId, mybody, { headers : myheaders});
  }
  deleteMedecins(id : number) : Observable<any>{ 
    const myheaders = new HttpHeaders({ 'Authorization' : 'Bearer ' + this.tokens.getAccessToken() , 'Content-Type':'application/json'});
    return this._http.delete<Medecins[]>(this._url+"Delete/"+id, { headers : myheaders});
  }
}
