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

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    ToolbarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [SidenavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
