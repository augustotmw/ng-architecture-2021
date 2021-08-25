import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {Observable} from 'rxjs';
import {provideMockStore} from '@ngrx/store/testing';

import { ContainerExemploComponent } from './container-exemplo.component';
import {Api} from '../../../../shared/providers/api';
import {Global} from '../../../../shared/providers/global';
import * as fromExemploReducer from '../../reducers/exemplo.reducer';
import {mockLoadExemplos} from '../../mocks/service.mock';

describe('ContainerExemploComponent', () => {
  let actions$: Observable<any>;
  let component: ContainerExemploComponent;
  let fixture: ComponentFixture<ContainerExemploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerExemploComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [
        Api,
        Global,
        provideMockActions(() => actions$),
        provideMockStore({
          initialState: fromExemploReducer.initialState,
          selectors: [
            {
              selector: fromExemploReducer.selectExemploLista,
              value: mockLoadExemplos
            }
          ]
        }),
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerExemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
