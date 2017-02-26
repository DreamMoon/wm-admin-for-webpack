/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit
} from '@angular/core';
import { AppState } from './app.service';

import 'style-loader!./app.component.scss';
import '../assets/lib/css3-3d-cube-loading/css/style.css';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'wm-app',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {

  constructor(
    public appState: AppState
  ) {}

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }
}
