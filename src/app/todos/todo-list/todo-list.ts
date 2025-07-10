import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { Todo } from '../models/todo.model';
import { FiltrosOpc } from '../../filtro/filtro.actions';

@Component({
  selector: 'app-todo-list',
  standalone: false,
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css'
})
export class TodoList implements OnInit {
  
  todos: Todo[] = [];
  filtorActual: FiltrosOpc = 'todos';

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    /*
    this.store.select('todos').subscribe(todos => {
      this.todos = todos;
    });
    */
    //this.store.subscribe((state: AppState) => {
    this.store.subscribe( ({todos, filtro}) => {
      this.todos = todos;
      this.filtorActual = filtro;
    } );
  }
}
