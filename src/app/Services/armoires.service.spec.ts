import { TestBed } from '@angular/core/testing';

import { ArmoiresService } from './armoires.service';

describe('ArmoiresService', () => {
  let service: ArmoiresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArmoiresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
