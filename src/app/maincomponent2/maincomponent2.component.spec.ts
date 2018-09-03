import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Maincomponent2Component } from './maincomponent2.component';

describe('Maincomponent2Component', () => {
  let component: Maincomponent2Component;
  let fixture: ComponentFixture<Maincomponent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Maincomponent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Maincomponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
