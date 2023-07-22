import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {
  constructor(private router:Router){}
  logOut(){
    localStorage.removeItem('token');
    console.log('logged out')
    this.router.navigate(['/login'])
  }
}
