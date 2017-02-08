import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { ContainerComponent } from './container.component';
import {ContainerRoutingModule} from "./container-routing.module";

@NgModule({
  imports: [
    CommonModule,
    ContainerRoutingModule
  ],
  declarations: [
    ContainerComponent
  ],
  providers: []
})
export class ContainerModule {}
