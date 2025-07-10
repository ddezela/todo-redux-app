import { createReducer, on } from "@ngrx/store";
import { FiltrosOpc, setFiltro } from "./filtro.actions";

export const initialState: FiltrosOpc = "todos";

const _filtroReducer = createReducer<FiltrosOpc>(
    initialState,
    on(setFiltro, (state, { filtro }) => filtro)
);

export function filtroReducer(state: FiltrosOpc = initialState, action: any) {
    return _filtroReducer(state, action);
}