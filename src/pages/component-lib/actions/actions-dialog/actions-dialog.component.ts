import { fuseAnimations } from './../../../../theme/animation';
import { Component, OnInit, ViewChild, Inject, ViewEncapsulation, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-actions-dialog',
  templateUrl: './actions-dialog.component.html',
  styleUrls: ['./actions-dialog.component.scss'],
  animations: fuseAnimations,
  encapsulation: ViewEncapsulation.None,
})
export class ActionsDialogComponent implements OnInit {


  constructor(    public matDialogRef: MatDialogRef<ActionsDialogComponent>,
                  @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  AddInput(): void {
    this.data.action.input.push({key: '', value: ''});
  }
  AddValidation(): void {
    this.data.action.validation.push({ key: '', value: '' });
  }
  removeValidationField(validationfield): void
  {
    const index = this.data.action.validation.indexOf(validationfield);
    this.data.action.validation.splice(index, 1);
  }
  removeInputField(inputfield): void
  {
    const index = this.data.action.input.indexOf(inputfield);
    this.data.action.input.splice(index, 1);
  }

}
