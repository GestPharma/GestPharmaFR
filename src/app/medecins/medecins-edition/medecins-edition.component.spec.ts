import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedecinsEditionComponent } from './medecins-edition.component';

describe('MedecinsEditionComponent', () => {
  let component: MedecinsEditionComponent;
  let fixture: ComponentFixture<MedecinsEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedecinsEditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedecinsEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
