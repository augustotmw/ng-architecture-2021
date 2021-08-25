import {Action, createFeatureSelector, createReducer, createSelector, MemoizedSelector, on} from '@ngrx/store';

import * as fromHomeActions from '../actions/home.actions';
import { HomeModel } from '../models/home.model';


export const featureKey = 'home';

export interface State {
  home: HomeModel;
}

export const initialState: State = {
  home: { title: '' },
}

const homeReducer = createReducer(
  initialState,
  on(fromHomeActions.loadHomeSucesso, (state, { home }) => {
    return { ...state, home };
  }),
);

export function reducer(state: State | undefined, action: Action) {
  return homeReducer(state, action);
}

// Selectors

export const selectHomeState: MemoizedSelector<object, State> = createFeatureSelector<State>(featureKey);

export const selectHomeContent: MemoizedSelector<object, HomeModel> = createSelector(
  selectHomeState,
  (state: State) => state.home
);
