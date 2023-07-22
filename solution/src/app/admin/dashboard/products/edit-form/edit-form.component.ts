import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudProductsService } from 'src/app/services/crud-products.service';
import { Category } from '../category.interface';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';
import { AddedandUpdatedProductService } from 'src/app/services/addedand-updated-product.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.sass'],
})
export class EditFormComponent {
  editProductForm!: FormGroup;
  flag = false;
  productResult: any = {};
  categories: Category[] = [];
  categoriesNames: string[] = [];
  id: any;
  isLoading:boolean=true

  constructor(
    private fb: FormBuilder,
    private prodService: CrudProductsService,
    private route: ActivatedRoute ,
    private router:Router,
    private editProductService:AddedandUpdatedProductService
  ) {}
  ngOnInit() {
    this.editProductForm = this.fb.group({
      title: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(50),
        ]),
      ],
      price: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/^(\d*\.)?\d+$/),
          Validators.min(1),
        ]),
      ],
      image: ['', Validators.compose([Validators.required])],
      category: ['', Validators.compose([Validators.required])],
      decription: ['', Validators.compose([Validators.required])],
      ratingRate: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/^(\d*\.)?\d+$/),
          Validators.min(0),
          Validators.max(5),
        ]),
      ],
      ratingCount: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[0-9]+$'),
          Validators.min(0),
          Validators.max(1000),
        ]),
      ],
    });
    this.getCategories();
    this.route.params.subscribe((params: { [x: string]: string | number }) => {
      this.id = +params['id'];
      this.getProduct(this.id);
    });
  }

  get title() {
    return this.editProductForm.get('title');
  }
  get price() {
    return this.editProductForm.get('price');
  }
  get image() {
    return this.editProductForm.get('image');
  }
  get category() {
    return this.editProductForm.get('category');
  }
  get decription() {
    return this.editProductForm.get('decription');
  }

  get ratingRate() {
    return this.editProductForm.get('ratingRate');
  }
  get ratingCount() {
    return this.editProductForm.get('ratingCount');
  }

  getProduct(id: number) {
    this.prodService.getProduct(id).subscribe((data: any) => {
      this.editProductForm.patchValue({
        title: data.title,
        price: data.price,
        category: data.category,
        decription: data.description,
        image: data.image,
        ratingRate: data.rating.rate,
        ratingCount: data.rating.count,
      });
      this.isLoading=false

    });
  }

  getCategories() {
    this.prodService.getCategories().subscribe((data: any) => {
      this.categories.push(...data);
      this.categoriesNames.push(
        ...data
          .filter((cat: Category) => cat.name)
          .map((cat: Category) => cat.name)
      );
    });
  }

  onSubmit() {
    this.flag = false;
    this.isLoading = true
    if (this.editProductForm.valid) {
      this.productResult = {
        title: this.title?.value,
        price: this.price?.value,
        description: this.decription?.value,
        image: this.image?.value,
        category: this.category?.value,
        rating: {
          rate: this.ratingRate?.value,
          count: this.ratingCount?.value,
        },
      };

      this.prodService.updateProduct(this.id, this.productResult).subscribe(
        (data:any) => {
          this.flag = true;
          this.isLoading = false
          this.editProductService.setUpdatedProduct(data);
          this.editProductService.setCounter(1);
          this.router.navigate(['/admin/products'])
          console.log(data)
          // window.location.replace('/admin/products')
        },
        (err) => {
        this.isLoading=false
        }
      );
      this.flag = false;
    } else {
      this.editProductForm.markAllAsTouched();
      for (const key of Object.keys(this.editProductForm.controls)) {
        if (this.editProductForm.controls[key].value.length === 0) {
          this.editProductForm.controls[key].markAsDirty();
        }
      }
      setTimeout(() => {
        this.flag = false;
      }, 500);
    }
  }
}
