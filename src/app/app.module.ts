import localePt from '@angular/common/locales/pt';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import {ExemploModule} from './modules/exemplo/exemplo.module';
import {HomeModule} from "./modules/home/home.module";
import {AuthGuardService} from "./core/guard/auth-guard.service";

const ComponentsModules = [
  HomeModule,
  ExemploModule,
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    CoreModule,
    SharedModule,
    ...ComponentsModules
  ],
  exports: [],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
