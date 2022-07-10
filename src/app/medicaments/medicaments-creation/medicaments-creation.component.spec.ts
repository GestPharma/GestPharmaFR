import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentsCreationComponent } from './medicaments-creation.component';

describe('MedicamentsCreationComponent', () => {
  let component: MedicamentsCreationComponent;
  let fixture: ComponentFixture<MedicamentsCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicamentsCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicamentsCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
