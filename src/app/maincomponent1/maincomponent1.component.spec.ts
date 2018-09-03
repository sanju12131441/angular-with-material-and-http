import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Maincomponent1Component } from './maincomponent1.component';

describe('Maincomponent1Component', () => {
  let component: Maincomponent1Component;
  let fixture: ComponentFixture<Maincomponent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Maincomponent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Maincomponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
