import {Injectable} from '@angular/core';
import {Api} from '../../shared/providers/api';
import {Observable, of} from 'rxjs';
import {HomeModel} from "./models/home.model";
import {mockLoadHome} from "./mocks/home.mock";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  readonly API: string = '';

  constructor(
    private _api: Api
  ) {}

  obterConteudo(): Observable<HomeModel> {
    // return this._api.get(`${this.API}/endpoint`);
    return of(mockLoadHome);
  }

}
