import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiluliersCreationComponent } from './piluliers-creation.component';

describe('PiluliersCreationComponent', () => {
  let component: PiluliersCreationComponent;
  let fixture: ComponentFixture<PiluliersCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiluliersCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiluliersCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
