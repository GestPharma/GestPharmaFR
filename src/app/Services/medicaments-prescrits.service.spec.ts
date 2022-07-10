import { TestBed } from '@angular/core/testing';

import { MedicamentsPrescritsService } from './medicaments-prescrits.service';

describe('MedicamentsPrescritsService', () => {
  let service: MedicamentsPrescritsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicamentsPrescritsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
