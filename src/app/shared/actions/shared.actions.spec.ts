import * as fromSharedActions from './shared.actions';
import {showErrorMessage} from './shared.actions';

describe('SharedActions', () => {

  describe('showErrorMessage', () => {
    it('should return an action', () => {
      expect(fromSharedActions.showErrorMessage({ message: '' }).type)
        .toBe(fromSharedActions.actionTypes.showErrorMessage);
    });
  });

  describe('showSuccessMessage', () => {
    it('should return an action', () => {
      expect(fromSharedActions.showSuccessMessage({ message: '' }).type)
        .toBe(fromSharedActions.actionTypes.showSuccessMessage);
    });
  });

});

