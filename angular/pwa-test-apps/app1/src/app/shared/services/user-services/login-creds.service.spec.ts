import { TestBed } from '@angular/core/testing';

import { LoginCredsService } from './login-creds.service';

describe('LoginCredsService', () => {
  let service: LoginCredsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginCredsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
