import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Global} from './global';
import {ObjectTypes} from '../const/object.const';

export const ApiContentTypes = {
  APP_JSON: 'application/json',
  APP_X_WWW_FORM_URLENCODED: 'application/x-www-form-urlencoded',
}

export const ApiResponseTypes = {
  ARRAYBUFFER: 'arraybuffer',
  BLOB: 'blob',
  JSON: 'json',
  TEXT: 'text'
}

@Injectable()
export class Api {

  constructor(
    private _global: Global,
    private _http: HttpClient
  ) { }

  get(path: string, params?: any, headers?: any, responseType: string = ApiResponseTypes.JSON): Observable<any> {
    return this._http.get(path, this._mountRequestOpts(params, headers, responseType));
  }

  head(path: string, params?: any, headers?: any, responseType: string = ApiResponseTypes.JSON): Observable<any> {
    return this._http.head(path, this._mountRequestOpts(params, headers, responseType));
  }

  patch(path: string, body?: any, headers?: any): Observable<any> {
    return this._http.patch(path, body, { headers: this._createHttpHeaders(headers) });
  }

  post(path: string, body?: any, headers?: any): Observable<any> {
    return this._http.post(path, body, { headers: this._createHttpHeaders(headers) });
  }

  put(path: string, body?: any, headers?: any): Observable<any> {
    return this._http.put(path, body, { headers: this._createHttpHeaders(headers) });
  }

  delete(path: string, headers?: any): Observable<any> {
    return this._http.delete(path, { headers: this._createHttpHeaders(headers) });
  }

  private _createHttpHeaders(headers: any) {
    let _headers;
    if (!headers) {
      _headers = new HttpHeaders().set('Content-Type', ApiContentTypes.APP_JSON);
    }
    if (headers) {
      if (headers instanceof HttpHeaders) {
        _headers = headers;
      }
      if (!(headers instanceof HttpHeaders) && typeof headers === 'object' && this._global.getTypeOfObject(headers) === ObjectTypes.OBJECT) {
        _headers = new HttpHeaders();
        for (let k in headers) { _headers = _headers.set(k, headers[k]); }
      }
    }
    return _headers;
  }

  private _mountRequestOpts(params?: any, headers?: any, responseType?: string) {
    const opts: any = {};
    if (params) {
      if (params instanceof HttpParams) {
        opts.params = params;
      }
      if (!(params instanceof HttpParams) && typeof params === 'object' && this._global.getTypeOfObject(params) === ObjectTypes.OBJECT) {
        opts.params = new HttpParams();
        for (let k in params) { opts.params = opts.params.set(k, params[k]); }
      }
    }
    opts.headers = this._createHttpHeaders(headers);
    opts.responseType = responseType;
    return opts;
  }

}
