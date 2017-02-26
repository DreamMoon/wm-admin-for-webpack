/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit
} from '@angular/core';
import { AppState } from './app.service';

import { WmThemePreloader, WmThemeSpinner } from './theme/providers';

import 'style-loader!./app.component.scss';
import 'style-loader!./theme/initial.scss';

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
    public appState: AppState,
    private _spinner: WmThemeSpinner
  ) {}

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

  public ngAfterViewInit(): void {
    // hide spinner once all loaders are completed
    WmThemePreloader.load().then((values) => {
      this._spinner.hide();
    });
  }
}
