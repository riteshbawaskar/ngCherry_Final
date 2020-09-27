import { MaterialModule } from './../../../core/modules/material.module';
import { ComponentLib } from './../../../models/component-lib';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

import { Component, Inject, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-lib-dialog',
  templateUrl: './component-lib-dialog.component.html',
  styleUrls: ['./component-lib-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ComponentLibDialogComponent implements OnInit {
  action: string;
  componentlib: ComponentLib;
  libForm: FormGroup;
  dialogTitle: string;
  constructor(
    public matDialogRef: MatDialogRef<ComponentLibDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: any,
    private _formBuilder: FormBuilder
  ) {
    // Set the defaults
    this.action = _data.action;

    if (this.action === 'edit') {
      this.dialogTitle = 'Edit Component Lib';
      this.componentlib = _data.ComponentLib;
    } else {
      this.dialogTitle = 'New Component';
      this.componentlib = new ComponentLib();
    }

    this.libForm = this.createLibForm();
  }

  createLibForm(): FormGroup
  {
      return this._formBuilder.group({
          _id : [this.componentlib._id],
          name: [this.componentlib.name],
          description: [this.componentlib.description]
      });
  }

  ngOnInit() {}
}
