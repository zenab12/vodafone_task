import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/admin/dashboard/products/category.interface';
import { Product } from 'src/app/admin/dashboard/products/product.interface';
import { CrudProductsService } from 'src/app/services/crud-products.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.sass']
})
export class CategoriesComponent implements OnInit {

 constructor(private productService:CrudProductsService,private router:Router){}
 categories:Category[] = [];
 products:Product[] = []
 filteredProducts:Product[] = []
ngOnInit(){
    this.productService.getCategories().subscribe((data:any) => this.categories.push(...data));
    console.log(this.categories)
    this.productService.getProducts().subscribe((data:any)=>
    this.products.push(...data));
    console.log(this.products)
  }

  getProductsByCategory(category:string){
    this.filteredProducts.map((item:any)=>item.category===category)
    this.router.navigate(['/user/products'])
  }
}
