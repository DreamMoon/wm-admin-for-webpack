/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit
} from '@angular/core';
import { AppState } from './app.service';

/*import 'style-loader!./theme/initial.scss';*/
import 'style-loader!./app.component.scss';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'wm-app',
  template: `
    <main>
      <wm-page></wm-page>
    </main>
  `
})
export class AppComponent implements OnInit {

  constructor(
    public appState: AppState
  ) {}

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }
}
