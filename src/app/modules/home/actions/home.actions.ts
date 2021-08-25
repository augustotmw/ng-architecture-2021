import {createAction, props} from '@ngrx/store';
import {HomeModel} from '../models/home.model';

export const actionTypes = {
  loadHome: '[Home] Load Home',
  loadHomeSucesso: '[Home] Load Home Sucesso'
};

export const loadHome = createAction(
  actionTypes.loadHome
);

export const loadHomeSucesso = createAction(
  actionTypes.loadHomeSucesso,
  props<{ home: HomeModel}>()
);
