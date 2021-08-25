import {createEntityAdapter, EntityState} from '@ngrx/entity';
import {Action, createFeatureSelector, createReducer, createSelector, MemoizedSelector, on} from '@ngrx/store';

import * as fromExemploActions from '../actions/exemplo.actions';
import {ExemploModel} from '../models/exemplo.model';


export const featureKey = 'exemplo';

export interface State {
  lista: ExemploModel[];
}

export const initialState: State = {
  lista: [],
}

const exemploReducer = createReducer(
  initialState,
  on(fromExemploActions.loadExemplosSucesso, (state, { lista }) => {
    return { ...state, lista };
  }),
);

export function reducer(state: State | undefined, action: Action) {
  return exemploReducer(state, action);
}

// Selectors

export const selectExemploState: MemoizedSelector<object, State> = createFeatureSelector<State>(featureKey);

export const selectExemploLista: MemoizedSelector<object, ExemploModel[]> = createSelector(
  selectExemploState,
  (state: State) => state.lista
);
