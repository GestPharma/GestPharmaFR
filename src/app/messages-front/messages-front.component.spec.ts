import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesFrontComponent } from './messages-front.component';

describe('MessagesFrontComponent', () => {
  let component: MessagesFrontComponent;
  let fixture: ComponentFixture<MessagesFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagesFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
