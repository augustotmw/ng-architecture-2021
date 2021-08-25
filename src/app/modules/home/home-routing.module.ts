import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ContainerHomeComponent } from './containers/container-home/container-home.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerHomeComponent,
    data: {
      breadcrumb: ''
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
