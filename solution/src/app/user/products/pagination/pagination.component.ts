import { Component,Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.sass']
})
export class PaginationComponent  implements OnChanges{
  @Input() itemsPerPage: number = 6;
  @Input() totalItems: number = 0;
  @Input()currentPage: number = 1;
  totalPagesArray:number[]=[]

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.currentPage)
      for(let i=0;i<this.totalPages;i++){
      if(this.totalPagesArray.length<this.totalPages){
        this.totalPagesArray.push(i+1);
        }
      }
        console.log(this.totalPagesArray)
  }

  get startIndex(): number {
    return (this.currentPage - 1) * this.itemsPerPage;
  }

  get endIndex(): number {
    return Math.min(this.startIndex + this.itemsPerPage - 1, this.totalItems - 1);
  }

  goToPage(pageNumber: number): void {
    this.currentPage = pageNumber;
  }

  goToNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  goToPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }


}
