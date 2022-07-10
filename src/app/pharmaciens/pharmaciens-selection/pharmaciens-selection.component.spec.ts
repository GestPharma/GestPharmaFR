import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmaciensSelectionComponent } from './pharmaciens-selection.component';

describe('PharmaciensSelectionComponent', () => {
  let component: PharmaciensSelectionComponent;
  let fixture: ComponentFixture<PharmaciensSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmaciensSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmaciensSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
