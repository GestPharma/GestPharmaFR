import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdonnancesEditionComponent } from './ordonnances-edition.component';

describe('OrdonnancesEditionComponent', () => {
  let component: OrdonnancesEditionComponent;
  let fixture: ComponentFixture<OrdonnancesEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdonnancesEditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdonnancesEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
