import { Component, signal } from '@angular/core';
import { Users } from './modules/users/users';


@Component({
  selector: 'app-root',
  imports: [Users],

  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('clone_project');

}

