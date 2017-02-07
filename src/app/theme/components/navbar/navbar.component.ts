/**
 * Created by DreamBoy on 2017/1/28.
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';

import 'style-loader!./navbar.component.css';

@Component({
    selector: 'wm-navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent {
    // 控制是否显示侧边栏
    @Input() showSidebar: boolean = true;
    @Output() showSidebarChange: EventEmitter<boolean> = new EventEmitter();
    // 控制是否显示侧边栏中的header
    @Input() showSidebarHeader: boolean = true;
    @Output() showSidebarHeaderChange: EventEmitter<boolean> = new EventEmitter();

    toggelSidebar(): void {
        this.showSidebar = !this.showSidebar;
        this.showSidebarChange.emit(this.showSidebar);
    }
    toggleSidebarHeader(): void {
        this.showSidebarHeader = !this.showSidebarHeader;
        this.showSidebarHeaderChange.emit(this.showSidebarHeader);
    }

    curDropdownMenuIndex: number = 0; // 当前显示的下拉菜单。0表示没有显示任何菜单；大于0表示显示第几个下拉菜单
    showDropdownMenu(index: number): void {
        if(this.curDropdownMenuIndex == index) {
            this.curDropdownMenuIndex = 0;
        } else {
            this.curDropdownMenuIndex = index;
        }
    }
}
