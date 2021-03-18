import { AuthenticateGuard } from './components/guard/authenticate.guard';
import { CategoryPageComponent } from './pages/auth/category-page/category-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/guest/login-page/login-page.component';
import { RegisterPageComponent } from './pages/guest/register-page/register-page.component';
import { ForgotPageComponent } from './pages/guest/forgot-page/forgot-page.component';

const routes: Routes = [
  { 
    path: '', 
    pathMatch: 'full',
    redirectTo: 'categories',
    children: [
      { path: 'categories', component: CategoryPageComponent },
    ],
    canActivate: [AuthenticateGuard]
  },
  { 
    path: '', 
    pathMatch: 'full',
    redirectTo: 'login',
    children: [
      { path: 'login', component: LoginPageComponent },
      { path: 'register', component: RegisterPageComponent },
      { path: 'forgot', component: ForgotPageComponent },
      { path: '**', redirectTo: 'login', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
