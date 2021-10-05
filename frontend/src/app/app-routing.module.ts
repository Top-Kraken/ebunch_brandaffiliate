import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PackagesComponent } from './components/packages/packages.component';
import { LayoutComponent } from './components/layout/layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [

  {
    component: RegisterComponent,
    path: "register",
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'register'
  },
  {
    component: ProfileComponent,
    path: "profile",
  },
  {
    component: PackagesComponent,
    path: "packages",
  },
  {
    component: LayoutComponent,
    path: "layout",
    children: [
      {
        component: DashboardComponent,
        path: 'dashboard'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
