import { TestBed } from '@angular/core/testing';

import { PlatwareErrorService } from './platware-error.service';

describe('PlatwareErrorService', () => {
  let service: PlatwareErrorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlatwareErrorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
