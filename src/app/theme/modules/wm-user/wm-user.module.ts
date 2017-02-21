import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { WmUserRoutingModule }       from './wm-user-routing.module';
import { WmUserComponent } from './wm-user.component';
import { LoginComponent, LoginNavbarComponent, RegisterComponent } from './components';

const WM_COMPONENTS = [
  WmUserComponent,

  LoginComponent,
  LoginNavbarComponent,
  RegisterComponent,
];

@NgModule({
  imports: [
    CommonModule,
    WmUserRoutingModule
  ],
  declarations: [
    ...WM_COMPONENTS
  ],
  providers: []
})
export class WmUserModule {}
