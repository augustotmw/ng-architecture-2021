import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StructureComponent} from './core/components/structure/structure.component';
import {ContainerExemploComponent} from './modules/exemplo/containers/container-exemplo/container-exemplo.component';
import {ContainerHomeComponent} from "./modules/home/containers/container-home/container-home.component";
import {AuthGuardService} from "./core/guard/auth-guard.service";

const routes: Routes = [
  {
    path: '',
    component: StructureComponent,
    children: [
      {
        path: '',
        component: ContainerHomeComponent,
        data: {
          breadcrumb: 'Home'
        }
      },
      {
        path: 'exemplo',
        component: ContainerExemploComponent,
        data: {
          breadcrumb: 'Exemplo'
        },
        canActivate: [AuthGuardService]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
