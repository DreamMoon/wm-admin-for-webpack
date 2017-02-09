/**
 * Created by DreamBoy on 2017/1/28.
 */
import { NgModule }             from '@angular/core';

import { AccordionModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';

@NgModule({
    imports: [ AccordionModule, ButtonModule ],
    exports: [ AccordionModule, ButtonModule ]
})
export class PrimengModule {}