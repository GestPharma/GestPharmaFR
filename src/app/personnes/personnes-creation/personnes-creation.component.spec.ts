import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnesCreationComponent } from './personnes-creation.component';

describe('PersonnesCreationComponent', () => {
  let component: PersonnesCreationComponent;
  let fixture: ComponentFixture<PersonnesCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonnesCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnesCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
