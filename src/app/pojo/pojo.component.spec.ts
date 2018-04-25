import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PojoComponent } from './pojo.component';

describe('PojoComponent', () => {
  let component: PojoComponent;
  let fixture: ComponentFixture<PojoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PojoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PojoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
