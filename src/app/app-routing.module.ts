import { ProjectComponent } from './../pages/project/project.component';
import { UsersModule } from './../pages/users/users.module';
import { UsersComponent } from './../pages/users/users.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';

const usersModule = () =>
  import('../pages/users/users.module').then((x) => x.UsersModule);
const designModule = () =>
  import('../pages/design/design.module').then((x) => x.DesignModule);
const componentModule = () =>
  import('../pages/component-lib/component-lib.module').then((x) => x.ComponentLibModule);

const routes: Routes = [{ path: '', component: DashboardComponent},
                        { path: 'users', loadChildren: usersModule},
                        { path: 'design', loadChildren: designModule},
                        {path: 'dashboard', component: DashboardComponent},
                        {path: 'components', loadChildren: componentModule},
                        {path: 'projects', component: ProjectComponent},
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
