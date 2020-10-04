import { TestSuiteDialogComponent } from './test-suite-dialog/test-suite-dialog.component';
import { TestSuite } from './../../../models/test-suite';
import { MatDialogModule } from '@angular/material/dialog';
import { TestsuiteService } from './../../../services/testsuite.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { fuseAnimations } from './../../../theme/animation';
import { Component, OnInit , ViewEncapsulation, Output, EventEmitter} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from './../../../core/modules/material.module';
import { SharedModule } from './../../../core/modules/shared.module';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-design-test-suite',
  templateUrl: './design-test-suite.component.html',
  styleUrls: ['./design-test-suite.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations   : fuseAnimations
})
export class DesignTestSuiteComponent implements OnInit {
  @Output() SelectedSuite = new EventEmitter();
  dialogRef: any;
  testSuites: TestSuite[];
  testSuite: TestSuite;
  suitesHierarchy;

  constructor(private _matDialog: MatDialog, private testSuiteservice: TestsuiteService, public matSnackBar: MatSnackBar) { }

  ngOnInit() {
    this.suitesHierarchy = this.getHierarchyData();
  }

  deleteSuite(suite): void
  {
    this.testSuiteservice.deleteSuite(suite).subscribe(resp => {
      this.matSnackBar.open('TestSuite Deleted.', 'OK', {
        verticalPosition: 'top',
        duration        : 2000 });
      this.getHierarchyData();
      },
      error => {console.log(error)}
    );
  }
  SelectSuite(suite)
  {
    this.SelectedSuite.emit(suite);
    console.log('suite Selected' + suite.id);
  }

  getHierarchyData(): any {
    let output = [];

    this.testSuiteservice.getSuites().subscribe(
     data => {
    data.forEach((item) => {
      let result = output;
      const path = item.group.split(' >> ');
      path.forEach((key) => {
        const match = result.find((obj) => obj.name === key);
        if (match === undefined) {
          const group = {
            _id: 0,
            name: key,
            description: '',
            group: '',
            projectid: '',
            children: []
          };
          result.push(group);
          result = group.children;
        }
        else {
        result = match.children;
        }
      });
      const child = {
            _id: item._id,
            name: item.name,
            description: item.description,
            group: item.group,
            projectid: item.projectid,
            children: [],
          };
      result.push(child);
    });
  });

    return output;
  }

  editSuite(testSuite)
  {
    console.log(testSuite);
    this.dialogRef = this._matDialog.open(TestSuiteDialogComponent, {
      panelClass: 'test-suite-dialog',
      data: {
        testSuite: testSuite,
        action: 'edit'
      }
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
            console.log(formData.getRawValue());
            
            this.testSuiteservice.editSuite(formData.getRawValue()).subscribe(
              res => {
                  this.matSnackBar.open('TestSuite updated:', 'OK', {
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
            this.deleteSuite(testSuite);

            break;
        }

        this.getHierarchyData();
      });
  }

  AddTestSuite(): void
  {
    this.dialogRef = this._matDialog.open(TestSuiteDialogComponent, {
      panelClass: 'test-suite-dialog',
      data: { action: 'new' }
    });

    this.dialogRef.afterClosed()
      .subscribe((response: FormGroup) => {
        if (!response) {
          return;
        }
        
        console.log(response.getRawValue());
        this.testSuiteservice.addSuites(response.getRawValue()).subscribe(
          res => {
            this.matSnackBar.open('Test Suite Added:', 'OK', {
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
        this.getHierarchyData();
      });


  }

}
