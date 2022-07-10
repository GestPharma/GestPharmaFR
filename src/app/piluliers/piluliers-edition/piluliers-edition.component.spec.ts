import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiluliersEditionComponent } from './piluliers-edition.component';

describe('PiluliersEditionComponent', () => {
  let component: PiluliersEditionComponent;
  let fixture: ComponentFixture<PiluliersEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiluliersEditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiluliersEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
