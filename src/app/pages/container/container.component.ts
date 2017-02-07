/**
 * Created by DreamBoy on 2017/1/28.
 */
import { Component, Input } from '@angular/core';

@Component({
    selector: 'wm-container',
    templateUrl: './container.component.html',
    styleUrls: [ './container.component.css' ]
})
export class ContainerComponent {
    @Input() stretched: boolean = false;

    clicks: number = 0;

    count() {
        this.clicks++;
    }

    msgs: any = [];

    onTabClose(event: any) {
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Tab Closed', detail: 'Index: ' + event.index});
    }

    onTabOpen(event: any) {
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Tab Expanded', detail: 'Index: ' + event.index});
    }
}
