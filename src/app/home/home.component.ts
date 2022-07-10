import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import _storeService from '../Services/_store.service';
import { ModalService } from '../_modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'GestPharma';
  _storeService$ = _storeService.getInstance();

  constructor(private modalService: ModalService,
    public route: Router) {
  }
  ngOnInit() {
   }
}

