import { Environment } from 'models/environment';
import { EnvironmentService } from './../../../../services/environment.service';
import { TestSuiteDialogComponent } from './../../design-test-suite/test-suite-dialog/test-suite-dialog.component';
import { Execution } from './../../../../models/execution';
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
  selector: 'app-execution-dialog',
  templateUrl: './execution-dialog.component.html',
  styleUrls: ['./execution-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExecutionDialogComponent implements OnInit {
  action: string;
  execution: Execution;
  testSuite: TestSuite;
  envrionments: Environment[];

  constructor(
    public matDialogRef: MatDialogRef<ExecutionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Execution, public envservice: EnvironmentService ) {

      envservice.getEnvironments().subscribe(resp => {this.envrionments = resp; });
      console.log('data:' + data.suiteid);
    }

  addtestfilter(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add
    if ((value || '').trim()) {
      this.data.testcasefilter.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removetestfilter(tag): void {
    const index = this.data.testcasefilter.indexOf(tag);

    if (index >= 0) {
      this.data.testcasefilter.splice(index, 1);
    }
  }

  addstepfilter(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add
    if ((value || '').trim()) {
      this.data.teststepfilter.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removestepfilter(tag): void {
    const index = this.data.teststepfilter.indexOf(tag);

    if (index >= 0) {
      this.data.teststepfilter.splice(index, 1);
    }
  }

  addtagfilter(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add
    if ((value || '').trim()) {
      this.data.tag.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removetagfilter(tag): void {
    const index = this.data.tag.indexOf(tag);

    if (index >= 0) {
      this.data.tag.splice(index, 1);
    }
  }
  ngOnInit() {}
}
