import { EnvironmentComponent } from './environment/environment.component';
import { ActionsComponent } from './actions/actions.component';
import { ComponentLibComponent } from './component-lib.component';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
   { path: '', pathMatch: 'full', component: ComponentLibComponent} ,
   { path: 'actions/:id', pathMatch: 'full', component: ActionsComponent} ,
   { path: 'environment/:id', pathMatch: 'full', component: EnvironmentComponent} ,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentLibRoutes{ }
