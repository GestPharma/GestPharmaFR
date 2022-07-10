import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { IMedecins } from '../Models/IMedecins';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export default class _storeService {
    private static instance?: _storeService;

    // Variable Globale
    isUserLogin$: BehaviorSubject<boolean | null> =  new BehaviorSubject<boolean | null>(null);
    statutSidenav$: BehaviorSubject<boolean | null> =  new BehaviorSubject<boolean | null>(null);
    inputIsCreation : BehaviorSubject<boolean> =  new BehaviorSubject<boolean>(false);
    inputIsReadOnly : BehaviorSubject<boolean> =  new BehaviorSubject<boolean>(true);
    currentUrl$: BehaviorSubject<string>  =  new BehaviorSubject<string>(".");

    // Variable d'entete du Menu
     // contient role => qui vient du token
    rolesOfPersonneLogged$: BehaviorSubject<string | null>  =  new BehaviorSubject<string | null>(null);
     // contient unique_name  qui contient email de la personne du token
    emailOfPersonneLogged$: BehaviorSubject<string | null>  =  new BehaviorSubject<string | null>(null);
    
    // Variable des options du Menu : Attention => Sert aussi pour le routing....
    menuOption1$:   BehaviorSubject<string | null> =  new BehaviorSubject<string | null>(null);
    menuOption2$:   BehaviorSubject<string | null> =  new BehaviorSubject<string | null>(null);
    menuOption3$:   BehaviorSubject<string | null> =  new BehaviorSubject<string | null>(null);
    menuOption4$:   BehaviorSubject<string | null> =  new BehaviorSubject<string | null>(null);
    menuOption5$:   BehaviorSubject<string | null> =  new BehaviorSubject<string | null>(null);
    menuOption6$:   BehaviorSubject<string | null> =  new BehaviorSubject<string | null>(null);
    menuOption7$:   BehaviorSubject<string | null> =  new BehaviorSubject<string | null>(null);
    menuOption8$:   BehaviorSubject<string | null> =  new BehaviorSubject<string | null>(null);
    menuOption9$:   BehaviorSubject<string | null> =  new BehaviorSubject<string | null>(null);


    // ECRAN : Médecins Sélection
    dataSourceB$:   BehaviorSubject<MatTableDataSource<IMedecins> | null> =  new BehaviorSubject<MatTableDataSource<IMedecins> | null>(null);
    dataSourceO$:   Observable<MatTableDataSource<IMedecins>> =  new Observable<MatTableDataSource<IMedecins>>();
    
    displayedColumns$ : BehaviorSubject<string[]> =  new BehaviorSubject<string[]>([]);
    displayedFields$ : Observable<string[]> =  new Observable<string[]>();

    // ECRAN : Médecins création
    medecinCreationFG$ =     new FormGroup({
          MedecinName :      new FormControl('MedecinName'),
          MedecinInami :     new FormControl('MedecinInami'),
          MedecinRue :       new FormControl('MedecinRue' ),
          MedecinVille :     new FormControl('MedecinVille'),
          MedecinTelephone : new FormControl('MedecinTelephone'),
          MedecinGsm :       new FormControl('MedecinGsm'),
          MedecinFax :       new FormControl('MedecinFax'),
          MedecinEmail :     new FormControl('MedecinEmail'),
    });


  private constructor() {
      //super();
  }
  public static getInstance() {
      if (!this.instance) {
          this.instance = new _storeService();
      }
      return this.instance;
  }
}