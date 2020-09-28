import { MaterialModule } from './../../core/modules/material.module';
import { ProjectService } from './../../services/project.service';
import { ProjectDialogComponent } from './project-dialog/project-dialog.component';
import { Project } from './../../models/project';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { fuseAnimations } from './../../theme/animation';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  animations: fuseAnimations
})
export class ProjectComponent implements OnInit {
  
  dialogRef: any;
  projects: Project[];
  project: Project;

  constructor(private _matDialog: MatDialog, private projectservice: ProjectService, public matSnackBar: MatSnackBar) { }

  ngOnInit() {
    this.getprojects();
  }


  getprojects(): void {
    this.projectservice.getProjects().subscribe(
      data => {
        this.projects = data;
        console.log(data);
      },
      error => console.log(error)
    );

  }

  editProject(project)
  {
    console.log(project);
    this.dialogRef = this._matDialog.open(ProjectDialogComponent, {
      panelClass: 'project-dialog',
      data: {
        project: project,
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
            this.projectservice.editProject(formData.getRawValue()).subscribe(
              res => {
                  this.matSnackBar.open('Project updated:', 'OK', {
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
            this.deleteComponent(project);

            break;
        }
      });
  }

  deleteComponent(project): void{
    this.projectservice.deleteProject(project).subscribe(
      res => {
        this.matSnackBar.open('Project deleted', 'OK', {
          verticalPosition: 'top',
          duration: 2000
        });
        this.getprojects();
      }
    );
  }

  addProject(): void {
    this.dialogRef = this._matDialog.open(ProjectDialogComponent, {
      panelClass: 'project-dialog',
      data: { action: 'new' }
    });

    this.dialogRef.afterClosed()
      .subscribe((response: FormGroup) => {
        if (!response) {
          return;
        }
        console.log(response.getRawValue());
        this.projectservice.addProject(response.getRawValue()).subscribe(
          res => {
            this.getprojects();
            this.matSnackBar.open('Project Added:', 'OK', {
              verticalPosition: 'top',
              duration: 2000
            });
          },
          error => {
            this.matSnackBar.open('Error Adding Project:' + error, 'OK', {
              verticalPosition: 'top',
              duration: 2000
            });
            console.log(error);
          }
        );
      });
  }
}
