import { AfterViewChecked, AfterViewInit, Component, ViewChild } from '@angular/core';
import { CategoriesComponent } from './categories/categories.component';
import { Category } from 'src/app/admin/dashboard/products/category.interface';
import { Product } from 'src/app/admin/dashboard/products/product.interface';
import { CrudProductsService } from 'src/app/services/crud-products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements AfterViewInit{
  selectedCategory: string = '';
  products: Product[] = []
  filteredProducts: Product[] = this.products
  categories:Category[] = [];

  @ViewChild(CategoriesComponent)  comp!:CategoriesComponent;
  constructor(private productService:CrudProductsService){}

  ngOnInit()
  {
    this.productService.getCategories().subscribe((data:any) => this.categories.push(
      ...data.map((item:any)=>item =item.name)))
    console.log(this.categories)
   this.productService.getProducts().subscribe((data:any)=>{
        this.products.push(...data);
     })
  }

  ngAfterViewInit(): void {
    // console.log(this.comp)
    }


  filterItemsByCategory(category: any): void {
    this.selectedCategory = category;
    if (category) {
      this.filteredProducts = this.products.filter((item) => item.category === category);
      console.log(this.filteredProducts)

    } else {
      this.filteredProducts = this.products;
      console.log(this.filteredProducts)
    }
  }
}
