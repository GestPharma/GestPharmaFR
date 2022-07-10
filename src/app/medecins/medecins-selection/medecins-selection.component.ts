import { AfterViewInit, Component, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { ModalService } from '../../_modal';
import   _storeService  from '../../Services/_store.service';
import { MedecinsService } from 'src/app/Services/medecins.service';
import { IMedecins } from 'src/app/Models/IMedecins';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medecins-selection',
  templateUrl: './medecins-selection.component.html',
  styleUrls: ['./medecins-selection.component.css']
})
export class MedecinsSelectionComponent implements OnInit, AfterViewInit {
  bodyText: string = "";
  _storeService$ = _storeService.getInstance();
  title = 'GestPharmaFR';
  windowScrolled: boolean | undefined;
  dataSource = new MatTableDataSource<IMedecins>();
  displayedFields: string[] = ['Nom du médecin', 'N° INAMI', 'Ville', 'Telephone', 'Gsm', 'Email', 'Details', 'Update', 'Delete'];   // ,'medecinRue','medecinFax'

  @ViewChild(MatSort) sort: MatSort | undefined;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(private modalService: ModalService,
    private _medecinsService: MedecinsService,
    @Inject(DOCUMENT) private document: Document,
    private route: Router,
  ) {
    this._storeService$.displayedColumns$ = new BehaviorSubject<string[]>(
      ['medecinName', 'medecinInami', 'medecinVille',
        'medecinTelephone', 'medecinGsm', 'medecinEmail',
        'details', 'update', 'delete']);   // ,'medecinRue','medecinFax'
    this._storeService$.dataSourceO$ = new Observable<MatTableDataSource<IMedecins>>();
  }

  @HostListener("window:scroll", [])

  onWindowScroll() {
    const element = document.getElementById("PgContent");
    if (window.pageYOffset || element!.scrollTop || document.body.scrollTop > 100) {
      this.windowScrolled = true;
    }
    else if (this.windowScrolled && window.pageYOffset || element!.scrollTop || document.body.scrollTop < 10) {
      this.windowScrolled = false;
    }
    this.windowScrolled = true;
  }
  scrollToTop() {
    (function smoothscroll() {
      const element = document.getElementById("PgContent");
      element!.scrollIntoView();
    }
    )();
  }
  ngOnInit(): void {
    this._storeService$.dataSourceO$ =
      this._medecinsService.getMedecins().pipe(
        map(things => {
          const dataSource = new MatTableDataSource<IMedecins>();
          dataSource.data = things;
          return dataSource;
        }));
    this.ngAfterViewInit();
  }
  ngAfterViewInit(): void {
    this._storeService$.dataSourceO$ =
      this._storeService$.dataSourceO$.pipe(
        map(things => {
          things.sort = this.sort ?? null;
          things.paginator = this.paginator ?? null;
          this.dataSource = things
          return this.dataSource;
        }));
  }

  openFootModal(id: string) {
    this.modalService.open(id);
  }

  closeFootModal(id: string) {
    this.modalService.close(id);
  }

  sortData(sort: Sort) {
    this._storeService$.dataSourceO$ =
      this._storeService$.dataSourceO$.pipe(
        map(things => {
          things.sort = this.sort ?? null;
          this.dataSource = things
          return this.dataSource;
        }));
  }

  doFilter(value: string | null) {
    this._storeService$.dataSourceO$ =
      this._storeService$.dataSourceO$.pipe(
        map(things => {
          things.filter = value!.trim().toLocaleLowerCase();
          this.dataSource = things
          return this.dataSource;
        }));
  }
  redirectToCreate = () => {
    this._storeService$.dataSourceO$.subscribe(
      {
        next: (data: any) => {
          console.log("creation =>");
          this.route.navigateByUrl('/medecins/creation');
        }
      });
  }
  redirectToUpdate = (id: string) => {
    this._storeService$.dataSourceO$.subscribe(
      {
        next: (data: any) => {
          this._storeService$.inputIsCreation.next(false);
          this._storeService$.inputIsReadOnly.next(false);
          this.route.navigateByUrl('/medecins/edition/'+id);
        }
      });
   }
  redirectToDelete = (id: string) => {
    this._storeService$.dataSourceO$.subscribe(
      {
        next: (data: any) => {
          this._storeService$.inputIsCreation.next(false);
          this._storeService$.inputIsReadOnly.next(true);
          this.route.navigateByUrl('/medecins/edition/'+id);
        }
      });
   }
  redirectToDetails = (id: string) => {
    this._storeService$.dataSourceO$.subscribe(
      {
        next: (data: any) => {
          console.log("detail =>");
          this._storeService$.inputIsCreation.next(false);
          this._storeService$.inputIsReadOnly.next(true);
          this.route.navigateByUrl('/medecins/visualisation/'+id);
        }
      });
  }
}
