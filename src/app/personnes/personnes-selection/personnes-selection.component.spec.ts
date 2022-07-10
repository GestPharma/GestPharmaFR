import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnesSelectionComponent } from './personnes-selection.component';

describe('PersonnesSelectionComponent', () => {
  let component: PersonnesSelectionComponent;
  let fixture: ComponentFixture<PersonnesSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonnesSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnesSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
