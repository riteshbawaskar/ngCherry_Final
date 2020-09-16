import { FlexPerfectScrollbarDirective } from './../directives/flex-perfect-scrollbar/flex-perfect-scrollbar.directive';
import { ConfirmDialogComponent } from './../components/confirm-dialog/confirm-dialog.component';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {MaterialModule} from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
    declarations: [
      ConfirmDialogComponent,
      FlexPerfectScrollbarDirective
    ],
    imports: [
      FlexLayoutModule,
      MaterialModule,
      CommonModule,
      FormsModule,
      ReactiveFormsModule
    ],
    exports: [
      FlexLayoutModule,
      MaterialModule,
      CommonModule,
      FormsModule,
      FlexPerfectScrollbarDirective,
      ReactiveFormsModule,
      ConfirmDialogComponent,
    ],
    entryComponents: [
      ConfirmDialogComponent
    ],
    providers: [
    ]
  })
  export class SharedModule {

  }
