import { ComponentLibComponent } from './component-lib.component';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
   { path: '', pathMatch: 'full', component: ComponentLibComponent} ,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentLibRoutes{ }
