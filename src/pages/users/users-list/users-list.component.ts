import { fuseAnimations } from './../../../theme/animation';
import { User } from './../../../models/user';
import { ConfirmDialogComponent } from './../../../core/components/confirm-dialog/confirm-dialog.component';
import { UsersService } from './../../../services/users.service';
import { Component, OnDestroy, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DataSource } from '@angular/cdk/collections';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  animations: fuseAnimations
})
export class UsersListComponent implements OnInit {

  @ViewChild('dialogContent', {static: false})
    dialogContent: TemplateRef<any>;

    users: User[];
    user: User;
    dataSource: FilesDataSource | null;
    displayedColumns = ['checkbox', 'userId', 'firstName', 'lastName', 'email' ];
    selectedUsers: any[];
    checkboxes: {};
    dialogRef: any;
    confirmDialogRef: MatDialogRef<ConfirmDialogComponent>;

  constructor(public userService: UsersService, public matSnackBar: MatSnackBar) {

   }

  ngOnInit() {

    this.dataSource = new FilesDataSource(this.userService);
    this.dataSource.connect();
    this.getUser();
  }

  getUser(): void {
  /*  this.userService.getUser(this.auth.currentUser).subscribe(
      data => this.user = data,
      error => console.log(error),
      () => this.isLoading = false
    );*/
  }

  editUser(user): void
  {

  }

  save(user: User): void {
    this.userService.editUser(user).subscribe(
      res => {
        this.matSnackBar.open('User saved', 'OK', {
          verticalPosition: 'top',
          duration        : 2000
      });
      },
      error => console.log(error)
    );
  }


}
export class FilesDataSource extends DataSource<any>
{

    constructor(private _usersService: UsersService)
    {
        super();
    }


    connect(): Observable<any[]>
    {
        return this._usersService.getUsers();
    }

    /**
     * Disconnect
     */
    disconnect(): void
    {
    }
}

