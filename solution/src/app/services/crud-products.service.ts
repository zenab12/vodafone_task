import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, combineLatest, merge } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CrudProductsService {
  constructor(private http: HttpClient) {}
  private apiUrl = 'https://fakestoreapi.com/products';
  private apiUrl2 = 'http://localhost:3000/products';
  private apiUrl3 = 'http://localhost:3000/categories';

  getProducts() {
    return this.http.get<any>(this.apiUrl2);
  }

  getProduct(id: number) {
    return this.http.get(`${this.apiUrl2}/${id}`);
  }

  createProduct(product: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http.post<any>(this.apiUrl2, product, httpOptions);
  }

  getproductById(id:number){
      return this.http.get(`${this.apiUrl3}`).subscribe((data:any)=> [...data].find((product: any) => product.id === id))
  }

  updateProduct(id: number, product: any) {
    return this.http.put(`${this.apiUrl2}/${id}`, product);
  }

  deleteProduct(id: number) {
    return this.http.delete(`${this.apiUrl2}/${id}`);
  }


  getProductsByCategory(category:string){
    return this.http.get(`${this.apiUrl3}`).subscribe((data:any)=>
   { return data.filter((item:any)=>item.category===category)});
  }

  getCategories(){
    return this.http.get(`${this.apiUrl3}`);
  }
}
