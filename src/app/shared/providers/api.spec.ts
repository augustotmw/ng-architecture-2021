import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Api, ApiContentTypes} from './api';
import {inject, TestBed} from '@angular/core/testing';
import {Global} from './global';
import {HttpHeaders, HttpParams} from '@angular/common/http';

describe('Api', () => {
  let httpTestinController: HttpTestingController;
  let api: Api;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ Global, Api ]
    });

    httpTestinController = TestBed.inject(HttpTestingController);
    api = TestBed.inject(Api);
  });

  it('should be able to create the api service', inject([Api], (api: Api) => {
    expect(api).toBeDefined();
  }));

  describe('get', () => {

    it('should send get request without params or headers', () => {
      api.get('/teste').subscribe();
      httpTestinController.expectOne('/teste');
      httpTestinController.verify();
    });

    it('should send get request with HttpParams', () => {
      const params = new HttpParams().set('teste', true);
      api.get('/teste', params).subscribe();
      httpTestinController.expectOne('/teste?teste=true');
      httpTestinController.verify();
    });

    it('should send get request with json params', () => {
      api.get('/teste', {teste: true}).subscribe();
      httpTestinController.expectOne('/teste?teste=true');
      httpTestinController.verify();
    });

    it('should send get request with json headers', () => {
      const headers: any = {};
      headers['Content-Type'] = ApiContentTypes.APP_X_WWW_FORM_URLENCODED;
      api.get('/teste', {}, headers).subscribe();
      httpTestinController.expectOne('/teste');
      httpTestinController.verify();
    });

    it('should send get request with HttpHeaders', () => {
      const headers: any = new HttpHeaders().set('Content-Type', ApiContentTypes.APP_X_WWW_FORM_URLENCODED);
      api.get('/teste', {}, headers).subscribe();
      httpTestinController.expectOne('/teste');
      httpTestinController.verify();
    });

  });

  describe('head', () => {
    it('should send head request without params or headers', () => {
      api.head('/teste').subscribe();
      httpTestinController.expectOne('/teste');
      httpTestinController.verify();
    });

    it('should send head request with HttpParams', () => {
      const params = new HttpParams().set('teste', true);
      api.head('/teste', params).subscribe();
      httpTestinController.expectOne('/teste?teste=true');
      httpTestinController.verify();
    });

    it('should send head request with json params', () => {
      api.head('/teste', {teste: true}).subscribe();
      httpTestinController.expectOne('/teste?teste=true');
      httpTestinController.verify();
    });

    it('should send head request with HttpHeaders', () => {
      const headers: any = new HttpHeaders().set('Content-Type', ApiContentTypes.APP_X_WWW_FORM_URLENCODED);
      api.head('/teste', {}, headers).subscribe();
      httpTestinController.expectOne('/teste');
      httpTestinController.verify();
    });

    it('should send head request with json headers', () => {
      const headers: any = {};
      headers['Content-Type'] = ApiContentTypes.APP_X_WWW_FORM_URLENCODED;
      api.head('/teste', {}, headers).subscribe();
      httpTestinController.expectOne('/teste');
      httpTestinController.verify();
    });

  });

  describe('patch', () => {
    it('shoud send patch request without body or headers', () => {
      api.patch('/teste').subscribe();
      httpTestinController.expectOne('/teste');
      httpTestinController.verify();
    });

    it('shoud send patch request with body', () => {
      api.patch('/teste', {teste: true}).subscribe();
      httpTestinController.expectOne('/teste');
      httpTestinController.verify();
    });

    it('shoud send patch request with HttpHeaders', () => {
      const headers: any = new HttpHeaders().set('Content-Type', ApiContentTypes.APP_X_WWW_FORM_URLENCODED);
      api.patch('/teste', {}, headers).subscribe();
      httpTestinController.expectOne('/teste');
      httpTestinController.verify();
    });

    it('shoud send patch request with json headers', () => {
      const headers: any = {};
      headers['Content-Type'] = ApiContentTypes.APP_X_WWW_FORM_URLENCODED;
      api.patch('/teste', {}, headers).subscribe();
      httpTestinController.expectOne('/teste');
      httpTestinController.verify();
    });

  });

  describe('post', () => {
    it('shoud send post request without body or headers', () => {
      api.post('/teste').subscribe();
      httpTestinController.expectOne('/teste');
      httpTestinController.verify();
    });

    it('shoud send post request with body', () => {
      api.post('/teste', {teste: true}).subscribe();
      httpTestinController.expectOne('/teste');
      httpTestinController.verify();
    });

    it('shoud send post request with HttpHeaders', () => {
      const headers: any = new HttpHeaders().set('Content-Type', ApiContentTypes.APP_X_WWW_FORM_URLENCODED);
      api.post('/teste', {}, headers).subscribe();
      httpTestinController.expectOne('/teste');
      httpTestinController.verify();
    });

    it('shoud send post request with json headers', () => {
      const headers: any = {};
      headers['Content-Type'] = ApiContentTypes.APP_X_WWW_FORM_URLENCODED;
      api.post('/teste', {}, headers).subscribe();
      httpTestinController.expectOne('/teste');
      httpTestinController.verify();
    });

  });

  describe('put', () => {
    it('shoud send put request without body or headers', () => {
      api.put('/teste').subscribe();
      httpTestinController.expectOne('/teste');
      httpTestinController.verify();
    });

    it('shoud send put request with body', () => {
      api.put('/teste', {teste: true}).subscribe();
      httpTestinController.expectOne('/teste');
      httpTestinController.verify();
    });

    it('shoud send put request with HttpHeaders', () => {
      const headers: any = new HttpHeaders().set('Content-Type', ApiContentTypes.APP_X_WWW_FORM_URLENCODED);
      api.put('/teste', {}, headers).subscribe();
      httpTestinController.expectOne('/teste');
      httpTestinController.verify();
    });

    it('shoud send put request with json headers', () => {
      const headers: any = {};
      headers['Content-Type'] = ApiContentTypes.APP_X_WWW_FORM_URLENCODED;
      api.put('/teste', {}, headers).subscribe();
      httpTestinController.expectOne('/teste');
      httpTestinController.verify();
    });

  });

  describe('delete', () => {
    it('shoud send delete request without body or headers', () => {
      api.delete('/teste').subscribe();
      httpTestinController.expectOne('/teste');
      httpTestinController.verify();
    });


    it('shoud send delete request with HttpHeaders', () => {
      const headers: any = new HttpHeaders().set('Content-Type', ApiContentTypes.APP_X_WWW_FORM_URLENCODED);
      api.delete('/teste', headers).subscribe();
      httpTestinController.expectOne('/teste');
      httpTestinController.verify();
    });

    it('shoud send delete request with json headers', () => {
      const headers: any = {};
      headers['Content-Type'] = ApiContentTypes.APP_X_WWW_FORM_URLENCODED;
      api.delete('/teste', headers).subscribe();
      httpTestinController.expectOne('/teste');
      httpTestinController.verify();
    });

  });

});
