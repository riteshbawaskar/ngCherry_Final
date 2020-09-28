import { ComponentLib } from './../../../models/component-lib';
import { ComponentLibService } from './../../../services/component-lib.service';
import { Project } from './../../../models/project';
import { Component, Inject, ViewEncapsulation, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';


@Component({
  selector: 'app-project-dialog',
  templateUrl: './project-dialog.component.html',
  styleUrls: ['./project-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProjectDialogComponent implements OnInit {
  action: string;
  project: Project;
  projectForm: FormGroup;
  dialogTitle: string;
  components: ComponentLib[];

  constructor(public matDialogRef: MatDialogRef<ProjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: any,
    private _formBuilder: FormBuilder, private componentlibservice: ComponentLibService) {

    this.action = _data.action;
    componentlibservice.getLibs().subscribe(
      data => {  this.components =  data; }
      );

    if (this.action === 'edit') {
      this.dialogTitle = 'Edit Project';
      this.project = _data.project;
    } else {
      this.dialogTitle = 'New Project';
      this.project = new Project();
    }

    this.projectForm = this.createForm();
  }

  createForm(): FormGroup {
    return this._formBuilder.group({
      _id: [this.project._id],
      name: [this.project.name],
      description: [this.project.description],
      components: [this.project.components],
      active: [this.project.active]
    });
  }
  ngOnInit() {
  }

}
