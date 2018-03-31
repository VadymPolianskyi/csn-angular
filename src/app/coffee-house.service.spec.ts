import { TestBed, inject } from '@angular/core/testing';

import { CoffeeHouseService } from './coffee-house.service';

describe('CoffeeHouseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoffeeHouseService]
    });
  });

  it('should be created', inject([CoffeeHouseService], (service: CoffeeHouseService) => {
    expect(service).toBeTruthy();
  }));
});
