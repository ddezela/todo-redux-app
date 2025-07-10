import { createReducer, on } from "@ngrx/store";
import { borrar, crear, editar, limpiarTodos, toggle, toggleAll } from "./todo.actions";
import { Todo } from "./models/todo.model";

export const estadoInicial: Todo[] = [
    new Todo('Salvar al mundo'),
    new Todo('Hacer la compra'),
    new Todo('Estudiar Angular'),
    new Todo('Estudiar NGRX'),
    new Todo('Estudiar TypeScript'),
    new Todo('Estudiar JavaScript'),
    new Todo('Estudiar HTML')];

const _todoReducer = createReducer(estadoInicial,
    on(crear, (state, { texto }) => [...state, new Todo(texto)]),
    on(limpiarTodos, (state) => state.filter(todo => !todo.completado)),
    on(borrar, (state, { id }) => state.filter(todo => todo.id !== id)),
    on(toggle, (state, { id }) => {
        return state.map(todo => {
            if (todo.id === id) {
                const updatedTodo = new Todo(todo.texto);
                updatedTodo.id = todo.id;
                updatedTodo.completado = !todo.completado;
                return updatedTodo;
            }
            return todo;
        });
    }),
    on(toggleAll, (state, { Completado }) => {
        return state.map(todo => {
            const updatedTodo = new Todo(todo.texto);
            updatedTodo.id = todo.id;
            updatedTodo.completado = Completado;
            return updatedTodo;
        });
    }),
    on(editar, (state, { id, texto }) => {
        return state.map(todo => {
            if (todo.id === id) {
                const updatedTodo = new Todo(texto);
                updatedTodo.id = todo.id;
                updatedTodo.completado = todo.completado;
                return updatedTodo;
            }
            return todo;
        });
    }),
);

export function todoReducer(state: Todo[] = estadoInicial, action: any) {
    return _todoReducer(state, action);
}