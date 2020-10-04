import { TestStepDialogComponent } from './design-test-step/test-step-dialog/test-step-dialog.component';
import { FilterPipe } from './../../core/pipes/filter.pipes';
import { ExecutionDialogComponent } from './design-test-case/execution-dialog/execution-dialog.component';
import { TestCaseDialogComponent } from './design-test-case/test-case-dialog/test-case-dialog.component';
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
import { MatSelectSearchModule } from 'core/components/mat-select-search/mat-select-search.module';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  imports: [
    CommonModule,
    DesignRoutes,
    SharedModule,
    MaterialModule,
    MatSelectSearchModule,
    DragDropModule
  ],
  declarations: [TestCaseDialogComponent,
    FilterPipe,
    TestSuiteDialogComponent,
    ExecutionDialogComponent,
    DesignComponent,
    DesignTestSuiteComponent,
    DesignTestCaseComponent,
    DesignTestStepComponent,
    TestStepDialogComponent,

  ]
})
export class DesignModule { }
