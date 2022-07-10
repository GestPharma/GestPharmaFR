import { TestBed } from '@angular/core/testing';

import { ArmoiresContenuService } from './armoires-contenu.service';

describe('ArmoiresContenuService', () => {
  let service: ArmoiresContenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArmoiresContenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
