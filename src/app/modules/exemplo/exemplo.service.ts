import {Injectable} from '@angular/core';
import {Api} from '../../shared/providers/api';
import {Observable, of} from 'rxjs';
import {ExemploModel} from './models/exemplo.model';
import {mockLoadExemplos} from './mocks/service.mock';

@Injectable({
  providedIn: 'root'
})
export class ExemploService {

  readonly API: string = '';

  constructor(
    private _api: Api
  ) {}

  obterLista(): Observable<ExemploModel[]> {
    // return this._api.get(`${this.API}/endpoint`);
    return of(mockLoadExemplos);
  }

}
