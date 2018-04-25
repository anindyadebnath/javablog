import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Objects1Component } from './objects1.component';

describe('Objects1Component', () => {
  let component: Objects1Component;
  let fixture: ComponentFixture<Objects1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Objects1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Objects1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
