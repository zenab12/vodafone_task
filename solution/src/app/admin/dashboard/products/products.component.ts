import {
  Component,
  OnInit,
  DoCheck,
  ViewChild,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from './product.interface';
import { CrudProductsService } from 'src/app/services/crud-products.service';
import { Router } from '@angular/router';
import { AddFormComponent } from './add-form/add-form.component';
// import { PaginationComponent } from './pagination/pagination.component';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass'],
})
export class ProductsComponent implements OnInit {
  showParent: boolean = true;
  products: Product[] = [];
  itemsPerPage: number = 6;
  isLoading: boolean = true;
  // @ViewChild(PaginationComponent) pagination!:PaginationComponent
  currentPage: number = 1;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: CrudProductsService,
    private cdr:ChangeDetectorRef
  ) {}

  flag = true;
  ngOnInit() {
    this.showParent = this.route.snapshot.data['showParent'];
    this.flag = false;
    this.fetchProducts();
    setTimeout(() => {
      this.currentPage = 1;
    });


  }

  ngDoCheck(): void {
    const currentRoute = this.route.snapshot;
    switch (currentRoute?.children[0]?.url[0]?.path) {
      case 'add':
        this.showParent = false;
        console.log('add');
        break;
      case 'edit':
        this.showParent = false;
        console.log('edit');
        break;
      default:
        this.showParent = true;
        break;
    }



    for(let i=0;i<this.totalPages;i++){
       if(this.totalPagesArray.length<this.totalPages){
         this.totalPagesArray.push(i+1);
        console.log(this.totalPagesArray)
       }
      }


  }

  fetchProducts() {
    this.productService.getProducts().subscribe(
      (products: any) => {
        this.products = JSON.parse(JSON.stringify(products));
        setTimeout(() => {
          this.isLoading = false;
        }, 2000);
      },
      (error) => {
        // Handle error
      }
    );
  }

  handleEdit(productId: number) {
    this.router.navigate(['admin/products/edit', productId]);
  }

  handleDelete(productId: number) {
    this.productService.deleteProduct(productId).subscribe();
    this.products = this.products.filter((product) => product.id != productId);
    console.log(this.itemsPerPage)
    this.products.length % this.itemsPerPage === 0 ? this.currentPage-- : null;
    this.totalPagesArray.pop()
    this.cdr.detectChanges()
  }


  get totalItems(): number {
    return this.products.length;
  }
  totalPagesArray: number[] = [];

  get paginatedItems(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.products.slice(startIndex, endIndex);
  }

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
