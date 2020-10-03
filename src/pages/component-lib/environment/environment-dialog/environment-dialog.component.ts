import { Environment } from './../../../../models/environment';

import { Component, Inject, ViewEncapsulation, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-environment-dialog',
  templateUrl: './environment-dialog.component.html',
  styleUrls: ['./environment-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EnvironmentDialogComponent implements OnInit {
  action: string;
  env: Environment;
  dataForm: FormGroup;
  dialogTitle: string;

  constructor(public matDialogRef: MatDialogRef<EnvironmentDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private _data: any,
              private _formBuilder: FormBuilder) {

    this.action = _data.action;

    if (this.action === 'edit') {
      this.dialogTitle = 'Edit Environment';
      this.env = _data.environment;
    } else {
      this.dialogTitle = 'New Environment';
      this.env = new Environment();
    }

    this.dataForm = this.createForm();

  }

  createForm(): FormGroup {
    return this._formBuilder.group({
      _id: [this.env._id],
      name: [this.env.name],
      description: [this.env.description],
    });
  }

  ngOnInit() {
  }


}
