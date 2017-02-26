import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from "./pages.component";

const routes: Routes = [
  { path: 'login', loadChildren: 'app/pages/login/login.module#LoginModule' },
  { path: 'register', loadChildren: 'app/pages/register/register.module#RegisterModule' },
  {
    path: '',
    component: PagesComponent,
    children: [
      //{ path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '', loadChildren: 'app/pages/home/home.module#HomeModule', pathMatch: 'full' },
      { path: 'container', loadChildren: 'app/pages/container/container.module#ContainerModule' },
      { path: 'other', loadChildren: 'app/pages/other/other.module#OtherModule' }
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
