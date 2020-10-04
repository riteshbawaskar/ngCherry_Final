import { ComponentLibService } from './../../../services/component-lib.service';
import { ComponentLib } from './../../../models/component-lib';
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
import { ActivatedRoute } from '@angular/router';
 
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
  componentlib: ComponentLib;

  constructor( private route: ActivatedRoute , public dialog: MatDialog, 
               public actionsService: ActionsService, public libservice: ComponentLibService, public matSnackBar: MatSnackBar) {
                this.componentlib = new ComponentLib();
                this.componentlib._id =  this.route.snapshot.paramMap.get('id');
                libservice.getLib(this.componentlib).subscribe(resp => { this.componentlib = resp;
                                                                         this.getActions();
                });
    }

  ngOnInit() {
  }

  getActions(): void {
    console.log('getting action: '+ this.componentlib.name);
    this.actionsService.getActions(this.componentlib._id).subscribe(
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
    this.action.componentid = this.componentlib._id;
    this.action.active = true;
    this.action.input = [];
    this.action.validation = [];
    this.action.input.push({key: '', value: ''});
    this.action.validation.push({key: '', value: ''});
    this.dialogRef = this.dialog.open(ActionsDialogComponent, {
      panelClass: 'actions-dialog',
      width: '600px',
      data: { action: this.action, lib: this.componentlib },
      disableClose: true,
    });

    this.dialogRef.afterClosed().subscribe((result) => {
      result.action.name = result.lib.name + '.' + result.action.name;
      console.log('New Action Added :' + result.action.name);
      this.actionsService.addAction(result.action).subscribe(resp => {
        this.matSnackBar.open('Action Added', 'OK', {
          verticalPosition: 'top',
          duration: 2000
        });
      });
    });
  }

  editAction(action): void{
    action.name = action.name.split('.')[1];
    this.dialogRef = this.dialog.open(ActionsDialogComponent, {
      panelClass: 'actions-dialog',
      width: '600px',
      data: { action: action, lib: this.componentlib },
      disableClose: true,
    });

    this.dialogRef.afterClosed().subscribe((result) => {
      console.log('Action Edited :' + result.action.name);
      result.action.name = result.lib.name + '.' + result.action.name;
      this.actionsService.editActions(result.action).subscribe(resp => {
        this.matSnackBar.open('Action Edited successfully', 'OK', {
          verticalPosition: 'top',
          duration: 2000
        });
        this.getActions();
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
