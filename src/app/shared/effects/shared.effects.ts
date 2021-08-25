import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';

import * as fromSharedActions from '../actions/shared.actions';
import {tap} from 'rxjs/operators';


@Injectable()
export class SharedEffects {

  showErrorMessage$ = createEffect(() => this.actions$.pipe(
    ofType(fromSharedActions.showErrorMessage.type),
    tap((payload) => {
      console.log('Show Error Message', payload);
    })
  ), { dispatch: false });

  showSuccessMessage$ = createEffect(() => this.actions$.pipe(
    ofType(fromSharedActions.showSuccessMessage.type),
    tap((payload) => {
      console.log('Show Success Message', payload);
    })
  ), { dispatch: false });

  constructor(private actions$: Actions) {}

}
