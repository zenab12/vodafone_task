import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './pages/error/error.component';
import { authGuard } from './auth.guard';
import { adminAuth } from './admin-auth.guard';

const routes: Routes = [
  {
  path:"",component:AppComponent , canActivate: [authGuard,adminAuth]
  },
  {
    path:"login",component:LoginComponent
  },
  {
  path:'user',loadChildren:()=>import('./user/user.module').then(m=>m.UserModule) , canActivate: [authGuard]
  },
  {
  path:'admin',loadChildren:()=>import("./admin/admin.module").then(m=>m.AdminModule), canActivate: [adminAuth]
  },
  {
    path:"**",component:ErrorComponent
  }
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
