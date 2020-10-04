import { ActionsService } from './../../../../services/action.service';
import { Actions } from './../../../../models/actions';
import { MatSelectSearchModule } from './../../../../core/components/mat-select-search/mat-select-search.module';
import { MatSelect } from '@angular/material/select';
import { fuseAnimations } from './../../../../theme/animation';
import { FormControl } from '@angular/forms';
import { Component, OnInit, ViewChild, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ReplaySubject } from 'rxjs';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';


@Component({
  selector: 'app-test-step-dialog',
  templateUrl: './test-step-dialog.component.html',
  styleUrls: ['./test-step-dialog.component.scss'],
  animations: fuseAnimations,
  encapsulation: ViewEncapsulation.None,
})
export class TestStepDialogComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  public frmCtrl: FormControl = new FormControl();
  public actions: Actions[];
  /** control for the MatSelect filter keyword */
  public frmFilterCtrl: FormControl = new FormControl();

  public filteredActions: ReplaySubject<Actions[]> = new ReplaySubject<Actions[]>(
    1
  );

  @ViewChild('singleSelect') singleSelect: MatSelect;
  private _onDestroy = new Subject<void>();

  constructor(public matDialogRef: MatDialogRef<TestStepDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public actionservice: ActionsService) {

    actionservice.getAllActions().subscribe(resp => {
      this.actions = resp;
      this.filteredActions.next(this.actions.slice());
      this.frmFilterCtrl.valueChanges
        .pipe(takeUntil(this._onDestroy))
        .subscribe(() => {
          this.filterActions();
        });
    });
    matDialogRef.disableClose = true;
  }

  ngAfterViewInit() {
    this.setInitialValue();
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  /**
   * Sets the initial value after the filteredBanks are loaded initially
   */
  private setInitialValue() {
    this.filteredActions
      .pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(() => {
        this.singleSelect.compareWith = (a: Actions, b: Actions) => a._id === b._id;
      });
  }

  private filterActions(): void {
    if (!this.actions) {
      return;
    }
    // get the search keyword
    let search = this.frmFilterCtrl.value;
    if (!search) {
      this.filteredActions.next(this.actions.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the actions
    this.filteredActions.next(
      this.actions.filter(
        (bank) => bank.name.toLowerCase().indexOf(search) > -1
      )
    );
  }

  public OnSelectionChange(event) {
    console.log('selected ' + event.value.name);
    this.data.input = event.value.input;
    this.data.validation = event.value.validation;
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add
    if ((value || '').trim()) {
      console.log(this.data);
      this.data.tags.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(tag): void {
    const index = this.data.tags.indexOf(tag);

    if (index >= 0) {
      this.data.tags.splice(index, 1);
    }
  }

  AddInput(): void {
    this.data.input.push({ key: '', value: '' });
  }
  AddValidation(): void {
    this.data.validation.push({ key: '', value: '' });
  }
  removeValidationField(validationfield): void {
    const index = this.data.action.validation.indexOf(validationfield);
    this.data.validation.splice(index, 1);
  }
  removeInputField(inputfield): void {
    const index = this.data.action.input.indexOf(inputfield);
    this.data.input.splice(index, 1);
  }


  ngOnInit() {

  }

}
