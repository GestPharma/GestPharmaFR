import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdonnancesSelectionComponent } from './ordonnances-selection.component';

describe('OrdonnancesSelectionComponent', () => {
  let component: OrdonnancesSelectionComponent;
  let fixture: ComponentFixture<OrdonnancesSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdonnancesSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdonnancesSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
