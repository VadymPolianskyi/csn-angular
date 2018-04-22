import { TestBed, inject } from '@angular/core/testing';

import { FirstQueryService } from './first-query.service';

describe('FirstQueryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirstQueryService]
    });
  });

  it('should be created', inject([FirstQueryService], (service: FirstQueryService) => {
    expect(service).toBeTruthy();
  }));
});
