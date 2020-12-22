import { TestBed } from '@angular/core/testing';

import { EpicsserviceService } from './epicsservice.service';

describe('EpicsserviceService', () => {
  let service: EpicsserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpicsserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
