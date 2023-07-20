import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './dashboard/products/products.component';
import { AddFormComponent } from './dashboard/products/add-form/add-form.component';
import { EditFormComponent } from './dashboard/products/edit-form/edit-form.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { PaginationComponent } from './dashboard/products/pagination/pagination.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'products',
        component: ProductsComponent,
        data: { showParent: true },
        children: [
          {
            path: 'add',
            component: AddFormComponent,
            pathMatch: 'full',
          },
          {
            path: 'edit/:id',
            component: EditFormComponent,
            pathMatch: 'full',
          },
        ],
      },
    ],
  },
];

@NgModule({
  declarations: [
    DashboardComponent,
    ProductsComponent,
    AddFormComponent,
    EditFormComponent,
    SidebarComponent,
    PaginationComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminModule {}
