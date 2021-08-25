import * as fromHomeActions from './home.actions';

describe('ExemploActions', () => {

  describe('loadHome', () => {
    it('should return an action', () => {
      expect(fromHomeActions.loadHome.type)
        .toBe(fromHomeActions.actionTypes.loadHome)
    });
  })

  describe('loadHomeSucesso', () => {
    it('should return an action', () => {
      expect(fromHomeActions.loadHomeSucesso.type)
        .toBe(fromHomeActions.actionTypes.loadHomeSucesso)
    });
  })

});
