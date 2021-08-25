import {TestBed} from '@angular/core/testing';
import {HomeService} from './home.service';
import {Api} from '../../shared/providers/api';
import {Global} from '../../shared/providers/global';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('HomeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ],
    providers: [ Api, Global ]
  }));

  it('should be created', () => {
    const service: HomeService = TestBed.inject(HomeService);
    expect(service).toBeTruthy();
  });
});
