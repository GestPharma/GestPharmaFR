import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import _storeService from './Services/_store.service';
import { ModalService } from './_modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GestPharma';
  _storeService$ = _storeService.getInstance();

  constructor(private modalService: ModalService,
    private location: Location,
    public route: Router) {
  }
}