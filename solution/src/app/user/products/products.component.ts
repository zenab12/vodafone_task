import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { CategoriesComponent } from './categories/categories.component';
import { Category } from 'src/app/admin/dashboard/products/category.interface';
import { Product } from 'src/app/admin/dashboard/products/product.interface';
import { CrudProductsService } from 'src/app/services/crud-products.service';
import { SharedDataService } from '../../services/sharedService.service';
import { PaginationComponent } from './pagination/pagination.component';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements AfterViewInit,OnInit,AfterViewChecked{
  selectedCategory: string = '';
  products: Product[] = []
  filteredProducts: Product[] = this.products
  categories:Category[] = [];
  itemsPerPage: number = 6;
  currentPage: number = 1
  loading: boolean = true;
  @ViewChild(CategoriesComponent)  CategoriesComponent!:CategoriesComponent;
  @ViewChild(PaginationComponent) pagination!:PaginationComponent
  constructor(private productService:CrudProductsService,private sharedService:SharedDataService){}

  skeletonItems = Array.from({ length: this.itemsPerPage})
  ngOnInit()
  {
    this.productService.getCategories().subscribe((data:any) => this.categories.push(
      ...data.map((item:any)=>item =item.name)))
    console.log(this.categories)
  this.productService.getProducts().subscribe((data:any)=>{
        this.products.push(...data)
      setTimeout(() => {

        this.loading =false
      }, 3000);
        }

        )


    //  console.log('prod',this.sharedService.getFilteredProducts());
    if(this.sharedService.getFilteredProducts().length>0){
    this.filteredProducts = this.sharedService.getFilteredProducts()
    this.selectedCategory = this.filteredProducts[0].category;
    } else
    {
      this.filteredProducts = this.products;
      this.selectedCategory = '';
    }
    }



  ngAfterViewInit(): void {

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
    this.currentPage =1;
  }

falg =false
ngAfterViewChecked(): void {
    setTimeout(() => {
        this.currentPage =this.pagination.currentPage

    },0)
  }

  get totalItems(): number {
    return this.filteredProducts.length;
  }

  get paginatedItems(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredProducts.slice(startIndex, endIndex);
  }

  get currentP() {

    return this.currentPage}
}

