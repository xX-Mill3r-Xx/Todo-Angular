import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // <app-root> tag html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: any[] = []; // o tipo any significa um obj que pode ser qualquer coisa

  constructor() {
    this.todos.push('passear com o cachorro');
    this.todos.push('ir ao supermercado');
    this.todos.push('cortar o cabelo');
  }
}
