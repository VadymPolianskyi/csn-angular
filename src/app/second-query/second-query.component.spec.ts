import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondQueryComponent } from './second-query.component';

describe('SecondQueryComponent', () => {
  let component: SecondQueryComponent;
  let fixture: ComponentFixture<SecondQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
