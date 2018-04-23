import { TestBed, inject } from '@angular/core/testing';

import { SeventhQueryService } from './seventh-query.service';

describe('SeventhQueryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeventhQueryService]
    });
  });

  it('should be created', inject([SeventhQueryService], (service: SeventhQueryService) => {
    expect(service).toBeTruthy();
  }));
});
