import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';

import * as fromHomeActions from '../actions/home.actions'
import * as fromSharedActions from '../../../shared/actions/shared.actions';
import {HomeService} from "../home.service";

@Injectable()
export class HomeEffects {

  loadHome$ = createEffect(() => this.actions$.pipe(
    ofType(fromHomeActions.loadHome.type),
    switchMap(() => this.homeService.obterConteudo().pipe(
      map((home) => {
        return fromHomeActions.loadHomeSucesso({ home });
      }),
      catchError(err => [fromSharedActions.showErrorMessage({ message: '', error: err })]),
    ))
    )
  );

  constructor(
    private actions$: Actions,
    private homeService: HomeService,
  ) {}

}
