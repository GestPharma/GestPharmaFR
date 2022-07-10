import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmaciensCreationComponent } from './pharmaciens-creation.component';

describe('PharmaciensCreationComponent', () => {
  let component: PharmaciensCreationComponent;
  let fixture: ComponentFixture<PharmaciensCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmaciensCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmaciensCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
