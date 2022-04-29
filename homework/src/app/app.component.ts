import { Component } from '@angular/core';
import { Todo } from './interfaces/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homework';
  inputTodo = "";
  totalActive = 0
  totalTodo = 0

  todos : Todo[] = []

  addTodo() {
    console.info("this.inputTodo",this.inputTodo)
    const newTodo = {
        message: this.inputTodo,
        active : true
    }
    this.todos = this.todos.concat(newTodo);
    this.inputTodo = ""
    this.totalTodo = this.totalTodo + 1
    this.totalActive = this.totalActive + 1
  }

  toggleActive(event: Event) {
    const attrIndex = (event.target as HTMLLIElement).getAttribute("data-index")
    let rowIndex = Number(attrIndex);
    console.info("rowIndex",rowIndex)
    if (this.todos[+rowIndex].active) {
      this.todos[rowIndex].active = false
      this.totalActive = this.totalActive - 1
    } else {
      this.todos[rowIndex].active = true
      this.totalActive = this.totalActive + 1
    }
  }
 }
