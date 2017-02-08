import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  /*{ path: '', loadChildren: 'app/pages/home/home.module#HomeModule' }*/
  { path: 'container', loadChildren: 'app/pages/container/container.module#ContainerModule' }
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
