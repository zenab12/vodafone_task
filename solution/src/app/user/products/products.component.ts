import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { CategoriesComponent } from './categories/categories.component';
import { Category } from 'src/app/admin/dashboard/products/category.interface';
import { Product } from 'src/app/admin/dashboard/products/product.interface';
import { CrudProductsService } from 'src/app/services/crud-products.service';
import { SharedDataService } from '../../services/sharedService.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit,DoCheck{
  selectedCategory: string = '';
  products: Product[] = []
  filteredProducts: Product[] = this.products
  categories:Category[] = [];
  itemsPerPage: number = 6;
  currentPage: number = 1
  loading: boolean = true;
  @ViewChild(CategoriesComponent)  CategoriesComponent!:CategoriesComponent;
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
        })

    if(this.sharedService.getFilteredProducts().length>0){
    this.filteredProducts = this.sharedService.getFilteredProducts()
    this.selectedCategory = this.filteredProducts[0].category;
    } else
    {
      this.filteredProducts = this.products;
      this.selectedCategory = '';
    }
    }

    ngDoCheck(): void {
      for(let i=0;i<this.totalPages;i++){
        if(this.totalPagesArray.length<this.totalPages){
          if(this.totalPagesArray[i] != i+1 ){
          this.totalPagesArray.push(i+1);
            console.log(this.totalPagesArray)
          }
        }
    }
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




  get totalItems(): number {
    return this.filteredProducts.length;
  }

  get paginatedItems(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredProducts.slice(startIndex, endIndex);
  }



    totalPagesArray: number[] = [];


    get totalPages(): number {
      return Math.ceil(this.totalItems / this.itemsPerPage);
    }

    get startIndex(): number {
      return (this.currentPage - 1) * this.itemsPerPage;
    }

    get endIndex(): number {
      return Math.min(
        this.startIndex + this.itemsPerPage - 1,
        this.totalItems - 1
      );
    }

    goToPage(pageNumber: number): void {
      this.currentPage = pageNumber;
    }

    goToNextPage(): void {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    }

    goToPreviousPage(): void {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    }



}

