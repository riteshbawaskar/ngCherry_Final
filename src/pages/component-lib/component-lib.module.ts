import { HttpClientModule } from '@angular/common/http';
import { ComponentLibDialogComponent } from './component-lib-dialog/component-lib-dialog.component';
import { ComponentLibService } from './../../services/component-lib.service';
import { MaterialModule } from './../../core/modules/material.module';
import { SharedModule } from './../../core/modules/shared.module';
import { ComponentLibRoutes } from './component-lib.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLibComponent } from './component-lib.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentLibRoutes,
    SharedModule,
    MaterialModule,
    HttpClientModule
  ],
  declarations: [ComponentLibComponent, ComponentLibDialogComponent],
  providers: [ComponentLibService]
})
export class ComponentLibModule { }
