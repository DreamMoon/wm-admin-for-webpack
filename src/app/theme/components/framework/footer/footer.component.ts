/**
 * Created by DreamBoy on 2017/1/30.
 */
import { Component, Input } from '@angular/core';

@Component({
    selector: 'wm-footer',
    templateUrl: './footer.component.html',
    styleUrls: [ './footer.component.css' ]
})
export class FooterComponent {
  @Input() stretched: boolean = false;
}
