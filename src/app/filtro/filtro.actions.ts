import { createAction, props } from "@ngrx/store";

export type FiltrosOpc = 'todos'  | 'completados' | 'pendientes';

export const setFiltro = createAction(
    '[Filtro] Set filtro', 
    props<{ filtro: FiltrosOpc }>() 
);