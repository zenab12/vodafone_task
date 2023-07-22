import { Injectable, OnInit } from '@angular/core';
import { Product } from '../admin/dashboard/products/product.interface';
import { CrudProductsService } from './crud-products.service';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService implements OnInit{
  private products: Product[] = [];
  constructor(private prodService:CrudProductsService){}
  //get filtered products from category componetnt instead viewchild as it is not working
  ngOnInit(): void {
    this.prodService.getProducts().subscribe((data:any)=>this.products.push(...data))
  }

  private filteredProducts: Product[] = this.products

  setFilteredProducts(value:[Product]) {
    this.filteredProducts = value;
  }

  getFilteredProducts(): Product[] {
    return this.filteredProducts;
  }
}
