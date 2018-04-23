import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SixthQueryComponent } from './sixth-query.component';

describe('SixthQueryComponent', () => {
  let component: SixthQueryComponent;
  let fixture: ComponentFixture<SixthQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixthQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixthQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
