import { TestBed } from '@angular/core/testing';

import { PersonnesService } from './personnes.service';

describe('PersonnesService', () => {
  let service: PersonnesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonnesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
