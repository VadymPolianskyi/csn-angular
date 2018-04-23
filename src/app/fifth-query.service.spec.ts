import { TestBed, inject } from '@angular/core/testing';

import { FifthQueryService } from './fifth-query.service';

describe('FifthQueryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FifthQueryService]
    });
  });

  it('should be created', inject([FifthQueryService], (service: FifthQueryService) => {
    expect(service).toBeTruthy();
  }));
});
