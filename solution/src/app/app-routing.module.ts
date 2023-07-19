import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './pages/error/error.component';

const routes: Routes = [
  {
  path:"",component:AppComponent
  },
  {
    path:"login",component:LoginComponent
  },
  {
  path:'user',loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)
  },
  {
  path:'admin',loadChildren:()=>import("./admin/admin.module").then(m=>m.AdminModule)
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
