/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DesignTestStepComponent } from './design-test-step.component';

describe('DesignTestStepComponent', () => {
  let component: DesignTestStepComponent;
  let fixture: ComponentFixture<DesignTestStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignTestStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignTestStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
