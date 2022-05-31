import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  inputHint = 'What needs to be done??';
  todos: any[] = [];
  todo = '';
  filterType = 'All';
  toggleAll = false;
  data :any;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getPosts().subscribe({
      next: (v) => {
        console.log(JSON.stringify(v));
        this.data = v;
        
      },
      error: (e) => {
        console.error(e);
      },
    });

    this.httpService.getMt().subscribe((res) => {
      // let response: HttpResponse<any> = res;
      // this.data = res.body;
    });
  }

  addTodo() {
    this.todos.push({
      text: this.todo,
      done: false,
    });
    this.todo = '';
  }
  clearCompleted() {
    this.todos = this.todos.filter((item) => {
      return !item.done; //return done is false
    });
  }

  filterTypeChanged(filterType: string) {
    this.filterType = filterType;
  }

  toggleAllChanged(value: boolean) {
    this.todos.forEach((item) => {
      item.done = value;
    });
  }

  updateToggleAllState() {
    this.toggleAll =
      this.todos.filter((item) => {
        return !item.done;
      }).length === 0;
  }

  removeTodo(todo: any) {
    this.todos.splice(this.todos.indexOf(todo), 1);
  }
}
