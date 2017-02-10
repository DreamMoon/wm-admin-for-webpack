/**
 * Created by DreamBoy on 2017/1/28.
 */
import { NgModule }             from '@angular/core';

import { AccordionModule } from 'primeng/components/accordion/accordion';
import { ButtonModule } from 'primeng/components/button/button';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { SharedModule } from 'primeng/components/common/shared';

@NgModule({
    imports: [
      AccordionModule,
      ButtonModule,
      DataTableModule,
      SharedModule
    ],
    exports: [
      AccordionModule,
      ButtonModule,
      DataTableModule,
      SharedModule
    ]
})
export class PrimengModule {}
