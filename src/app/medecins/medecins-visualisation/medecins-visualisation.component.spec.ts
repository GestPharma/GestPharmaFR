import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedecinsVisualisationComponent } from './medecins-visualisation.component';

describe('MedecinsVisualisationComponent', () => {
  let component: MedecinsVisualisationComponent;
  let fixture: ComponentFixture<MedecinsVisualisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedecinsVisualisationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedecinsVisualisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
