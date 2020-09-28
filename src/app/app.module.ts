import { ProjectDialogComponent } from './../pages/project/project-dialog/project-dialog.component';
import { ProjectComponent } from './../pages/project/project.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectService } from './../services/project.service';
import { MaterialModule } from './../core/modules/material.module';
import { SharedModule } from './../core/modules/shared.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SideMenuComponent } from './sidemenu/sidemenu.component';
import { SidenavService } from './../services/sidenav.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RightmenuComponent } from './rightmenu/rightmenu.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    ToolbarComponent,
    RightmenuComponent,
    ProjectComponent,
    ProjectDialogComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [SidenavService, ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
