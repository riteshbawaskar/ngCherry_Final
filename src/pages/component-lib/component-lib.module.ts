import { EnvironmentConfigComponent } from './environment/environment-config/environment-config.component';
import { ActionsService } from './../../services/action.service';
import { EnvironmentService } from './../../services/environment.service';
import { EnvironmentDialogComponent } from './environment/environment-dialog/environment-dialog.component';
import { EnvironmentComponent } from './environment/environment.component';
import { ActionsComponent } from './actions/actions.component';
import { HttpClientModule } from '@angular/common/http';
import { ComponentLibDialogComponent } from './component-lib-dialog/component-lib-dialog.component';
import { ComponentLibService } from './../../services/component-lib.service';
import { MaterialModule } from './../../core/modules/material.module';
import { SharedModule } from './../../core/modules/shared.module';
import { ComponentLibRoutes } from './component-lib.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLibComponent } from './component-lib.component';
import { ActionsDialogComponent } from './actions/actions-dialog/actions-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentLibRoutes,
    SharedModule,
    MaterialModule,
    HttpClientModule
  ],
  declarations: [ComponentLibComponent, ComponentLibDialogComponent, ActionsComponent, EnvironmentComponent,
    EnvironmentDialogComponent, ActionsDialogComponent, EnvironmentConfigComponent],
  providers: [ComponentLibService, EnvironmentService, ActionsService]
})
export class ComponentLibModule { }
