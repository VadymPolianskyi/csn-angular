import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdQueryComponent } from './third-query.component';

describe('ThirdQueryComponent', () => {
  let component: ThirdQueryComponent;
  let fixture: ComponentFixture<ThirdQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
