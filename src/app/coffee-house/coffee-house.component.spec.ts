import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeHouseComponent } from './coffee-house.component';

describe('CoffeeHouseComponent', () => {
  let component: CoffeeHouseComponent;
  let fixture: ComponentFixture<CoffeeHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffeeHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
