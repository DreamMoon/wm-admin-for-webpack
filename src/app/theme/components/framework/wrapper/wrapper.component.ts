/**
 * Created by DreamBoy on 2017/1/29.
 */
import { Component, Input } from '@angular/core';

import {SidebarMenu} from "../sidebar/models/sidebar-menu";

import 'style-loader!./wrapper.component.css'; // 可设置当前框架可使用的css样式

@Component({
    selector: 'wm-wrapper',
    templateUrl: './wrapper.component.html'
})
export class WrapperComponent {
    @Input() menus: Array<SidebarMenu> = [];
    isShowSidebar: boolean = true; // 是否显示侧边栏
    isShowSidebarHeader: boolean = true; // 是否显示侧边栏中的header
}
