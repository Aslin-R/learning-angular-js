import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToplanguagesComponent } from './toplanguages.component';

describe('ToplanguagesComponent', () => {
  let component: ToplanguagesComponent;
  let fixture: ComponentFixture<ToplanguagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToplanguagesComponent]
    });
    fixture = TestBed.createComponent(ToplanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
