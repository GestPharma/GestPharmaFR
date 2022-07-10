import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmoiresCreationComponent } from './armoires-creation.component';

describe('ArmoiresCreationComponent', () => {
  let component: ArmoiresCreationComponent;
  let fixture: ComponentFixture<ArmoiresCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArmoiresCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmoiresCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
