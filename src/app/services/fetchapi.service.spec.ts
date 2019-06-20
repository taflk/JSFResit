import { TestBed } from '@angular/core/testing';

import { FetchapiService } from './fetchapi.service';

describe('FetchapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchapiService = TestBed.get(FetchapiService);
    expect(service).toBeTruthy();
  });
});
