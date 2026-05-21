import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-select',
  imports: [ReactiveFormsModule,MatSelectModule,MatFormFieldModule,MatIconModule,
             CommonModule
  ],
  templateUrl: './select.html',
  styleUrl: './select.css',
})
export class Select {

  @Input() label:string="";

  @Input() placeholder:string="";

  @Input() required:boolean=false;

  @Input() options:{label:string; value:string}[]=[];

  @Input() control!:FormControl;

}
