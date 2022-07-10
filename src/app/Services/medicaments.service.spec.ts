import { TestBed } from '@angular/core/testing';

import { MedicamentsService } from './medicaments.service';

describe('MedicamentsService', () => {
  let service: MedicamentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicamentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
