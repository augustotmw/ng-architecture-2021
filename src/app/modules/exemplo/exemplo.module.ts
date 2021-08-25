import { NgModule } from '@angular/core';
import { ContainerExemploComponent } from './containers/container-exemplo/container-exemplo.component';
import { ExemploComponent } from './components/exemplo/exemplo.component';
import { EffectsModule } from '@ngrx/effects';
import { ExemploEffects } from './effects/exemplo.effects';
import {SharedModule} from '../../shared/shared.module';
import {StoreModule} from '@ngrx/store';

import * as fromExemploReducer from './reducers/exemplo.reducer';

@NgModule({
  declarations: [
    ContainerExemploComponent,
    ExemploComponent,
  ],
  imports: [
    EffectsModule.forFeature([ExemploEffects]),
    StoreModule.forFeature(fromExemploReducer.featureKey, fromExemploReducer.reducer),
    SharedModule,
  ]
})
export class ExemploModule { }
