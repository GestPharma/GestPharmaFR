import { TestBed } from '@angular/core/testing';

import { PharmaciesService } from './pharmacies.service';

describe('PharmaciesService', () => {
  let service: PharmaciesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PharmaciesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
