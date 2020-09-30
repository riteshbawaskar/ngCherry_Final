import { TestCase } from './../../../models/test-case';
import { FormGroup } from '@angular/forms';
import { TestcaseService } from './../../../services/testcase.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TestCaseDialogComponent } from './test-case-dialog/test-case-dialog.component';
import { fuseAnimations } from './../../../theme/animation';
import { Component, OnInit , Input, ViewEncapsulation} from '@angular/core';
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
  @Input() suite;
  dialogRef: any;
  testcases: TestCase[];
  testcase: TestCase;


  constructor(private _matDialog: MatDialog, private testcaseservice: TestcaseService, public matSnackBar: MatSnackBar) { }


  ToggleSuitePanel(): void { this.suitepanel.toggle(); }

  ngOnInit() {
  }

  AddTestCase(): void
  {
    this.dialogRef = this._matDialog.open(TestCaseDialogComponent, {
      panelClass: 'test-case-dialog',
      data: { action: 'new' }
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
