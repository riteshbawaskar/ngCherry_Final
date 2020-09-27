import { ComponentLibDialogComponent } from './component-lib-dialog/component-lib-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ComponentLibService } from './../../services/component-lib.service';
import { fuseAnimations } from './../../theme/animation';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-component-lib',
  templateUrl: './component-lib.component.html',
  styleUrls: ['./component-lib.component.scss'],
  animations: fuseAnimations
})
export class ComponentLibComponent implements OnInit {

  dialogRef: any;
  constructor(private _matDialog: MatDialog, private componentlibservice: ComponentLibService, public matSnackBar: MatSnackBar) { }

  ngOnInit() {
  }

  AddNewComponent(): void {
    this.dialogRef = this._matDialog.open(ComponentLibDialogComponent, {
      panelClass: 'user-form-dialog',
      data: { action: 'new' }
    });

    this.dialogRef.afterClosed()
      .subscribe((response: FormGroup) => {
        if (!response) {
          return;
        }
        console.log(response.getRawValue());
        this.componentlibservice.addLib(response.getRawValue()).subscribe(
          res => {
            this.matSnackBar.open('Library Added:' + res, 'OK', {
              verticalPosition: 'top',
              duration: 2000
            });
          },
          error => {
            this.matSnackBar.open('User Add Error:' + error, 'OK', {
              verticalPosition: 'top',
              duration: 2000
            });
            console.log(error);
          }
        );
      });
  }

}
