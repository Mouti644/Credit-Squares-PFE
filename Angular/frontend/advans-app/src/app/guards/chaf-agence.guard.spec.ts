import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { chafAgenceGuard } from './chaf-agence.guard';

describe('chafAgenceGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => chafAgenceGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
