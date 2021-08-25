import * as fromHomeActions from '../actions/home.actions';
import * as fromHomeReducer from './home.reducer';
import {mockLoadHome} from "../mocks/home.mock";
import {selectHomeContent} from "./home.reducer";

describe('HomeReducer', () => {
  describe('unknown action', () => {
    it('should return the previous state', () => {
      const { initialState, reducer } = fromHomeReducer;
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('loadHomeSucesso Action', () => {

    it('should retrieve all home content and update state in a immutable way', () => {
      const { actionTypes } = fromHomeActions;
      const action = { type: actionTypes.loadHomeSucesso, home: mockLoadHome};
      const { initialState, reducer } = fromHomeReducer;
      const state = reducer({ ...initialState }, action);
      const newState = { home: mockLoadHome };

      expect(state).toEqual(newState);
      expect(state).not.toBe(newState);
    });

  });

  it('should select "lista" from state', () => {
    const { initialState, selectHomeContent } = fromHomeReducer;
    const result = selectHomeContent.projector(initialState.home);
    expect(result).not.toBeTruthy();
  });

});
