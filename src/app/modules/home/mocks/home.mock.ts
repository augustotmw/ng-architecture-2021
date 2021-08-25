import {of} from 'rxjs';
import {HomeModel} from "../models/home.model";

export const mockLoadHome: HomeModel = {
  title: 'Bem vindo'
};

export class MockHomeService {

  obterConteudo() {
    return of(mockLoadHome);
  }

}
