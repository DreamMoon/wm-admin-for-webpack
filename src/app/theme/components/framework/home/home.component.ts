/**
 * Created by DreamBoy on 2017/1/28.
 */
import { Component } from '@angular/core';

@Component({
    selector: 'wm-home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    clicks: number = 0;

    count() {
        this.clicks++;
    }
}
