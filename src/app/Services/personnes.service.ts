import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Personnes } from '../Models/Personnes';
import { Tokens } from '../Models/Tokens';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import TkStorage from './storageHelper';
import { DecodedToken } from '../Models/DecodedToken';
import jwtDecode from 'jwt-decode';
import   _storeService  from './_store.service';


@Injectable({
  providedIn: 'root'
})
export class PersonnesService {
  private _personnes! : Personnes[];
  _storeService$ = _storeService.getInstance();
  tokens = TkStorage.getInstance();
  private _url : string = environment.apiURL + "/Personnes/";

  // Je créer un Obsevate private pour décoder le JSON qui contient le Token
  private roles$: BehaviorSubject<DecodedToken|null>;

  constructor(private _http : HttpClient) { 
    this.roles$ = new BehaviorSubject<DecodedToken|null>(null);
    this._storeService$.emailOfPersonneLogged$ =  new BehaviorSubject<string | null>(null);
    this._storeService$.rolesOfPersonneLogged$ =  new BehaviorSubject<string | null>(null);
  }

  getPersonnes() : Observable<Personnes[]> {
    let myheaders = new HttpHeaders({ 'Authorization' : 'Bearer ' + this.tokens.getAccessToken() });
    return this._http.get<Personnes[]>(this._url, { headers : myheaders});
  }
  getPersonnesAs(as : string) : Observable<Personnes[]> {
    let myheaders = new HttpHeaders({ 'Authorization' : 'Bearer ' + this.tokens.getAccessToken() });
    return this._http.get<Personnes[]>(this._url+as, { headers : myheaders});
  }
  getPersonnesId(id : number) : Observable<Personnes> {
    let myheaders = new HttpHeaders({ 'Authorization' : 'Bearer ' + this.tokens.getAccessToken() });
    return this._http.get<Personnes>(this._url+id, { headers : myheaders});
  }
  getPersonnesIdAs(id : number, as : string) : Observable<Personnes> {
    let myheaders = new HttpHeaders({ 'Authorization' : 'Bearer ' + this.tokens.getAccessToken() });
    return this._http.get<Personnes>(this._url+'id='+id+'&connectAs='+as, { headers : myheaders});
  }
  addPersonnes(user : Personnes) : Observable<Personnes>{
    let myheaders = new HttpHeaders({ 'Authorization' : 'Bearer ' + this.tokens.getAccessToken() });
    return this._http.post<Personnes>(this._url, user, { headers : myheaders});
  }

// Pour aller chercher le Token et mettre a jour le Store
  addPersonnesLogin(email : string, password : string): Observable<Tokens>{
    return this._http.post<Tokens>(this._url+'Login?'+'email='+email+'&password='+password, undefined).pipe(tap(data => {
      this.roles$.next(jwtDecode(data.token));
      this._storeService$.emailOfPersonneLogged$.next(this.roles$.value?.unique_name ?? "");
      this._storeService$.rolesOfPersonneLogged$.next(this.roles$.value?.role ?? "");
    }));
  }
  addPersonnesRegister(email : string, password : string) : Observable<Personnes>{
    return this._http.post<Personnes>(this._url+'Register?'+'email='+email+'&password='+password, undefined);
  }
  addPersonnesCreate(email : string, password : string) : Observable<Personnes>{
    let myheaders = new HttpHeaders({ 'Authorization' : 'Bearer ' + this.tokens.getAccessToken() });
    return this._http.post<Personnes>(this._url+'Create?'+'email='+email+'&password='+password, undefined, { headers : myheaders});
  }
  edit(id : number, personne : Personnes) : Observable<Personnes>{
    let myheaders = new HttpHeaders({ 'Authorization' : 'Bearer ' + this.tokens.getAccessToken() });
    return this._http.put<Personnes>(this._url+personne.Id, personne, { headers : myheaders});
  }
  delete(id : number) : Observable<Personnes>{
    let myheaders = new HttpHeaders({ 'Authorization' : 'Bearer ' + this.tokens.getAccessToken() });
    return this._http.delete<Personnes>(this._url+id, { headers : myheaders});
  }
}

