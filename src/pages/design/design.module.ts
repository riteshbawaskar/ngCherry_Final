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
  declarations: [DesignComponent, DesignTestSuiteComponent]
})
export class DesignModule { }
