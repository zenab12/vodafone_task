import { ChangeDetectorRef, Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudProductsService } from 'src/app/services/crud-products.service';
import { Location } from '@angular/common';
import { Category } from '../category.interface';
import { Product } from '../product.interface';
import { AddedandUpdatedProductService } from 'src/app/services/addedand-updated-product.service';
@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.sass'],
})
export class AddFormComponent {
  addProductForm!: FormGroup;
  flag = false;
  productResult: any = {};
  categories: Category[] = [];
  categoriesNames: string[] = [];
  isLoading:boolean=false

  constructor(
    private fb: FormBuilder,
    private prodService: CrudProductsService,
    private router:Router,
    private cdr:ChangeDetectorRef,
    private addedService:AddedandUpdatedProductService
  ) {}
  ngOnInit() {
    this.addProductForm = this.fb.group({
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
  }

  get title() {
    return this.addProductForm.get('title');
  }
  get price() {
    return this.addProductForm.get('price');
  }
  get image() {
    return this.addProductForm.get('image');
  }
  get category() {
    return this.addProductForm.get('category');
  }
  get decription() {
    return this.addProductForm.get('decription');
  }

  get ratingRate() {
    return this.addProductForm.get('ratingRate');
  }
  get ratingCount() {
    return this.addProductForm.get('ratingCount');
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
    if (this.addProductForm.valid) {
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


      this.prodService.createProduct(this.productResult).subscribe(
        (data) => {
          this.flag = true;
          this.addedService.setAddedProduct(data);
          this.addedService.setCounter(1);
          this.router.navigate(['admin/products']);
          this.isLoading = false
        },
        (err) => {
          this.isLoading = false
        }
      );
      this.addProductForm.reset();
      this.flag = false;
    } else {
      this.addProductForm.markAllAsTouched();
      for (const key of Object.keys(this.addProductForm.controls)) {
        if (this.addProductForm.controls[key].value.length === 0) {
          this.addProductForm.controls[key].markAsDirty();
        }
      }
      setTimeout(() => {
        this.flag = false;
      }, 500);

    }

  }
}
