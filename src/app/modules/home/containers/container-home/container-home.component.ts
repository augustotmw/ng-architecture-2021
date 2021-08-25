import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import * as fromHomeReducer from '../../reducers/home.reducer';
import * as fromHomeActions from '../../actions/home.actions';
import { HomeModel } from '../../models/home.model';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'lt-container-home',
  templateUrl: './container-home.component.html',
  styleUrls: ['./container-home.component.scss'],
})
export class ContainerHomeComponent implements OnInit {

  content$: Observable<HomeModel> | null = null;

  constructor(
    private _store: Store<fromHomeReducer.State>,
  ) {
  }

  ngOnInit(): void {
    this.content$ = this._store.pipe(select(fromHomeReducer.selectHomeContent), filter(home => !!home));
    this._store.dispatch(fromHomeActions.loadHome());
  }

}
