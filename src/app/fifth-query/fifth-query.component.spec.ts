import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthQueryComponent } from './fifth-query.component';

describe('FifthQueryComponent', () => {
  let component: FifthQueryComponent;
  let fixture: ComponentFixture<FifthQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FifthQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FifthQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
