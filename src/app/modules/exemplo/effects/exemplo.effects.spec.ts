import {Observable, of} from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {cold, hot} from 'jasmine-marbles';

import { ExemploEffects } from './exemplo.effects';
import {Api} from '../../../shared/providers/api';
import {Global} from '../../../shared/providers/global';
import * as fromExemploActions from '../actions/exemplo.actions';
import * as fromExemploReducer from '../reducers/exemplo.reducer';
import * as fromSharedActions from '../../../shared/actions/shared.actions';
import {ExemploService} from '../exemplo.service';
import {mockLoadExemplos} from '../mocks/service.mock';

describe('ExemploEffects', () => {
  let actions$: Observable<any>;
  let effects: ExemploEffects;
  let store: MockStore<fromExemploReducer.State>;
  let service: ExemploService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        ExemploEffects,
        provideMockActions(() => actions$),
        provideMockStore({
          initialState: fromExemploReducer.initialState,
        }),
        Api,
        Global,
      ]
    });

    effects = TestBed.inject(ExemploEffects);
    store = TestBed.inject(MockStore);
    service = TestBed.inject(ExemploService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('ExemploEffects.loadExemplos$', () => {

    it('should call effect to load "Exemplos" list', (done) => {
      const spy = spyOn(service, 'obterLista').and.callThrough();
      actions$ = of(fromExemploActions.loadExemplos);
      effects.loadExemplos$.subscribe((res) => {
        expect(res).toEqual(fromExemploActions.loadExemplosSucesso({ lista: mockLoadExemplos}));
        expect(spy).toHaveBeenCalledTimes(1);
        done();
      });
    });

    it('should call effect to load "Exemplos" list with error', () => {
      const action = fromExemploActions.loadExemplos() as any;
      const error = new Error() as any;
      const outcome = fromSharedActions.showErrorMessage({message: '', error: {}}) as any;

      actions$ = hot('-a|', { a: action });
      const response = cold('-#|', {}, error);
      const obterLista = spyOn(service, 'obterLista');
      obterLista.and.returnValue(response);

      const expected = cold('--(b|)', { b: outcome });

      effects.loadExemplos$.subscribe(
        () => {},
        err => {
          expect(err).toBeObservable(expected);
        }
      )

    });

  });

});
