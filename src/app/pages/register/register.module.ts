import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { RegisterComponent } from './register.component';
import { RegisterRoutingModule }       from './register-routing.module';
import { RegisterService } from "./register.service";

@NgModule({
  imports: [
    CommonModule,
    RegisterRoutingModule
  ],
  declarations: [
    RegisterComponent
  ],
  providers: [ RegisterService ]
})
export class RegisterModule {}
