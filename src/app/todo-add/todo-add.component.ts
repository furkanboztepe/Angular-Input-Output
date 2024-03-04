import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.css'
})
export class TodoAddComponent {
  work2: string = "";
  @Output() addEvent = new EventEmitter<string>;

  add(){
    this.addEvent.emit(this.work2);
    this.work2 = "";
  }
}
