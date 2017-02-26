import {Component} from '@angular/core';

import 'style-loader!./pages.component.scss';
import { PAGES_MENU } from "./pages.menu";

@Component({
  template: `<wm-wrapper [menus]="menus"></wm-wrapper>`
})
export class PagesComponent {
  menus = PAGES_MENU;
  constructor() {
  }
}
