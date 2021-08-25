import {createAction, props} from '@ngrx/store';
import {ExemploModel} from '../models/exemplo.model';

export const actionTypes = {
  loadExemplos: '[Exemplo] Load Exemplos',
  loadExemplosSucesso: '[Exemplo] Load Exemplos Sucesso'
};

export const loadExemplos = createAction(
  actionTypes.loadExemplos
);

export const loadExemplosSucesso = createAction(
  actionTypes.loadExemplosSucesso,
  props<{ lista: ExemploModel[]}>()
);
