import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiluliersSelectionComponent } from './piluliers-selection.component';

describe('PiluliersSelectionComponent', () => {
  let component: PiluliersSelectionComponent;
  let fixture: ComponentFixture<PiluliersSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiluliersSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiluliersSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
