import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreModule} from '@ngrx/store';
import {metaReducers, reducers} from '../reducers';
import {EffectsModule} from '@ngrx/effects';
import {AppEffects} from '../app.effects';
import {StoreRouterConnectingModule} from '@ngrx/router-store';

import {externalModules} from './config/externalModules';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { StructureComponent } from './components/structure/structure.component';
import { HeaderComponent } from './components/header/header.component';
import {RouterModule} from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import {registerLocaleData} from "@angular/common";
import localePt from "@angular/common/locales/pt";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";

registerLocaleData(localePt, 'pt');

export const createTranslateLoader = (http: HttpClient) => {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    StructureComponent,
    HeaderComponent,
    FooterComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        StoreModule.forRoot(reducers, {metaReducers}),
        externalModules,
        EffectsModule.forRoot([AppEffects]),
        StoreRouterConnectingModule.forRoot({
            stateKey: 'router'
        }),
        RouterModule,
      TranslateModule.forRoot({
        defaultLanguage: 'pt',
        loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
        }
      }),
    ],
  exports: [],
  providers: []
})
export class CoreModule { }
