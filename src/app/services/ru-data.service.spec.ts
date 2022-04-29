import { TestBed } from '@angular/core/testing';

import { RuDataService } from './ru-data.service';

describe('RuDataService', () => {
  let service: RuDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RuDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
