import { TestBed, inject } from '@angular/core/testing';

import { NinthQueryService } from './ninth-query.service';

describe('NinthQueryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NinthQueryService]
    });
  });

  it('should be created', inject([NinthQueryService], (service: NinthQueryService) => {
    expect(service).toBeTruthy();
  }));
});
