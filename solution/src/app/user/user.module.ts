import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './home/header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, NgModel } from '@angular/forms';
import { CategoriesComponent } from './products/categories/categories.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';

const routes: Routes = [
  {
  path:"",component:HomeComponent
  },
  {
    path:"products",component:ProductsComponent
  },
  { path: 'products/:id', component: ProductDetailsComponent },
  ];

@NgModule({
  declarations: [
    HomeComponent,
    ProductsComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    CategoriesComponent,
    ProductDetailsComponent

  ],
  imports: [CommonModule,FormsModule,RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserModule { }
