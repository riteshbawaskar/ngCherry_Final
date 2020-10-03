import { TestSuite } from './../../../../models/test-suite';
import { Component, Inject, ViewEncapsulation, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-test-suite-dialog',
  templateUrl: './test-suite-dialog.component.html',
  styleUrls: ['./test-suite-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TestSuiteDialogComponent implements OnInit {
  action: string;
  testSuite: TestSuite;
  dataForm: FormGroup;
  dialogTitle: string;

  constructor(public matDialogRef: MatDialogRef<TestSuiteDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private _data: any,
              private _formBuilder: FormBuilder) {

    this.action = _data.action;

    if (this.action === 'edit') {
      this.dialogTitle = 'Edit Suite';
      this.testSuite = _data.testSuite;
    } else {
      this.dialogTitle = 'New Suite';
      this.testSuite = new TestSuite();
    }

    this.dataForm = this.createForm();

    }

    createForm(): FormGroup {
      return this._formBuilder.group({
        _id: [this.testSuite._id],
        name: [this.testSuite.name],
        description: [this.testSuite.description],
        group: [this.testSuite.group],
        projectid: [this.testSuite.projectid],
        active: [this.testSuite.active]
      });
    }

  ngOnInit() {
  }

}
