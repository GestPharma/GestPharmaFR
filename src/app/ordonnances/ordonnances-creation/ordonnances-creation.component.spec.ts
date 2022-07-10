import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdonnancesCreationComponent } from './ordonnances-creation.component';

describe('OrdonnancesCreationComponent', () => {
  let component: OrdonnancesCreationComponent;
  let fixture: ComponentFixture<OrdonnancesCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdonnancesCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdonnancesCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
