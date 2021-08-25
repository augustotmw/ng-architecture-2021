import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {Observable} from 'rxjs';
import {provideMockStore} from '@ngrx/store/testing';

import {Api} from '../../../../shared/providers/api';
import {Global} from '../../../../shared/providers/global';
import * as fromHomeReducer from '../../reducers/home.reducer';
import {ContainerHomeComponent} from "./container-home.component";
import {mockLoadHome} from "../../mocks/home.mock";

describe('ContainerHomeComponent', () => {
  let actions$: Observable<any>;
  let component: ContainerHomeComponent;
  let fixture: ComponentFixture<ContainerHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerHomeComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [
        Api,
        Global,
        provideMockActions(() => actions$),
        provideMockStore({
          initialState: fromHomeReducer.initialState,
          selectors: [
            {
              selector: fromHomeReducer.selectHomeContent,
              value: mockLoadHome
            }
          ]
        }),
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
