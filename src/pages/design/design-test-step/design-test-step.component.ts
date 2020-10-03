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
  
  constructor( public dialog: MatDialog, public tsdataservice: TeststepService) { }

  drop(event: CdkDragDrop<string[]>) {

    moveItemInArray(this.teststeps, event.previousIndex, event.currentIndex);
    let stepid = 1;
    this.teststeps.forEach(function(step: TestStep): void {
      step.id = stepid.toString();
      stepid = stepid + 1;
    });
  }

  AddTestStep()
  {

  }

  ngOnInit() {
  }

}
