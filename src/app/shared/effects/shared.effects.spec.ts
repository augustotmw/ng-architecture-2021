import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {Observable, of} from 'rxjs';

import { SharedEffects } from './shared.effects';
import * as fromSharedActions from '../actions/shared.actions';

describe('SharedEffects', () => {
  let actions$: Observable<any>;
  let effects: SharedEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SharedEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(SharedEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('SharedEffects.showErrorMessage$', () => {

    it('should call effect to show error message', (done) => {
      actions$ = of(fromSharedActions.showErrorMessage);
      effects.showErrorMessage$.subscribe((resp) => {
        expect(resp.type).toEqual(fromSharedActions.showErrorMessage.type);
        done();
      });
    });

  });

  describe('SharedEffects.showSuccessMessage$', () => {

    it('should call effect to show error message', (done) => {
      actions$ = of(fromSharedActions.showSuccessMessage);
      effects.showSuccessMessage$.subscribe((resp) => {
        expect(resp.type).toEqual(fromSharedActions.showSuccessMessage.type);
        done();
      });
    });

  });

});
