import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContainerExemploComponent} from './containers/container-exemplo/container-exemplo.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerExemploComponent,
    data: {
      breadcrumb: ''
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExemploRoutingModule { }
