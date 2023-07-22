import { Component, OnInit,DoCheck, OnChanges, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/admin/dashboard/products/category.interface';
import { Product } from 'src/app/admin/dashboard/products/product.interface';
import { CrudProductsService } from 'src/app/services/crud-products.service';
import { SharedDataService } from 'src/app/services/sharedService.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.sass']
})
export class CategoriesComponent implements OnInit {
  categoryProductLengthMap: { [category: string]: number } = {};
 constructor(private productService:CrudProductsService,private router:Router,private sharedDataService: SharedDataService){}

 categories:any[] = [];
 products:Product[] = []
 filteredProducts:any = []
 lengths:any[]=[]

ngOnInit(){
  this.productService.getCategories().subscribe((data:any) => this.categories.push(...data));
  this.productService.getProducts().subscribe((data:any)=>
  this.products.push(...data));
}
ngDoCheck(){
  this.calculateProductLengthForEachCategory();
  }

  getProductsByCategory(category:string){
    if(category){
      this.filteredProducts = this.products.filter((item:any)=>item.category===category)
    }
    this.sharedDataService.setFilteredProducts(this.filteredProducts);
    this.router.navigate(['/user/products'])

}

calculateProductLengthForEachCategory() {
    this.categoryProductLengthMap = this.products.reduce((acc:any, product) => {
      if (!acc[product.category]) {
        acc[product.category] = 0;
      }
      acc[product.category]++;
      return acc;
    }, {});
  }
}
