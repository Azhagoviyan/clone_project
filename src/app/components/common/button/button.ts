import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-button',
  imports: [CommonModule,MatButtonModule,MatIconModule],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {

   @Input() label: string = '';
   @Input() icon: string = '';
   @Input() btnClass: string = '';

   @Input() disabled: boolean = false;

   @Input() variant: 'basic' | 'flat' | 'stroked' = 'basic';

   @Output() clicked = new EventEmitter<void>();

   handleClick() {
      this.clicked.emit();
  }

}
