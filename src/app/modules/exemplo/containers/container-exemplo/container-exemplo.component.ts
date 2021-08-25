import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import * as fromExemploReducer from '../../reducers/exemplo.reducer';
import * as fromExemploActions from '../../actions/exemplo.actions';
import {ExemploModel} from '../../models/exemplo.model';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'cp-container-exemplo',
  templateUrl: './container-exemplo.component.html',
  styleUrls: ['./container-exemplo.component.scss'],
})
export class ContainerExemploComponent implements OnInit {

  lista$: Observable<ExemploModel[]> | null = null;

  constructor(
    private _store: Store<fromExemploReducer.State>,
  ) {
  }

  ngOnInit(): void {
    this.lista$ = this._store.pipe(select(fromExemploReducer.selectExemploLista), filter(lista => !!lista));
    this._store.dispatch(fromExemploActions.loadExemplos());
  }

}
