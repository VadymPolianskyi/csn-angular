import { TestBed, inject } from '@angular/core/testing';

import { EightQueryService } from './eight-query.service';

describe('EightQueryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EightQueryService]
    });
  });

  it('should be created', inject([EightQueryService], (service: EightQueryService) => {
    expect(service).toBeTruthy();
  }));
});
