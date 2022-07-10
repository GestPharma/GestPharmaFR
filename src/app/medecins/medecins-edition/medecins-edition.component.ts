import { Component, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { ModalService } from '../../_modal';
import _storeService from '../../Services/_store.service';
import { MedecinsService } from 'src/app/Services/medecins.service';
import { IMedecins } from 'src/app/Models/IMedecins';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Medecins } from 'src/app/Models/Medecins';
import { Location } from '@angular/common';

@Component({
  selector: 'app-medecins-edition',
  templateUrl: './medecins-edition.component.html',
  styleUrls: ['./medecins-edition.component.css']
})

export class MedecinsEditionComponent implements OnInit {
  values = '';
  titleAlert: string = 'This field is required';
  _storeService$ = _storeService.getInstance();
  post: any = '';
  formGroup!: FormGroup;

  // Param de l'écran :

  bodyText: string = "";
  title = 'GestPharmaFR';
  windowScrolled: boolean | undefined;
  dataSource = new MatTableDataSource<IMedecins>();
  displayedFields: string[] = ['Nom du médecin', 'N° INAMI', 'Ville', 'Telephone', 'Gsm', 'Email', 'Details', 'Update', 'Delete'];   // ,'medecinRue','medecinFax'
  medecinsId: number = 0;
  medecins: Medecins = new Medecins;

  @ViewChild(MatSort) sort: MatSort | undefined;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(private _activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private modalService: ModalService,
    private location: Location,
    private _medecinsService: MedecinsService,
    @Inject(DOCUMENT) private document: Document,
    private route: Router,
  ) {
    this._storeService$.displayedColumns$ = new BehaviorSubject<string[]>(
      ['medecinName', 'medecinInami', 'medecinVille',
        'medecinTelephone', 'medecinGsm', 'medecinEmail',
        'details', 'update', 'delete']);   // ,'medecinRue','medecinFax'
    this._storeService$.dataSourceO$ = new Observable<MatTableDataSource<IMedecins>>();
    this.medecinsId = Number(this._activatedRoute.snapshot.params['id']);
  }

  @HostListener("window:scroll", [])

  ngOnInit(): void {
    this._storeService$.dataSourceO$ =
      this._medecinsService.getMedecins().pipe(
        map(things => {
          const dataSource = new MatTableDataSource<IMedecins>();
          dataSource.data = things;
          return dataSource;
        }));
    this._storeService$.dataSourceO$ =
      this._storeService$.dataSourceO$.pipe(
        map(things => {
          things.sort = this.sort ?? null;
          things.paginator = this.paginator ?? null;
          this.dataSource = things
          return this.dataSource;
        }));
    this.createForm();
    this.formGroup = this._storeService$.medecinCreationFG$;
      this._medecinsService.getMedecinsById(this.medecinsId).subscribe(x => {
        const mdc = x[0] as IMedecins;
        this.formGroup.controls['MedecinName'].setValue(mdc.medecinName);
        this.formGroup.controls['MedecinInami'].setValue(mdc.medecinInami);
        this.formGroup.controls['MedecinRue'].setValue(mdc.medecinRue);
        this.formGroup.controls['MedecinVille'].setValue(mdc.medecinVille);
        this.formGroup.controls['MedecinTelephone'].setValue(mdc.medecinTelephone);
        this.formGroup.controls['MedecinGsm'].setValue(mdc.medecinGsm);
        this.formGroup.controls['MedecinFax'].setValue(mdc.medecinFax);
        this.formGroup.controls['MedecinEmail'].setValue(mdc.medecinEmail);
        }
      )
  }

