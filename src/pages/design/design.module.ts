import { TestSuiteDialogComponent } from './design-test-suite/test-suite-dialog/test-suite-dialog.component';
import { DesignTestStepComponent } from './design-test-step/design-test-step.component';
import { DesignTestCaseComponent } from './design-test-case/design-test-case.component';
import { DesignTestSuiteComponent } from './design-test-suite/design-test-suite.component';
import { MaterialModule } from './../../core/modules/material.module';
import { SharedModule } from './../../core/modules/shared.module';
import { DesignRoutes } from './design.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignComponent } from './design.component';

@NgModule({
  imports: [
    CommonModule,
    DesignRoutes,
    SharedModule,
    MaterialModule
  ],
  declarations: [TestSuiteDialogComponent, DesignComponent, DesignTestSuiteComponent,DesignTestCaseComponent, DesignTestStepComponent]
})
export class DesignModule { }
