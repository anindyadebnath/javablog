import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncInterface1Component } from './func-interface1.component';

describe('FuncInterface1Component', () => {
  let component: FuncInterface1Component;
  let fixture: ComponentFixture<FuncInterface1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncInterface1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncInterface1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
