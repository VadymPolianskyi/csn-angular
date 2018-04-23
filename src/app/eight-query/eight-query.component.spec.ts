import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EightQueryComponent } from './eight-query.component';

describe('EightQueryComponent', () => {
  let component: EightQueryComponent;
  let fixture: ComponentFixture<EightQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EightQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EightQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
