import {MockExemploService, mockLoadExemplos} from './service.mock';
import {TestBed} from '@angular/core/testing';

describe('MockExemploService', () => {
  let service: MockExemploService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ MockExemploService ]
    });

    service = TestBed.inject(MockExemploService);
  });

  it('should create a service', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of "Exemplos"', () => {
    expect(service.obterLista()).toBeTruthy()
  })

});
