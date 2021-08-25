import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Api} from './providers/api';
import {Global} from './providers/global';
import { EffectsModule } from '@ngrx/effects';
import { SharedEffects } from './effects/shared.effects';
import {TranslateModule} from "@ngx-translate/core";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([SharedEffects]),
    TranslateModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    TranslateModule,
    RouterModule,
  ],
  providers: [
    Api,
    Global,
  ]
})
export class SharedModule { }
