import { ExecutionService } from './../../services/execution.service';
import { ExecutionRoutes } from './execution.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExecutionComponent } from './execution.component';
import { MaterialModule } from './../../core/modules/material.module';
import { SharedModule } from './../../core/modules/shared.module';

@NgModule({
  imports: [
    CommonModule, ExecutionRoutes, SharedModule, MaterialModule
  ],
  declarations: [ExecutionComponent],
  providers: [ExecutionService]
})
export class ExecutionModule { }
