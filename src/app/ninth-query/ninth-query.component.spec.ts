import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NinthQueryComponent } from './ninth-query.component';

describe('NinthQueryComponent', () => {
  let component: NinthQueryComponent;
  let fixture: ComponentFixture<NinthQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NinthQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NinthQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
