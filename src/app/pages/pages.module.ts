import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { routing }       from './pages.routing';
import { WmModule } from '../theme/wm.module';

import { PagesComponent } from './pages.component';

@NgModule({
  imports: [CommonModule, WmModule, routing],
  declarations: [PagesComponent]
})
export class PagesModule {
}
