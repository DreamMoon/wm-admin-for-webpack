/**
 * Created by DreamBoy on 2017/1/29.
 */
import { Component } from '@angular/core';

import 'style-loader!./wrapper.component.css';

@Component({
    selector: 'wm-wrapper',
    templateUrl: './wrapper.component.html'
})
export class WrapperComponent {
    isShowSidebar: boolean = true; // 是否显示侧边栏
    isShowSidebarHeader: boolean = true; // 是否显示侧边栏中的header
}
