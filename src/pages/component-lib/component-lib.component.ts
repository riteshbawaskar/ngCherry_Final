import { ComponentLib } from './../../models/component-lib';
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
  componentlibs: ComponentLib[];
  lib: ComponentLib;
  constructor(private _matDialog: MatDialog, private componentlibservice: ComponentLibService, public matSnackBar: MatSnackBar) { }

  ngOnInit() {
    this.getLibs();
  }

  getLibs(): void {
    this.componentlibservice.getLibs().subscribe(
      data => {
        this.componentlibs = data;
        console.log(data);
      },
      error => console.log(error)
    );

  }

  EditComponent(componentlib)
  {
    console.log(componentlib);
    this.dialogRef = this._matDialog.open(ComponentLibDialogComponent, {
      panelClass: 'component-lib-dialog',
      data: {
        componentlib: componentlib,
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
            this.componentlibservice.editLib(formData.getRawValue()).subscribe(
              res => {
                  this.matSnackBar.open('Library updated:', 'OK', {
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
            this.deleteComponent(componentlib);

            break;
        }
      });
  }

  deleteComponent(componentlib): void{
    this.componentlibservice.deleteLib(componentlib).subscribe(
      res => {
        this.matSnackBar.open('Lib deleted', 'OK', {
          verticalPosition: 'top',
          duration: 2000
        });
        this.getLibs();
      }
    );
  }

  AddNewComponent(): void {
    this.dialogRef = this._matDialog.open(ComponentLibDialogComponent, {
      panelClass: 'component-lib-dialog',
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
            this.getLibs();
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
