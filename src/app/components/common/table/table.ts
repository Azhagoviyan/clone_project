import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatTableModule } from '@angular/material/table';


export interface Column {
  key: string;
  label: string;
  type?: 'text' | 'custom';
  template?: any;
}


@Component({
  selector: 'app-table',
  imports: [CommonModule,MatTableModule],
  templateUrl: './table.html',
  styleUrl: './table.css',
})

export class Table implements OnChanges {

 @Input() dataSource: any[] = [];
 @Input() columns: Column[] = [];

displayedColumns: string[] = [];

ngOnChanges(changes:SimpleChanges) {
  if(changes['columns'] && this.columns) {
      this.displayedColumns = this.columns.map(c => c.key);

     }
   }
 }

