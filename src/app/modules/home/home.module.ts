import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import {SharedModule} from '../../shared/shared.module';
import {StoreModule} from '@ngrx/store';

import * as fromHomeReducer from './reducers/home.reducer';
import {ContainerHomeComponent} from "./containers/container-home/container-home.component";
import {HomeComponent} from "./components/home/home.component";
import {HomeEffects} from "./effects/home.effects";

@NgModule({
  declarations: [
    ContainerHomeComponent,
    HomeComponent,
  ],
  imports: [
    EffectsModule.forFeature([HomeEffects]),
    StoreModule.forFeature(fromHomeReducer.featureKey, fromHomeReducer.reducer),
    SharedModule,
  ]
})
export class HomeModule { }
