import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnesEditionComponent } from './personnes-edition.component';

describe('PersonnesEditionComponent', () => {
  let component: PersonnesEditionComponent;
  let fixture: ComponentFixture<PersonnesEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonnesEditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnesEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
