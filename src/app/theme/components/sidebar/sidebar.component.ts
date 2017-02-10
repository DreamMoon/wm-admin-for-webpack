/**
 * Created by DreamBoy on 2017/1/28.
 */
import { Component, Input } from '@angular/core';

import { SidebarMenu } from "./models/sidebar-menu";
import { SidebarSubmenu } from "./models/sidebar-submenu";

@Component({
    selector: 'wm-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: [ './sidebar.component.css' ]
})
export class SidebarComponent {
    @Input() menus: Array<SidebarMenu> = [];
    @Input() show: boolean = false; // 是否显示sidebar
    @Input() showHeader: boolean = true; // 是否显示header
    curMenu: SidebarMenu = null;
    curSubmenu: SidebarSubmenu = null;

    openMenu(menu: SidebarMenu): void {
        if(this.curMenu == menu) {
            this.curMenu = null;
        } else {
            this.curMenu = menu;
        }
    }

    selectSubmenu(menu: SidebarMenu, submenu: SidebarSubmenu): void {
        this.curMenu = menu;
        this.curSubmenu = submenu;
    }
}
