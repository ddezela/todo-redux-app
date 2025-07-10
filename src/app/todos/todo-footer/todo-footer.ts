import { Component, OnInit } from '@angular/core';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import * as actions from '../../filtro/filtro.actions';
import { limpiarTodos } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  standalone: false,
  templateUrl: './todo-footer.html',
  styleUrl: './todo-footer.css'
})
export class TodoFooter implements OnInit {

  filtroActual: actions.FiltrosOpc = 'todos';
  filtros: actions.FiltrosOpc[] = ['todos', 'completados', 'pendientes'];

  pendientes: number = 0;

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    //this.store.select('filtro').subscribe(filtro => this.filtroActual = filtro);
    this.store.subscribe((state: AppState) => {
      this.filtroActual = state.filtro;
      this.pendientes = state.todos.filter(todo => !todo.completado).length;
    } );
  }  

  cambiarFiltro(filtro: actions.FiltrosOpc) {
    this.store.dispatch(actions.setFiltro({ filtro }));
  }
  
  cleanCompletados() {
    this.store.dispatch(limpiarTodos());
  }
}
