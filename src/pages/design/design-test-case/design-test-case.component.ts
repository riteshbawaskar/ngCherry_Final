import { AuthService } from './../../../services/auth.service';
import { ProjectService } from './../../../services/project.service';
import { ExecutionService } from './../../../services/execution.service';
import { group } from '@angular/animations';
import { TestSuite } from './../../../models/test-suite';
import { ExecutionDialogComponent } from './execution-dialog/execution-dialog.component';
import { Execution } from './../../../models/execution';
import { TestCase } from './../../../models/test-case';
import { FormGroup } from '@angular/forms';
import { TestcaseService } from './../../../services/testcase.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TestCaseDialogComponent } from './test-case-dialog/test-case-dialog.component';
import { fuseAnimations } from './../../../theme/animation';
import { Component, OnInit , Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from './../../../core/modules/material.module';
import { SharedModule } from './../../../core/modules/shared.module';


@Component({
  selector: 'app-design-test-case',
  templateUrl: './design-test-case.component.html',
  styleUrls: ['./design-test-case.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations   : fuseAnimations
})
export class DesignTestCaseComponent implements OnInit {

  @Input() suitepanel;
  @Input() suite: TestSuite;
  @Input() testcases: TestCase[];
  @Output() SelectedTest = new EventEmitter();
  testcase: TestCase;
  dialogRef: any;


  constructor(private _matDialog: MatDialog, private testcaseservice: TestcaseService, private projectservice: ProjectService, 
              private auth: AuthService, private executionservice: ExecutionService , public matSnackBar: MatSnackBar) { }


  ToggleSuitePanel(): void { this.suitepanel.toggle(); }

  ngOnInit() {
  }

  executeTest()
  {
    let execution = new Execution();
    execution.projectid = this.projectservice.selectedProject._id;
    execution.runby = this.auth.currentUser.userId;
    execution.suiteid = this.suite._id;
    execution.testcasefilter = [];
    execution.teststepfilter = [];
    execution.name = this.suite.group + ' >> ' + this.suite.name;

    const dialogRef = this._matDialog.open(ExecutionDialogComponent, {
      width: '600px',
      disableClose: true,
      panelClass: 'execution-dialog',
       data: execution
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result == null) {return; }
      execution = result;
      this.executionservice.addExecution(execution).subscribe(res => {
          this.matSnackBar.open('Execution Scheduled', 'OK', {
          verticalPosition: 'top',
          duration: 2000
        });
      });
    });
  }

  getTestCases(): void {
    this.testcaseservice.getTests(this.suite._id).subscribe(data => {
      this.testcases = data;
    });
  }

selectTest(test): void {
  this.SelectedTest.emit(test);
}

editTest(testcase){

  this.dialogRef = this._matDialog.open(TestCaseDialogComponent, {
    panelClass: 'test-case-dialog',
    data: { action: 'edit', test: testcase }
  });

  this.dialogRef.afterClosed()
  .subscribe(response => {
    if (!response) {
      return;
    }
    const actionType: string = response[0];
    const formData: FormGroup = response[1];
    switch (actionType) {
      /**
       * Save
       */
      case 'save':
        console.log('saving form :' +formData.getRawValue());
        this.testcaseservice.editTest(formData.getRawValue()).subscribe(
          res => {
              this.matSnackBar.open('TestCase updated:', 'OK', {
                  verticalPosition: 'top',
                  duration        : 2000 });
              },
                error => console.log(error)
            );

        break;
      /**
       * Delete
       */
      case 'delete':
        this.deleteTest(testcase);

        break;
    }

    this.getTestCases();
  });
}

deleteTest(testcase): void{

  this.testcaseservice.deleteTest(testcase).subscribe(resp => {
    this.matSnackBar.open('TestCase Deleted.', 'OK', {
      verticalPosition: 'top',
      duration        : 2000 });
    this.getTestCases();
    },
    error => {console.log(error); }
  );
}

copyTest(test){}

AddTestCase(): void
{
    this.dialogRef = this._matDialog.open(TestCaseDialogComponent, {
      panelClass: 'test-case-dialog',
      data: { action: 'new', suite: this.suite }
    });

    this.dialogRef.afterClosed()
      .subscribe((response: FormGroup) => {
        if (!response) {
          return;
        }
        console.log(response.getRawValue());
        this.testcaseservice.addTest(response.getRawValue()).subscribe(
          res => {
            this.matSnackBar.open('Test Case Added:', 'OK', {
              verticalPosition: 'top',
              duration: 2000
            });
          },
          error => {
            this.matSnackBar.open('Error Adding Suite:' + error, 'OK', {
              verticalPosition: 'top',
              duration: 2000
            });
            console.log(error);
          }
        );
      });
  }
}
