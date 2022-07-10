import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmaciensEditionComponent } from './pharmaciens-edition.component';

describe('PharmaciensEditionComponent', () => {
  let component: PharmaciensEditionComponent;
  let fixture: ComponentFixture<PharmaciensEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmaciensEditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmaciensEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
