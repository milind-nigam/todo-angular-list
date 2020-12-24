import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { TodoService } from '../todo.service';
import { SET_TODOS } from '../reducers/todo-reducer';

@Component({
  selector: 'app-add-todo-dialog',
  templateUrl: './add-todo-dialog.component.html',
  styleUrls: ['./add-todo-dialog.component.scss']
})
export class AddTodoDialogComponent implements OnInit {
  todoData: any = <any>{
    done: false
  };
  content: any;

  constructor(
    public dialogRef: MatDialogRef<AddTodoDialogComponent>,
    private todoService: TodoService,
    private store: Store<any>
  ) { }

  ngOnInit() {
  }

  save(todoForm: NgForm) {
    if (todoForm.invalid) {
      return;
    }
    this.todoService.addTodo(this.todoData)
      .subscribe((res: any) => {
        this.getTodos();
        this.dialogRef.close();
      })
  }

  getTodos() {
    this.todoService.getTodos()
      .subscribe((res: any) => {
        this.store.dispatch({ type: SET_TODOS, payload: res });
      })
  }
}