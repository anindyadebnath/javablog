import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodRefComponent } from './method-ref.component';

describe('MethodRefComponent', () => {
  let component: MethodRefComponent;
  let fixture: ComponentFixture<MethodRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethodRefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
