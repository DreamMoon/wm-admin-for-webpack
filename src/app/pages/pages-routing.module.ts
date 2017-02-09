import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PagesComponent} from "./pages.component";

const routes: Routes = [
  { path: 'login', loadChildren: 'app/pages/login/login.module#LoginModule' },
  {
    path: '',
    component: PagesComponent,
    children: [
      //{ path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '', loadChildren: 'app/pages/home/home.module#HomeModule', pathMatch: 'full' },
      { path: 'container', loadChildren: 'app/pages/container/container.module#ContainerModule' },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PagesRoutingModule {}
