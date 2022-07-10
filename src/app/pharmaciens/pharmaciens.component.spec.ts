import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmaciensComponent } from './pharmaciens.component';

describe('PharmaciensComponent', () => {
  let component: PharmaciensComponent;
  let fixture: ComponentFixture<PharmaciensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmaciensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmaciensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
