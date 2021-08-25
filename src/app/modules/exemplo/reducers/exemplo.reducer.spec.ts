import {mockLoadExemplos} from '../mocks/service.mock';
import * as fromExemploActions from '../actions/exemplo.actions';
import * as fromExemploReducer from './exemplo.reducer';

describe('ExamploReducer', () => {
  describe('unknown action', () => {
    it('should return the previous state', () => {
      const { initialState, reducer } = fromExemploReducer;
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('loadExemploSucesso Action', () => {

    it('should retrieve all "exemplos" list and update state ina immutable way', () => {
      const { actionTypes } = fromExemploActions;
      const action = { type: actionTypes.loadExemplosSucesso, lista: mockLoadExemplos};
      const { initialState, reducer } = fromExemploReducer;
      const state = reducer({ ...initialState }, action);
      const newState = { lista: mockLoadExemplos };

      expect(state).toEqual(newState);
      expect(state).not.toBe(newState);
    });

  });

  it('should select "lista" from state', () => {
    const { initialState, selectExemploLista } = fromExemploReducer;
    const result = selectExemploLista.projector(initialState.lista);
    expect(result).not.toBeTruthy();
  });

});
