import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudProductsService } from 'src/app/services/crud-products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.sass']
})
export class ProductDetailsComponent {

  product: any;

  constructor(private route: ActivatedRoute, private productService: CrudProductsService) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const productId = Number(params.get('id'));
      this.productService.getProducts().subscribe((data:any)=> this.product=[...data].find((product) => product.id === productId))
    });
  }
}
