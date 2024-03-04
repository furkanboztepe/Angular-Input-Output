import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <h1 style="text-align: center; font-size:48px">Input Output Sample</h1>
  <h1>Input</h1>
  <input [(ngModel)]="work">
  <button (click)="add()">Kaydet</button>
  <hr>
  <app-todo-list [todos]="todos">
  </app-todo-list>
  <h1>Output</h1>
  <app-todo-add (addEvent)="add2($event)"></app-todo-add>
  <hr>
  <ul>
    <li *ngFor="let todo of todos2">
      {{todo}}
  </li>
  </ul>
  `
})

export class AppComponent {
  title:string = "todolist";
  work: string = "";
  todos: string[] = [];
  todos2: string[] = [];

  add(){
    this.todos.push(this.work);
    this.work = "";
  }

  add2(event: string){
    this.todos2.push(event);
  }
}
