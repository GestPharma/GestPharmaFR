import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedecinsSelectionComponent } from './medecins-selection.component';

describe('MedecinsSelectionComponent', () => {
  let component: MedecinsSelectionComponent;
  let fixture: ComponentFixture<MedecinsSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedecinsSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedecinsSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
