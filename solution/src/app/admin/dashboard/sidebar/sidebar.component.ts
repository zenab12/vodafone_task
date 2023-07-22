import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent {
  @ViewChild('sidebar') sidebar!: ElementRef;
  constructor(private router:Router){}
  isCollapsed = false;

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  logOut(){
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }
}


