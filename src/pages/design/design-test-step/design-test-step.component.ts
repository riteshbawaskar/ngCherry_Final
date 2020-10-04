import { MatSnackBar } from '@angular/material/snack-bar';
import { TestStepDialogComponent } from './test-step-dialog/test-step-dialog.component';
import { TeststepService } from './../../../services/teststep.service';
import { TestCase } from './../../../models/test-case';
import { TestStep } from './../../../models/test-step';
import { fuseAnimations } from './../../../theme/animation';
import { Component, OnInit , Input ,ViewEncapsulation} from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-design-test-step',
  templateUrl: './design-test-step.component.html',
  styleUrls: ['./design-test-step.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations   : fuseAnimations
})
export class DesignTestStepComponent implements OnInit {

  @Input() teststeps: TestStep[];
  @Input() testcase: TestCase;
  
  constructor( public dialog: MatDialog, public tsdataservice: TeststepService, public matSnackBar: MatSnackBar) { }

  drop(event: CdkDragDrop<string[]>) {

    moveItemInArray(this.teststeps, event.previousIndex, event.currentIndex);
    let stepid = 1;
    this.teststeps.forEach(function(step: TestStep): void {
      step.seqid = stepid.toString();
      stepid = stepid + 1;
    });
  }

  getTestSteps()
  {
    this.tsdataservice.getSteps(this.testcase._id).subscribe(resp => {
      this.teststeps = resp;
      let stepid = 1;
      this.teststeps.forEach(function(step: TestStep): void {
          step.seqid = stepid.toString();
          stepid = stepid + 1;
    });

  });
}

  DeleteStep(step)
  {

    this.tsdataservice.deleteStep(step).subscribe(resp => {
      this.matSnackBar.open('Test Step Deleted.', 'OK', {
        verticalPosition: 'top',
        duration        : 2000 });
        this.getTestSteps();
    } );
  }

  AddTestStep(): void
  {
    let teststep = new TestStep();
    teststep.testcaseid = this.testcase._id;
    teststep.active = true;
    teststep.seqid = (this.teststeps.length + 1).toString();
    teststep.tags = [];

    let dialogRef = this.dialog.open(TestStepDialogComponent, {
      width: '500px',
      data: teststep,
      panelClass: 'test-step-dialog',
    });

    dialogRef.afterClosed().subscribe((result) => {
      result.action = result.action.name;
      this.tsdataservice.addStep(result).subscribe(resp => {
        this.matSnackBar.open('Test Step Added.', 'OK', {
          verticalPosition: 'top',
          duration        : 2000 });
      });
      
      console.log('New step Added' + JSON.stringify(result));
    });

  }

  EditTestStep(teststep): void
  {
    let dialogRef = this.dialog.open(TestStepDialogComponent, {
      width: '500px',
      data: teststep,
      panelClass: 'test-step-dialog',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if(!result) {return;}
      result.action = result.action.name;
      this.tsdataservice.editStep(result).subscribe(resp => {
        this.matSnackBar.open('Test Step Updated.', 'OK', {
          verticalPosition: 'top',
          duration        : 2000 });
      });
      console.log('step Updated' + JSON.stringify(result));
    });

  }

  
  ngOnInit() {
  }

}
