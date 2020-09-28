import { Component, OnInit } from '@angular/core';
import { MaterialModule } from './../../../core/modules/material.module';
import { ComponentLib } from './../../../models/component-lib';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-actions-dialog',
  templateUrl: './actions-dialog.component.html',
  styleUrls: ['./actions-dialog.component.scss']
})
export class ActionsDialogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
