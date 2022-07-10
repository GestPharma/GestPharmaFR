import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentsEditionComponent } from './medicaments-edition.component';

describe('MedicamentsEditionComponent', () => {
  let component: MedicamentsEditionComponent;
  let fixture: ComponentFixture<MedicamentsEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicamentsEditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicamentsEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
