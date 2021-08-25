import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';

import {ExemploService} from '../exemplo.service';
import * as fromExemploActions from '../actions/exemplo.actions'
import * as fromSharedActions from '../../../shared/actions/shared.actions';
import {EMPTY, of} from 'rxjs';

@Injectable()
export class ExemploEffects {

  loadExemplos$ = createEffect(() => this.actions$.pipe(
    ofType(fromExemploActions.loadExemplos.type),
    switchMap(() => this.exemploService.obterLista().pipe(
      map((lista) => {
        return fromExemploActions.loadExemplosSucesso({ lista });
      }),
      catchError(err => [fromSharedActions.showErrorMessage({ message: '', error: err })]),
    ))
    )
  );

  constructor(
    private actions$: Actions,
    private exemploService: ExemploService
  ) {}

}
