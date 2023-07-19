import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudProductsService } from 'src/app/services/crud-products.service';
import { Location } from '@angular/common';
import { Category } from '../category.interface';
@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.sass']
})
export class AddFormComponent {
  addProductForm!: FormGroup;
  flag = false;
  productResult: any = {};
  categories: Category[] = [];
  categoriesNames: string[] = [];
  router: any;

  constructor(private fb: FormBuilder,private prodService:CrudProductsService,private loc:Location) {}
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
        Validators.compose([Validators.required,Validators.pattern(/^(\d*\.)?\d+$/),Validators.min(1)]),

      ],
      image:
      [
       '',
       Validators.compose([Validators.required])
      ],
      category:[
      '',
      Validators.compose([Validators.required])
      ]
     ,
      decription:[
        '',
        Validators.compose([Validators.required])
      ],
     ratingRate:[
       '',
       Validators.compose([Validators.required,Validators.pattern(/^(\d*\.)?\d+$/),Validators.min(0),Validators.max(5)]),
      ],
      ratingCount:[
        '',
        Validators.compose([Validators.required,Validators.pattern('^[0-9]+$'),Validators.min(0),Validators.max(1000)]),
      ]

    });
    this.getCategories()
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
  get  decription() {
    return this.addProductForm.get('decription');
  }

  get ratingRate() {
    return this.addProductForm.get('ratingRate');
  }
  get ratingCount() {
    return this.addProductForm.get('ratingCount');
  }


getCategories(){
    this.prodService.getCategories().subscribe((data:any)=>{
      this.categories.push(...data)
      this.categoriesNames.push(...data.filter((cat:Category)=>cat.name).map((cat:Category)=>cat.name));
    })
}


  onSubmit() {
    this.flag = false;
    if (this.addProductForm.valid) {
      this.productResult = {
        title: this.title?.value,
        price: this.price?.value,
        description:this.decription?.value,
        image: this.image?.value,
        category:this.category?.value,
        rating:{
        rate:this.ratingRate?.value,
        count:this.ratingCount?.value
        }

      }
      this.prodService.createProduct(this.productResult).subscribe(
        (data) => {
          this.flag=true;
          // window.location.replace('/admin/products')
          this.router.navigate('admin/products/add');
        },(err)=>{
          console.log(err);
        })
      this.addProductForm.reset()
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
