import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { FilterationComponent } from './products/filteration/filteration.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path:"",component:HomeComponent
  },
  {
    path:"products",component:ProductsComponent
  }
  ];

@NgModule({
  declarations: [
    HomeComponent,
    ProductsComponent,
    FilterationComponent
  ],
  imports: [CommonModule,RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserModule { }
