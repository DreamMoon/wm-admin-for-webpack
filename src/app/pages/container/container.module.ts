import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContainerComponent } from './container.component';
import { routing }       from './container.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [
    ContainerComponent
  ],
  providers: []
})
export class ContainerModule {}
