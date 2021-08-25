import {of} from 'rxjs';

export const mockLoadExemplos = [
  { id: 'item1' },
  { id: 'item2' },
  { id: 'item3' },
];

export class MockExemploService {

  obterLista() {
    return of(mockLoadExemplos);
  }

}
