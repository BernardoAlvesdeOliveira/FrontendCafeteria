import { TestBed } from '@angular/core/testing';
import { AuthAccount } from './auth-account';

describe('Auth', () => {
  let service: AuthAccount;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthAccount);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
