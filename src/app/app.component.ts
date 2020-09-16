import { Project } from './../models/project';
import { SidenavService } from './../services/sidenav.service';
import { Component , ViewChild, Inject} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../core/modules/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { onMainContentChange } from './animation/animation';
import { User } from '../models';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [onMainContentChange],
})
export class AppComponent {
  title = 'cherry';
  name = 'Cherry';
  user: string;
  projects: Project[];

  public onSideNavChange: boolean;

  constructor(private sidenavService: SidenavService, @Inject(DOCUMENT) private document: any) {
    this.sidenavService.sideNavState$.subscribe((res) => {
      console.log(res);
      this.onSideNavChange = res;
    });
    this.document.body.classList.add('theme-default');
  }
}
