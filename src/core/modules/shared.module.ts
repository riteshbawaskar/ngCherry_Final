import { DirectivesModule } from './../directives/directives';

import { FlexPerfectScrollbarDirective } from './../directives/flex-perfect-scrollbar/flex-perfect-scrollbar.directive';
import { ConfirmDialogComponent } from './../components/confirm-dialog/confirm-dialog.component';
import { NgModule, Directive } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {MaterialModule} from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
      ConfirmDialogComponent,
    ],
    imports: [
      FlexLayoutModule,
      MaterialModule,
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      DirectivesModule,
    ],
    exports: [
      FlexLayoutModule,
      MaterialModule,
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      ConfirmDialogComponent,
      DirectivesModule,
    ],
    entryComponents: [
      ConfirmDialogComponent
    ],
    providers: [
    ]
  })
  export class SharedModule {

  }
