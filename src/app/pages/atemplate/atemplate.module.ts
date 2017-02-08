import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { AtemplateComponent } from './atemplate.component';
import { AtemplateRoutingModule }       from './atemplate-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AtemplateRoutingModule
  ],
  declarations: [
    AtemplateComponent
  ],
  providers: []
})
export class AtemplateModule {}
