import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';
import { FiltrosOpc } from '../filtro/filtro.actions';

@Pipe({
  name: 'filtroTodo',
  standalone: false
})
export class FiltroPipe implements PipeTransform {

  transform(todos: Todo[], filtro: FiltrosOpc): Todo[] {
    
    switch (filtro) {
      case 'completados':
        return todos.filter(todo => todo.completado);
      case 'pendientes':
        return todos.filter(todo => !todo.completado);
      default:
        return todos;
    } 
  }

}
