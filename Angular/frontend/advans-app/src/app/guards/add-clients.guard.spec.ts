import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { addClientsGuard } from './add-clients.guard';

describe('addClientsGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => addClientsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
