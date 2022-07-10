import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiluliersComponent } from './piluliers.component';

describe('PiluliersComponent', () => {
  let component: PiluliersComponent;
  let fixture: ComponentFixture<PiluliersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiluliersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiluliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
