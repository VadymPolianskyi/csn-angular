import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenthQueryComponent } from './tenth-query.component';

describe('TenthQueryComponent', () => {
  let component: TenthQueryComponent;
  let fixture: ComponentFixture<TenthQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenthQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenthQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
