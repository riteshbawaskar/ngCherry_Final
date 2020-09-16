import { UsersRoutes } from './users.routing';
import { MaterialModule } from './../../core/modules/material.module';
import { UsersDialogComponent } from './users-dialog/users-dialog.component';
import { SharedModule } from './../../core/modules/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    UsersRoutes
  ],
  declarations: [UsersComponent, UsersDialogComponent]
})
export class UsersModule { }
