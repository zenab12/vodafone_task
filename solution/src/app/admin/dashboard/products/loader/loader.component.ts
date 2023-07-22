import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.sass']
})
export class LoaderComponent {
@Input() itemsPerPage:number = 0
rows:any[]=[]

ngOnChanges(){
  this.rows = Array.from({length:this.itemsPerPage})
}
}
