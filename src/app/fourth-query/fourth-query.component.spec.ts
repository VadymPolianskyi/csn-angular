import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthQueryComponent } from './fourth-query.component';

describe('FourthQueryComponent', () => {
  let component: FourthQueryComponent;
  let fixture: ComponentFixture<FourthQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourthQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
