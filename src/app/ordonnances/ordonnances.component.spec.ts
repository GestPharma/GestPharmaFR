import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdonnancesComponent } from './ordonnances.component';

describe('OrdonnancesComponent', () => {
  let component: OrdonnancesComponent;
  let fixture: ComponentFixture<OrdonnancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdonnancesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdonnancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
