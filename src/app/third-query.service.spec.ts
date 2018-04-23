import { TestBed, inject } from '@angular/core/testing';

import { ThirdQueryService } from './third-query.service';

describe('ThirdQueryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThirdQueryService]
    });
  });

  it('should be created', inject([ThirdQueryService], (service: ThirdQueryService) => {
    expect(service).toBeTruthy();
  }));
});
