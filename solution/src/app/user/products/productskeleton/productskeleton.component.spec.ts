import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductskeletonComponent } from './productskeleton.component';

describe('ProductskeletonComponent', () => {
  let component: ProductskeletonComponent;
  let fixture: ComponentFixture<ProductskeletonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductskeletonComponent]
    });
    fixture = TestBed.createComponent(ProductskeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
