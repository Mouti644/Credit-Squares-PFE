import { TestBed } from '@angular/core/testing';

import { RefServiceService } from './ref-service.service';

describe('RefServiceService', () => {
  let service: RefServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RefServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
