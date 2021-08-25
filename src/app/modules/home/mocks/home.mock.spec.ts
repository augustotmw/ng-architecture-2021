import {TestBed} from '@angular/core/testing';
import {MockHomeService} from "./home.mock";

describe('MockExemploService', () => {
  let service: MockHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ MockHomeService ]
    });

    service = TestBed.inject(MockHomeService);
  });

  it('should create a service', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of "Exemplos"', () => {
    expect(service.obterConteudo()).toBeTruthy()
  })

});
