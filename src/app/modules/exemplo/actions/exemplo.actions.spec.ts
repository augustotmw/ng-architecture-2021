import * as fromExemploActions from './exemplo.actions';

describe('ExemploActions', () => {

  describe('loadExemplos', () => {
    it('should return an action', () => {
      expect(fromExemploActions.loadExemplos.type)
        .toBe(fromExemploActions.actionTypes.loadExemplos)
    });
  })

  describe('loadExemplosSucesso', () => {
    it('should return an action', () => {
      expect(fromExemploActions.loadExemplosSucesso.type)
        .toBe(fromExemploActions.actionTypes.loadExemplosSucesso)
    });
  })

});
