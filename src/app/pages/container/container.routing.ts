import { Routes, RouterModule }  from '@angular/router';

import { ContainerComponent } from './container.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: ContainerComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
