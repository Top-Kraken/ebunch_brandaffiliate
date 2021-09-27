import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
