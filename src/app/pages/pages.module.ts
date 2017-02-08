import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { PagesRoutingModule }       from './pages-routing.module';
import { WmModule } from '../theme/wm.module';

import { PagesComponent } from './pages.component';
import { HomeModule } from "./home/home.module";

@NgModule({
  imports: [CommonModule, WmModule, PagesRoutingModule, HomeModule ],
  declarations: [PagesComponent],
  exports: [PagesComponent]
})
export class PagesModule {
}
