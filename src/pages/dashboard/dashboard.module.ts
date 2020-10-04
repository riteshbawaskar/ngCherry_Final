import { AuthService } from './../../services/auth.service';
import { ExecutionService } from './../../services/execution.service';
import { TestsuiteService } from './../../services/testsuite.service';
import { TestcaseService } from './../../services/testcase.service';
import { TeststepService } from './../../services/teststep.service';
import { SharedModule } from '../../core/modules/shared.module';
import { MaterialModule } from './../../core/modules/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
  ],
  declarations: [DashboardComponent],
  providers: [TeststepService, TestcaseService, TestsuiteService, ExecutionService, AuthService]
})
export class DashboardModule { }
