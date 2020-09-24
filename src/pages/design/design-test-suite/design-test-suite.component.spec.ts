/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DesignTestSuiteComponent } from './design-test-suite.component';

describe('DesignTestSuiteComponent', () => {
  let component: DesignTestSuiteComponent;
  let fixture: ComponentFixture<DesignTestSuiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignTestSuiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignTestSuiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
