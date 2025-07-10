import { Component, OnInit } from '@angular/core';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import * as action from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  standalone: false,
  templateUrl: './todo-page.html',
  styleUrl: './todo-page.css'
})

export class TodoPage implements OnInit{

  completado: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
   
  }

  toggleAll(){
    this.completado = !this.completado;
    this.store.dispatch( action.toggleAll({Completado: this.completado}));
  }
}

