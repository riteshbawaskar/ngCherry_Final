import { NewComponentLibComponent } from './new-componentLib/new-componentLib.component';

import { ComponentLibComponent } from './component-lib.component';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
   { path: '', pathMatch: 'full', component: ComponentLibComponent} ,
   { path: 'new', component: NewComponentLibComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentLibRoutes{ }
