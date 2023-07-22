import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { CrudProductsService } from 'src/app/services/crud-products.service';
// import { ProductsComponent } from './products/products.component';
import { filter } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements DoCheck {
  flag:boolean=false;
  message:string=''
  textCenter:boolean=false
  displayVector:boolean=false
  constructor(private route:ActivatedRoute,private router:Router)
  {}
  ngDoCheck(): void {
    const currentRoute = this.router?.url;
    switch(currentRoute)
    {
    case '/admin/products':
      this.flag =true;
      this.message = `Welcome Dear, <span>We miss you</span> 🤗`;
      this.textCenter = false
      this.displayVector =false

      break;
    case '/admin':
      this.flag =true;
      this.message = `Welcome Dear, <span>We miss you</span> 🤗`;
      this.textCenter = false
      this.displayVector =true

      break;
    case '/admin/products/add':
      this.flag=false;
      this.textCenter = true
      this.displayVector =false
      this.message = "you can <span>add</span> product here  <span>Sweety </span> 🤗";
      break;
    default:
      this.flag =false;
      this.message = "you can <span>edit</span> the product here  <span>Dear </span> 😄🤗";
      this.textCenter = true
      this.displayVector =false

      break;
    }
    }


}
