import { TestBed, inject } from '@angular/core/testing';

import { CoffeeDrinkService } from './coffee-drink.service';

describe('CoffeeDrinkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoffeeDrinkService]
    });
  });

  it('should be created', inject([CoffeeDrinkService], (service: CoffeeDrinkService) => {
    expect(service).toBeTruthy();
  }));
});
