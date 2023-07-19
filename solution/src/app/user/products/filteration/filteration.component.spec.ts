import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterationComponent } from './filteration.component';

describe('FilterationComponent', () => {
  let component: FilterationComponent;
  let fixture: ComponentFixture<FilterationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterationComponent]
    });
    fixture = TestBed.createComponent(FilterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
