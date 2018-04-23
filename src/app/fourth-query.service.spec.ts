import { TestBed, inject } from '@angular/core/testing';

import { FourthQueryService } from './fourth-query.service';

describe('FourthQueryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FourthQueryService]
    });
  });

  it('should be created', inject([FourthQueryService], (service: FourthQueryService) => {
    expect(service).toBeTruthy();
  }));
});
