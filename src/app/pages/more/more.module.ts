import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { MoreComponent } from './more.component';
import { MoreRoutingModule }       from './more-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MoreRoutingModule
  ],
  declarations: [
    MoreComponent
  ],
  providers: []
})
export class MoreModule {}
