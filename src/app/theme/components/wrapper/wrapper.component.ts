/**
 * Created by DreamBoy on 2017/1/29.
 */
import { Component } from '@angular/core';

import 'style-loader!./wrapper.component.css'; // 设置全局可使用的css样式

@Component({
    selector: 'wm-wrapper',
    templateUrl: './wrapper.component.html'
})
export class WrapperComponent {
    isShowSidebar: boolean = true; // 是否显示侧边栏
    isShowSidebarHeader: boolean = true; // 是否显示侧边栏中的header
}
