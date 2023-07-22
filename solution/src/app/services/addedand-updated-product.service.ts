import { Injectable } from '@angular/core';
import { Product } from '../admin/dashboard/products/product.interface';
import { CrudProductsService } from './crud-products.service';

@Injectable({
  providedIn: 'root'
})
export class AddedandUpdatedProductService {

  private AddedProduct: Product ={id:0,title:'',description:'',price:0,category:'',image:'',rating:{rate:'',count:0}}
  private UpdatedProduct:Product ={id:0,title:'',description:'',price:0,category:'',image:'',rating:{rate:'',count:0}}
  private counter:number=0
  setAddedProduct(value:Product) {
    this.AddedProduct = value;
  }

  getAddedProduct(): Product {
    return this.AddedProduct;
  }

  setUpdatedProduct(value:Product){
    this.UpdatedProduct=value
  }

  getUpdatedProduct():Product{
   return this.UpdatedProduct

  }

  setCounter(value:number){
    this.counter=value
  }
  getCounter():number{
    return this.counter
  }
}
