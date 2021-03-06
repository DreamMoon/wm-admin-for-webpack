import { NgModule, ModuleWithProviders }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
  FooterComponent,
  HomeComponent,
  NavbarComponent,
  ScrollToTopComponent,
  SidebarComponent,
  WrapperComponent
} from './components/framework';

import {
  WmImageLoaderService,
  WmThemePreloader,
  WmThemeSpinner
} from './providers';

const WM_COMPONENTS = [
  FooterComponent,
  HomeComponent,
  NavbarComponent,
  ScrollToTopComponent,
  SidebarComponent,
  WrapperComponent,

];

const WM_DIRECTIVES = [

];

const WM_PIPES = [

];

const WM_SERVICES = [
  WmImageLoaderService,
  WmThemePreloader,
  WmThemeSpinner
];

const WM_VALIDATORS = [

];

@NgModule({
  declarations: [
    ...WM_PIPES,
    ...WM_DIRECTIVES,
    ...WM_COMPONENTS
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ...WM_PIPES,
    ...WM_DIRECTIVES,

    WrapperComponent
  ]
})
export class WmModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: WmModule,
      providers: [
        ...WM_VALIDATORS,
        ...WM_SERVICES
      ],
    };
  }
}
