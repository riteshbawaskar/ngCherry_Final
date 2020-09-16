import { UsersModule } from './../pages/users/users.module';
import { UsersComponent } from './../pages/users/users.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';

const usersModule = () =>
  import('../pages/users/users.module').then((x) => x.UsersModule);


const routes: Routes = [{ path: '', component: DashboardComponent},
                        { path: 'users', loadChildren: usersModule}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