  createForm() {
    let nameregex: RegExp = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
    let inamiregex: RegExp = /^[0-9]{6,6}$/;
    let rueregex: RegExp = /^[\w'\-,.][^_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
    let villeregex: RegExp = /^[\w'\-,.][^_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
    let telregex: RegExp = /^[\+]?[(]?[0-9]{3,4}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    let gsmregex: RegExp = /^[\+]?[(]?[0-9]{3,4}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    let faxregex: RegExp = /^[\+]?[(]?[0-9]{3,4}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    let emailregex: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    this._storeService$.medecinCreationFG$ = this.formBuilder.group({
      'MedecinName': [null, [Validators.required,
      Validators.minLength(5), Validators.maxLength(255),
      Validators.pattern(nameregex)], [this.checkInUseName()]],

      'MedecinInami': [null, [Validators.required,
      Validators.minLength(5), Validators.maxLength(255),
      Validators.pattern(inamiregex)], [this.checkInUseINAMI()]],

      'MedecinRue': [null, [Validators.required,
      Validators.minLength(5), Validators.maxLength(255),
      Validators.pattern(rueregex)], [this.checkInUseRue()]],

      'MedecinVille': [null, [Validators.required,
      Validators.minLength(5), Validators.maxLength(255),
      Validators.pattern(villeregex)], [this.checkInUseVille()]],

      'MedecinTelephone': [null, [Validators.required,
      Validators.minLength(10), Validators.maxLength(12),
      Validators.pattern(telregex)], [this.checkInUseTel()]],

      'MedecinGsm': [null, [Validators.required,
      Validators.minLength(10), Validators.maxLength(10),
      Validators.pattern(gsmregex)], [this.checkInUseGsm()]],

      'MedecinFax': [null, [Validators.required,
      Validators.minLength(10), Validators.maxLength(12),
      Validators.pattern(faxregex)], [this.checkInUseFax()]],

      'MedecinEmail': [null, [Validators.required,
      Validators.minLength(5), Validators.maxLength(255),
      Validators.pattern(emailregex)], [this.checkInUseEmail()]],
    });
  }

  get medecinName() {
    return this.formGroup.get('MedecinName') as FormControl
  }
  get medecinInami() {
    return this.formGroup.get('MedecinInami') as FormControl
  }
  get medecinRue() {
    return this.formGroup.get('MedecinRue') as FormControl
  }
  get medecinVille() {
    return this.formGroup.get('MedecinVille') as FormControl
  }
  get medecinTelephone() {
    return this.formGroup.get('MedecinTelephone') as FormControl
  }
  get medecinGsm() {
    return this.formGroup.get('MedecinGsm') as FormControl
  }
  get medecinFax() {
    return this.formGroup.get('MedecinFax') as FormControl
  }
  get medecinEmail() {
    return this.formGroup.get('MedecinEmail') as FormControl
  }

  checkInUseName(): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
      return this._storeService$.dataSourceO$.pipe(
        map(things => {
          things.filter = control.value!.trim().toLocaleUpperCase();
          this.dataSource = things;
          return (this.dataSource.filteredData.length > 0)  ? { 'alreadyInUse': true } : null;
        }));
    }
  }
  checkInUseINAMI(): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
      return this._storeService$.dataSourceO$.pipe(
        map(things => {
          things.filter = control.value!.trim().toLocaleLowerCase();
          this.dataSource = things;
          let checkInami: number = this.dataSource.filteredData.length;
          if (Number(control.value) % 97 != 0) {
            if (Number(control.value) % 89 != 0) {
              if (Number(control.value) % 83 != 0) {
                checkInami = Number(control.value) % 74
              }
            }
          }
          return (checkInami = 0) ? { 'alreadyInUse': true } : null;
        }));
    }
  }
  checkInUseRue(): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
      return this._storeService$.dataSourceO$.pipe(
        map(things => {
          things.filter = control.value!.trim().toLocaleUpperCase();
          this.dataSource = things;
          return (this.dataSource.filteredData.length > 0) ? { 'alreadyInUse': true } : null;
        }));
    }
  }
  checkInUseVille(): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
      return this._storeService$.dataSourceO$.pipe(
        map(things => {
          things.filter = control.value!.trim().toLocaleLowerCase();
          this.dataSource = things;
          return (this.dataSource.filteredData.length > 0) ? { 'alreadyInUse': null } : null;
        }));
    }
  }
  checkInUseTel(): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
      return this._storeService$.dataSourceO$.pipe(
        map(things => {
          things.filter = control.value!.trim().toLocaleLowerCase();
          this.dataSource = things;
          return (this.dataSource.filteredData.length > 0) ? { 'alreadyInUse': true } : null;
        }));
    }
  }
  checkInUseGsm(): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
      return this._storeService$.dataSourceO$.pipe(
        map(things => {
          things.filter = control.value!.trim().toLocaleLowerCase();
          this.dataSource = things;
          return (this.dataSource.filteredData.length > 0) ? { 'alreadyInUse': true } : null;
        }));
    }
  }
  checkInUseFax(): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
      return this._storeService$.dataSourceO$.pipe(
        map(things => {
          things.filter = control.value!.trim().toLocaleLowerCase();
          this.dataSource = things;
          return (this.dataSource.filteredData.length > 0) ? { 'alreadyInUse': true } : null;
        }));
    }
  }
  checkInUseEmail(): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
      return this._storeService$.dataSourceO$.pipe(
        map(things => {
          things.filter = control.value!.trim().toLocaleLowerCase();
          this.dataSource = things;
          return (this.dataSource.filteredData.length > 0) ? { 'alreadyInUse': true } : null;
        }));
    }
  }

  getErrorMedecinName() {
    console.log(this.formGroup.valid);
    return this.formGroup!.get('MedecinName')!.hasError('required') ? 'Field is required' :
      this.formGroup!.get('MedecinName')!.hasError('pattern') ? 'Not a valid NAME' :
        this.formGroup!.get('MedecinName')!.hasError('alreadyInUse') ? 'This NAME is already in use' : '';
  }
  getErrorMedecinInami() {
    return this.formGroup!.get('MedecinInami')!.hasError('required') ? 'Field is required' :
      this.formGroup!.get('MedecinInami')!.hasError('pattern') ? 'Not a valid INAMI number' :
        this.formGroup!.get('MedecinInami')!.hasError('alreadyInUse') ? 'This INAMI number is already in use' : '';
  }
  getErrorMedecinRue() {
    return this.formGroup!.get('MedecinRue')!.hasError('required') ? 'Field is required' :
      this.formGroup!.get('MedecinRue')!.hasError('pattern') ? 'Not a valid street' :
        this.formGroup!.get('MedecinRue')!.hasError('alreadyInUse') ? 'This street is already in use' : '';
  }
  getErrorMedecinVille() {
    return this.formGroup!.get('MedecinVille')!.hasError('required') ? 'Field is required' :
      this.formGroup!.get('MedecinVille')!.hasError('pattern') ? 'Not a valid town' :
        this.formGroup!.get('MedecinVille')!.hasError('alreadyInUse') ? 'This town is already in use' : '';
  }
  getErrorMedecinTelephone() {
    return this.formGroup!.get('MedecinTelephone')!.hasError('required') ? 'Field is required' :
      this.formGroup!.get('MedecinTelephone')!.hasError('pattern') ? 'Not a valid phone' :
        this.formGroup!.get('MedecinTelephone')!.hasError('alreadyInUse') ? 'This phone is already in use' : '';
  }
  getErrorMedecinGsm() {
    return this.formGroup!.get('MedecinGsm')!.hasError('required') ? 'Field is required' :
      this.formGroup!.get('MedecinGsm')!.hasError('pattern') ? 'Not a valid GSM' :
        this.formGroup!.get('MedecinGsm')!.hasError('alreadyInUse') ? 'This GSM is already in use' : '';
  }
  getErrorMedecinFax() {
    return this.formGroup!.get('MedecinFax')!.hasError('required') ? 'Field is required' :
      this.formGroup!.get('MedecinFax')!.hasError('pattern') ? 'Not a valid FAX' :
        this.formGroup!.get('MedecinFax')!.hasError('alreadyInUse') ? 'This FAX is already in use' : '';
  }
  getErrorMedecinEmail() {
    return this.formGroup!.get('MedecinEmail')!.hasError('required') ? 'Field is required' :
      this.formGroup!.get('MedecinEmail')!.hasError('pattern') ? 'Not a valid emailaddress' :
        this.formGroup!.get('MedecinEmail')!.hasError('alreadyInUse') ? 'This emailaddress is already in use' : '';
  }

  onSubmit(post: any) {
    this.post = post;
    let formData: Medecins = new Medecins;
    formData.MedecinId = 0;
    formData.MedecinName = this.medecinName.value;
    formData.MedecinInami = this.medecinInami.value;
    formData.MedecinRue = this.medecinRue.value;
    formData.MedecinVille = this.medecinVille.value;
    formData.MedecinTelephone = this.medecinTelephone.value;
    formData.MedecinGsm = this.medecinGsm.value;
    formData.MedecinFax = this.medecinFax.value;
    formData.MedecinEmail = this.medecinEmail.value;
    this._medecinsService.addMedecins(formData).subscribe(x => {
      this._storeService$.dataSourceO$ =
      this._medecinsService.getMedecins().pipe(
        map(things => {
          const dataSource = new MatTableDataSource<IMedecins>();
          dataSource.data = things;
          return dataSource;
        }));
        this._storeService$.inputIsCreation.next(false);
        this._storeService$.inputIsReadOnly.next(true);
        this.route.navigateByUrl('medecins/selection');
    });

  }
  onKey(event: any) { this.document.body.tabIndex = 0; }

  deleteMedecin() {
    this._storeService$.inputIsCreation.next(false);
    this._storeService$.inputIsReadOnly.next(true);
    this._medecinsService.deleteMedecins(this.medecinsId).subscribe(x => {
      this._storeService$.dataSourceO$ =
      this._medecinsService.getMedecins().pipe(
        map(things => {
          const dataSource = new MatTableDataSource<IMedecins>();
          dataSource.data = things;
          return dataSource;
        }));
      this.route.navigateByUrl('medecins/selection');
    });
  }

  editMedecin() {
    console.log("va update =>")
    this._storeService$.inputIsCreation.next(false);
    this._storeService$.inputIsReadOnly.next(false);
    this.ngOnInit();
    // window.location.reload();
    //this.reloadComponent;
    this.reloadCurrentRoute;

    /*     this.route.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
          this.route.navigate([this.location.path()]);
        });
        this.route.navigate([this.location.path()]); */
  }
  reloadComponent() {
    let currentUrl = this.route.url;
    this.route.routeReuseStrategy.shouldReuseRoute = () => false;
    this.route.onSameUrlNavigation = 'reload';
    this.route.navigate([currentUrl]);
  }
  reloadCurrentRoute() {
    let currentUrl = this.route.url;
    this.route.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.route.navigate([currentUrl]);
      console.log(currentUrl);
    });
  }
}
