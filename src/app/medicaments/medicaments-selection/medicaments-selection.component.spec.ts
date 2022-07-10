import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentsSelectionComponent } from './medicaments-selection.component';

describe('MedicamentsSelectionComponent', () => {
  let component: MedicamentsSelectionComponent;
  let fixture: ComponentFixture<MedicamentsSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicamentsSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicamentsSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
