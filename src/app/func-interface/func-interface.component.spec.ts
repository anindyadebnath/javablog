import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncInterfaceComponent } from './func-interface.component';

describe('FuncInterfaceComponent', () => {
  let component: FuncInterfaceComponent;
  let fixture: ComponentFixture<FuncInterfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncInterfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
