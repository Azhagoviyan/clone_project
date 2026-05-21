import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-filter',
  imports: [MatFormFieldModule,MatIconModule,MatSelectModule,CommonModule],
  templateUrl: './filter.html',
  styleUrl: './filter.css',
})
export class Filter {

  @Input() options:string[]=[];

  @Input() value:string="";

  @Output() valueChange=new EventEmitter<string>();

  onChange(val:string){
    this.valueChange.emit(val);
  }

}
