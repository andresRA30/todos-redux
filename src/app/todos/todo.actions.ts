import { createAction, props } from "@ngrx/store";

export const crear = createAction('[TODO] CREAR', props<{ texto: string }>());
export const toggle = createAction('[TODO] Toggle', props<{ id: number }>());
export const editar = createAction('[TODO] Editar', props<{ id: number, texto: string }>());
export const borrar = createAction('[TODO] Borrar', props<{ id: number }>());
export const toggleAll = createAction('[TODO] ToggleAll', props<{ completado: boolean }>());
export const limpiarCompletados = createAction('[TODO] LimpiarCompletados');
