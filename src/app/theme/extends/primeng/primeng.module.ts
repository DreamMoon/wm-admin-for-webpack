/**
 * Created by DreamBoy on 2017/1/28.
 */
import { NgModule }             from '@angular/core';

import { AccordionModule } from 'primeng/components/accordion/accordion';
import { ButtonModule } from 'primeng/components/button/button';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { GrowlModule } from 'primeng/components/growl/growl';
import { SharedModule } from 'primeng/components/common/shared';

const PRIMENG_MODULES = [
    AccordionModule,
    ButtonModule,
    DataTableModule,
    GrowlModule,
    SharedModule
];

@NgModule({
    imports: [
        ...PRIMENG_MODULES
    ],
    exports: [
        ...PRIMENG_MODULES
    ]
})
export class PrimengModule {}
