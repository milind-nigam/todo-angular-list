import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTodoDialogComponent } from '../add-todo-dialog/add-todo-dialog.component';
import { TodoService } from '../todo.service';
import { Store, select } from '@ngrx/store';
import { SET_TODOS } from '../reducers/todo-reducer';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  allTasks: any[] = [];
  todo: any[] = [];
  done: any[] = [];

  constructor(
    public dialog: MatDialog,
    private todoService: TodoService,
    private store: Store<any>
  ) {
    store.pipe(select('todos'))
      .subscribe(allTasks => {
        this.allTasks = allTasks || [];
        this.todo = this.allTasks.filter(t => !t.done);
        this.done = this.allTasks.filter(t => t.done);
      });
  }

  ngOnInit(): void {
    this.getTodos();
  }

  openAddTodoDialog(): void {
    const dialogRef = this.dialog.open(AddTodoDialogComponent, {
      width: '70vw',
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  getTodos(): void {
    this.todoService.getTodos()
      .subscribe((res: any) => {
        this.store.dispatch({ type: SET_TODOS, payload: res });
      });
  }

  drop(event: CdkDragDrop<any[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    const data = event.container.data[0];
    data.done = !data.done;
    this.todoService.editTodo(data)
      .subscribe((res: any) => {});
  }

  removeTodo(index: number, tasks: any[]): void {
    const todoId = tasks[index].id;
    this.todoService.removeTodo(todoId)
      .subscribe((res: any) => {
        this.getTodos();
      });
  }
}
