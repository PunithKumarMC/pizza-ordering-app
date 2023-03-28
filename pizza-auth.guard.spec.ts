import { TestBed } from '@angular/core/testing';

import { PizzaAuthGuard } from './pizza-auth.guard';

describe('PizzaAuthGuard', () => {
  let guard: PizzaAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PizzaAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
