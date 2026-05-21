import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule,FormControl } from '@angular/forms';
import { MatInput } from "@angular/material/input";


@Component({
  selector: 'app-input',
  imports: [CommonModule, ReactiveFormsModule, MatInput],
  templateUrl: './input.html',
  styleUrl: './input.css',
})
export class InputComponent {

  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() required: boolean = false;

  @Input() control!: FormControl; 

}
