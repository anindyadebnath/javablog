import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Objects2Component } from './objects2.component';

describe('Objects2Component', () => {
  let component: Objects2Component;
  let fixture: ComponentFixture<Objects2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Objects2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Objects2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
