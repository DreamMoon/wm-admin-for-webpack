import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { OtherComponent } from './other.component';
import { TableComponent } from "./table/table.component";

import { PrimengModule } from "../../theme/extends/primeng/primeng.module";
import { OtherRoutingModule } from './other-routing.module';

import {CarService} from "./table/providers/car.service";

@NgModule({
  imports: [
    CommonModule,
    OtherRoutingModule,
    PrimengModule
  ],
  declarations: [
    OtherComponent,
    TableComponent
  ],
  providers: [ CarService ]
})
export class OtherModule {}
