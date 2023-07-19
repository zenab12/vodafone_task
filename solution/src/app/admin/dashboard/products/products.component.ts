import { Component, OnInit,DoCheck, ViewChild, AfterViewChecked, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from './product.interface';
import { CrudProductsService } from 'src/app/services/crud-products.service';
import {Router} from '@angular/router';
import { AddFormComponent } from './add-form/add-form.component';
import { PaginationComponent } from './pagination/pagination.component';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})

export class ProductsComponent implements DoCheck,OnInit,AfterViewChecked {
  showParent: boolean = true;
  products: Product[] = [];
  itemsPerPage: number = 6;
  @ViewChild(PaginationComponent) pagination!:PaginationComponent
  currentPage: number = 1

  constructor(private router:Router, private route: ActivatedRoute,private productService:CrudProductsService) { }

  flag =true
  ngOnInit() {
    this.showParent = this.route.snapshot.data['showParent'];
    this.flag=false
    this.fetchProducts();
    setTimeout(() => {
    this.currentPage = 1
    })
  }

  ngDoCheck(): void {
    const currentRoute = this.route.snapshot;
    switch(currentRoute?.children[0]?.url[0]?.path)
    {
    case 'add':
      this.showParent = false;
      console.log('add')
      break;
    case 'edit':
      this.showParent = false;
      console.log('edit')
      break;
    default:
      this.showParent = true;
      break;
    }
    }

    fetchProducts() {
      this.productService.getProducts().subscribe(
        (products:any) => {
          this.products = JSON.parse(JSON.stringify(products));
        },
        (error) => {
          // Handle error
        }
      );
    }

    handleEdit(productId:number)
    {
      this.router.navigate(['admin/products/edit', productId]);
      // window.location.replace(`/admin/products/edit/${productId}`)
    }

    handleDelete(productId:number)
    {
        this.productService.deleteProduct(productId).subscribe();
        this.products=this.products.filter((product)=>product.id!=productId);
    }

    ngAfterViewChecked(): void {
      setTimeout(() => {
        this.currentPage =this.pagination.currentPage
        })
    }

    get totalItems(): number {
      return this.products.length;
    }

    get paginatedItems(): any[] {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.products.slice(startIndex, endIndex);
    }
  }

