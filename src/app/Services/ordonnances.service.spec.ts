import { TestBed } from '@angular/core/testing';

import { OrdonnancesService } from './ordonnances.service';

describe('OrdonnancesService', () => {
  let service: OrdonnancesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdonnancesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
