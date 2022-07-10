import { Component, OnInit } from '@angular/core';
import { PersonnesService } from '../Services/personnes.service';
import { KeyValuePipe } from '@angular/common';
import TkStorage from '../Services/storageHelper';
import { ModalService } from '../_modal';
import jwtDecode from 'jwt-decode';
import { DecodedToken } from '../Models/DecodedToken';
import   _storeService  from '../Services/_store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer-front',
  templateUrl: './footer-front.component.html',
  styleUrls: ['./footer-front.component.scss'],
  providers: [KeyValuePipe]
})

export class FooterFrontComponent implements OnInit {
  bodyText: string = "";
  title = 'GestPharmaFR';
  AccEmail = '';
  AccPwd = '';
  tokens = TkStorage.getInstance();
  _storeService$ = _storeService.getInstance();

  constructor(  private modalService: ModalService, 
                private _personnesService : PersonnesService, 
                private keyValue: KeyValuePipe,
                private route: Router) { }

  ngOnInit(): void {
    this._storeService$.isUserLogin$.next(false);
    if (this.tokens.getAccessToken() !== null) { this._storeService$.isUserLogin$.next(true); }
  }
  openFootModal(id: string) {
    this.modalService.open(id);
  }
  closeFootModal(id: string) {
      this.modalService.close(id);
  }
  async logUsers(){
    this.bodyText = 'Loading...';
    //this.openFootModal('foot-modal-1');
    this._personnesService.addPersonnesLogin(this.AccEmail, this.AccPwd).subscribe(data => {
      const decoded = <DecodedToken>jwtDecode(data.token);
      this.tokens.setAccessToken(data.token);
      this._storeService$.isUserLogin$.next(true);
      this._storeService$.emailOfPersonneLogged$.next(decoded.unique_name);
      this._storeService$.rolesOfPersonneLogged$.next(decoded.role);
      this.route.navigateByUrl('home');
    });
    this.scrollTo('GestPharma');
  }
  regUsers(){
    this.scrollTo('GestPharma');
    this.route.navigateByUrl('home');
  }
  byeUsers(){
    const tokens = TkStorage.getInstance();
    tokens.clear();
    this._storeService$.isUserLogin$.next(false);
    this._storeService$.emailOfPersonneLogged$.next(null);
    this._storeService$.rolesOfPersonneLogged$.next(null);
    this.scrollTo('GestPharma');
    this.route.navigateByUrl('home');
  }
  scrollTo(className: string):void {
    const elementList = document.querySelectorAll('.' + className);
    const element = elementList[0] as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth' });
 }
}
