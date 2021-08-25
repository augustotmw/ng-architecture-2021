import {TestBed} from '@angular/core/testing';
import {ExemploService} from './exemplo.service';
import {Api} from '../../shared/providers/api';
import {Global} from '../../shared/providers/global';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ExemploService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ],
    providers: [ Api, Global ]
  }));

  it('should be created', () => {
    const service: ExemploService = TestBed.inject(ExemploService);
    console.log('ExemploService.should be created', service);
    expect(service).toBeTruthy();
  });
});
