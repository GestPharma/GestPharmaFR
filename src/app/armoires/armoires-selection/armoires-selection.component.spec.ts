import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmoiresSelectionComponent } from './armoires-selection.component';

describe('ArmoiresSelectionComponent', () => {
  let component: ArmoiresSelectionComponent;
  let fixture: ComponentFixture<ArmoiresSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArmoiresSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmoiresSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
