/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewComponentLibComponent } from './new-componentLib.component';

describe('NewComponentLibComponent', () => {
  let component: NewComponentLibComponent;
  let fixture: ComponentFixture<NewComponentLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewComponentLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewComponentLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
