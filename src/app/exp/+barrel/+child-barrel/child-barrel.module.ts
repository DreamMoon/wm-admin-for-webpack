import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './child-barrel.routes.ts';
import { ChildBarrelComponent } from './child-barrel.component.ts';

console.log('`ChildBarrel` bundle loaded asynchronously');

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    ChildBarrelComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class ChildBarrelModule {
  public static routes = routes;
}
