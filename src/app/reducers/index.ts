import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import * as fromRouterStore from '@ngrx/router-store';

import { environment } from '../../environments/environment';
import * as fromExemploReducers from '../modules/exemplo/reducers/exemplo.reducer';


export interface State {
  router: fromRouterStore.RouterReducerState,
  [fromExemploReducers.featureKey]: fromExemploReducers.State,
}

export const reducers: ActionReducerMap<State> = {
  router: fromRouterStore.routerReducer,
  [fromExemploReducers.featureKey]: fromExemploReducers.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
