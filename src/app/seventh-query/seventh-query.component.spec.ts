import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeventhQueryComponent } from './seventh-query.component';

describe('SeventhQueryComponent', () => {
  let component: SeventhQueryComponent;
  let fixture: ComponentFixture<SeventhQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeventhQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeventhQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
