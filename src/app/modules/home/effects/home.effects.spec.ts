import {Observable, of} from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {cold, hot} from 'jasmine-marbles';

import { HomeEffects } from './home.effects';
import {Api} from '../../../shared/providers/api';
import {Global} from '../../../shared/providers/global';
import * as fromHomeActions from '../actions/home.actions';
import * as fromHomeReducer from '../reducers/home.reducer';
import * as fromSharedActions from '../../../shared/actions/shared.actions';
import {HomeService} from '../home.service';
import {mockLoadHome} from '../mocks/home.mock';

describe('HomeEffects', () => {
  let actions$: Observable<any>;
  let effects: HomeEffects;
  let store: MockStore<fromHomeReducer.State>;
  let service: HomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        HomeEffects,
        provideMockActions(() => actions$),
        provideMockStore({
          initialState: fromHomeReducer.initialState,
        }),
        Api,
        Global,
      ]
    });

    effects = TestBed.inject(HomeEffects);
    store = TestBed.inject(MockStore);
    service = TestBed.inject(HomeService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('HomeEffects.loadHome$', () => {

    it('should call effect to load home content', (done) => {
      const spy = spyOn(service, 'obterConteudo').and.callThrough();
      actions$ = of(fromHomeActions.loadHome);
      effects.loadHome$.subscribe((res) => {
        expect(res).toEqual(fromHomeActions.loadHomeSucesso({ home: mockLoadHome }) as any);
        expect(spy).toHaveBeenCalledTimes(1);
        done();
      });
    });

    it('should call effect to home content with error', () => {
      const action = fromHomeActions.loadHome() as any;
      const error = new Error() as any;
      const outcome = fromSharedActions.showErrorMessage({message: '', error: {}}) as any;

      actions$ = hot('-a|', { a: action });
      const response = cold('-#|', {}, error);
      const obterConteudo = spyOn(service, 'obterConteudo');
      obterConteudo.and.returnValue(response);

      const expected = cold('--(b|)', { b: outcome });

      effects.loadHome$.subscribe(
        () => {},
        err => {
          expect(err).toBeObservable(expected);
        }
      )

    });

  });

});
