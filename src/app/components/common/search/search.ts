import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-search',
  imports: [FormsModule,MatIconModule],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {

  @Input() placeholder:string="";

  @Input() value:string="";

  @Output() valueChange=new EventEmitter<string>();

  onChange(val:string){
    this.valueChange.emit(val);
  }


}
