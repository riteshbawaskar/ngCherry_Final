import { FormGroup } from '@angular/forms';
import { EnvironmentDialogComponent } from './environment-dialog/environment-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { fuseAnimations } from './../../../theme/animation';
import { EnvironmentService } from './../../../services/environment.service';
import { Environment } from './../../../models/environment';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-environment',
  templateUrl: './environment.component.html',
  styleUrls: ['./environment.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations   : fuseAnimations
})
export class EnvironmentComponent implements OnInit {

  environment: Environment;
  environments: Environment[];
  dialogRef: any;
  constructor(private _matDialog: MatDialog, private environmentservice: EnvironmentService, public matSnackBar: MatSnackBar) { }


  ngOnInit(): void {
    this.getEnvironments();
  }

  getEnvironments(): void {
    this.environmentservice.getEnvironments().subscribe(
      res => {
        this.environments = res;
        console.log(res);
      },
      error => {
        this.matSnackBar.open('Error Adding Suite:' + error, 'OK', {
          verticalPosition: 'top',
          duration: 2000
        });
        console.log(error);
      }
    );
  }

  addEnvironment(): void {

    this.dialogRef = this._matDialog.open(EnvironmentDialogComponent, {
      panelClass: 'environment-dialog',
      data: { action: 'new' }
    });

    this.dialogRef.afterClosed()
      .subscribe((response: FormGroup) => {
        if (!response) {
          return;
        }
        
        console.log(response.getRawValue());
        this.environmentservice.addEnvironment(response.getRawValue()).subscribe(
          res => {
            this.matSnackBar.open('Environment Added. please click add button to add configuration', 'OK', {
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
      
    this.getEnvironments();
  }
}
