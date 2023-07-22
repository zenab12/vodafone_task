import { TestBed } from '@angular/core/testing';

import { AddedandUpdatedProductService } from './addedand-updated-product.service';

describe('AddedandUpdatedProductService', () => {
  let service: AddedandUpdatedProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddedandUpdatedProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
