import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedecinsCreationComponent } from './medecins-creation.component';

describe('MedecinsCreationComponent', () => {
  let component: MedecinsCreationComponent;
  let fixture: ComponentFixture<MedecinsCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedecinsCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedecinsCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
