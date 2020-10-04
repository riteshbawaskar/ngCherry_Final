import { TestCase } from './../../../../models/test-case';
import { group } from '@angular/animations';
import { TestSuite } from './../../../../models/test-suite';
import { Component, Inject, ViewEncapsulation, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-test-case-dialog',
  templateUrl: './test-case-dialog.component.html',
  styleUrls: ['./test-case-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TestCaseDialogComponent implements OnInit {
  action: string;
  testCase: TestCase;
  dataForm: FormGroup;
  dialogTitle: string;
  constructor(public matDialogRef: MatDialogRef<TestCaseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: any,
    private _formBuilder: FormBuilder) {

    this.action = _data.action;

    if (this.action === 'edit') {
      this.dialogTitle = 'Edit TestCase';
      this.testCase = _data.test;
    } else {
      this.dialogTitle = 'New TestCase';
      this.testCase = new TestCase();
      this.testCase.testsuiteid = _data.suite._id;
      this.testCase.active = true;
      this.testCase.tags = [];
    }

    this.dataForm = this.createForm();

  }

  createForm(): FormGroup {
    return this._formBuilder.group({
      _id: [this.testCase._id],
      name: [this.testCase.name],
      description: [this.testCase.description],
      tags: [this.testCase.tags],
      testsuiteid: [this.testCase.testsuiteid],
      active: [this.testCase.active]
    });
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add
    if ((value || '').trim()) {
      console.log(this.testCase.tags);
      this.testCase.tags.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(tag): void {
    const index = this.testCase.tags.indexOf(tag);

    if (index >= 0) {
      this.testCase.tags.splice(index, 1);
    }
  }


  ngOnInit() {
  }


}
