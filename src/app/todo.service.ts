import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private http: HttpClient
  ) { }

  getTodos(): any {
    return this.http.get(`${environment.apiUrl}/todos`);
  }

  addTodo(data: any): any  {
    return this.http.post(`${environment.apiUrl}/todos`, data);
  }

  editTodo(data: { id: any; }): any  {
    return this.http.put(`${environment.apiUrl}/todos/${data.id}`, data);
  }

  removeTodo(id: any): any  {
    return this.http.delete(`${environment.apiUrl}/todos/${id}`);
  }
}
