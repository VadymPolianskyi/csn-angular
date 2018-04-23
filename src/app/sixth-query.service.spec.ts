import { TestBed, inject } from '@angular/core/testing';

import { SixthQueryService } from './sixth-query.service';

describe('SixthQueryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SixthQueryService]
    });
  });

  it('should be created', inject([SixthQueryService], (service: SixthQueryService) => {
    expect(service).toBeTruthy();
  }));
});
