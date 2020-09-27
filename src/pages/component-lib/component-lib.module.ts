import { ComponentLibDialogComponent } from './component-lib-dialog/component-lib-dialog.component';
import { ComponentLibService } from './../../services/component-lib.service';
import { NewComponentLibComponent } from './new-componentLib/new-componentLib.component';
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
    MaterialModule
  ],
  declarations: [ComponentLibComponent, NewComponentLibComponent, ComponentLibDialogComponent],
  providers: [ComponentLibService]
})
export class ComponentLibModule { }
