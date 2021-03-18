import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AuthLayoutComponent } from './pages/auth/auth-layout.component';
import { GuestLayoutComponent } from './pages/guest/guest-layout.component';
import { LoginPageComponent } from './pages/guest/login-page/login-page.component';
import { RegisterPageComponent } from './pages/guest/register-page/register-page.component';
import { ForgotPageComponent } from './pages/guest/forgot-page/forgot-page.component';
import { CategoryPageComponent } from './pages/auth/category-page/category-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    GuestLayoutComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ForgotPageComponent,
    CategoryPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
