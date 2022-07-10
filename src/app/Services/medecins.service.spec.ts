import { TestBed } from '@angular/core/testing';

import { MedecinsService } from './medecins.service';

describe('MedecinsService', () => {
  let service: MedecinsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedecinsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
