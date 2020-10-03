import { MatSnackBar } from '@angular/material/snack-bar';
import { ActionsService } from './../../../services/action.service';
import { Actions } from '../../../models/actions';
import { ActionsDialogComponent } from './actions-dialog/actions-dialog.component';
import { fuseAnimations } from './../../../theme/animation';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './../../../core/components/confirm-dialog/confirm-dialog.component';
import { Component, OnInit, ViewEncapsulation, ViewChild, TemplateRef } from '@angular/core';
import { MaterialModule } from '../../../core/modules/material.module';
import { SharedModule } from '../../../core/modules/shared.module';
import { MatTableDataSource } from '@angular/material/table';
 
@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss'],
  animations: fuseAnimations,
  encapsulation: ViewEncapsulation.None,
})
export class ActionsComponent implements OnInit {

  @ViewChild('dialogContent', { static: false })
  dialogContent: TemplateRef<any>;

  displayedColumns = ['avatar','name', 'description', 'active',  'buttons'];
  selectedUsers: any[];
  checkboxes: {};
  dialogRef: any;
  action: Actions;
  actions: Actions[];
  confirmDialogRef: MatDialogRef<ConfirmDialogComponent>;
  public dataSource: any;

  constructor( public dialog: MatDialog, public actionsService: ActionsService, public matSnackBar: MatSnackBar) { }

  ngOnInit() {
    this.getActions();
  }

  getActions(): void {
    this.actionsService.getActions().subscribe(
      data => {
        this.actions = data;
        this.dataSource = new MatTableDataSource<Actions>(this.actions);
        console.log(data);
      },
      error => console.log(error)
    );
  }

  addAction(): void {
    this.action = new Actions();
    this.action.componentid = '1';
    this.action.input = [];
    this.action.validation = [];
    this.action.input.push({key: '', value: ''});
    this.action.validation.push({key: '', value: ''});
    this.dialogRef = this.dialog.open(ActionsDialogComponent, {
      panelClass: 'actions-dialog',
      width: '600px',
      data: this.action,
      disableClose: true,
    });

    this.dialogRef.afterClosed().subscribe((result) => {
      console.log('New Action Added :' + result.name);
      this.actionsService.addAction(result).subscribe(resp => {
        this.matSnackBar.open('Action Added', 'OK', {
          verticalPosition: 'top',
          duration: 2000
        });
      });
    });
  }

  editAction(action): void{

    this.dialogRef = this.dialog.open(ActionsDialogComponent, {
      panelClass: 'actions-dialog',
      width: '600px',
      data: action,
      disableClose: true,
    });

    this.dialogRef.afterClosed().subscribe((result) => {
      console.log('Action Edited :' + result.name);
      this.getActions();
      this.actionsService.editActions(result).subscribe(resp => {
        this.matSnackBar.open('Action Edited successfully', 'OK', {
          verticalPosition: 'top',
          duration: 2000
        });
      });
    });
  }
  deleteAction(action): void
  {
    this.actionsService.deleteActions(action).subscribe(resp => {
      this.getActions();
      this.matSnackBar.open('Action Deleted successfully', 'OK', {
        verticalPosition: 'top',
        duration: 2000
      });
    });
  }

}
