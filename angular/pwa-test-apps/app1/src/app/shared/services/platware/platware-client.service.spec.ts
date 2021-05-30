import { TestBed } from '@angular/core/testing';

import { PlatwareClientService } from './platware-client.service';

describe('PlatwareClientService', () => {
  let service: PlatwareClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlatwareClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
