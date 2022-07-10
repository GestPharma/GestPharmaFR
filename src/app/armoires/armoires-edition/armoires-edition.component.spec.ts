import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmoiresEditionComponent } from './armoires-edition.component';

describe('ArmoiresEditionComponent', () => {
  let component: ArmoiresEditionComponent;
  let fixture: ComponentFixture<ArmoiresEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArmoiresEditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmoiresEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
