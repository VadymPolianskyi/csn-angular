import { TestBed, inject } from '@angular/core/testing';

import { SecondQueryService } from './second-query.service';

describe('SecondQueryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecondQueryService]
    });
  });

  it('should be created', inject([SecondQueryService], (service: SecondQueryService) => {
    expect(service).toBeTruthy();
  }));
});
