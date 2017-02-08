/**
 * Created by DreamBoy on 2017/1/28.
 */
import { Component, Input, OnInit } from '@angular/core';

/**
 * 二级菜单
 */
class SidebarSubmenu {
    link: string; // 二级菜单的跳转链接
    name: string; // 二级菜单名
}
/**
 * 一级菜单
 */
class SidebarMenu {
    color: string = '#05afd1'; // 一级菜单处左边框的颜色
    icon: string; // 图标
    name: string; // 一级菜单名
    link: string; // 一级菜单链接
    badge: number = 0; // 徽章的数值
    submenus: Array<SidebarSubmenu> = [];
}

import 'style-loader!./sidebar.component.scss';

@Component({
    selector: 'wm-sidebar',
    templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
    @Input() show: boolean = false; // 是否显示sidebar
    @Input() showHeader: boolean = true; // 是否显示header

    menus: Array<SidebarMenu> = [];
    curMenu: SidebarMenu = null;
    curSubmenu: SidebarSubmenu = null;

    ngOnInit(): void {
        this.menus  = [
            {
                color: '#05afd1',
                icon: 'home',
                name: '首页',
                link: '',
                badge: 0,
                submenus: []
            },
            {
                color: '#123456',
                icon: 'cube',
                name: 'UI 控件',
                link: 'javascript:void(0)',
                badge: 0,
                submenus: [
                    {
                        link: '/container',
                        name: '小部件'
                    },
                    {
                        link: '#',
                        name: '动画'
                    }
                ]
            },
            {
                color: '#234567',
                icon: 'key',
                name: '插件应用',
                link: 'javascript:void(0)',
                badge: 0,
                submenus: [
                    {
                        link: '#',
                        name: 'jQuery插件'
                    },
                    {
                        link: '#',
                        name: '我的插件'
                    }
                ]
            },
            {
                color: '#345678',
                icon: 'book',
                name: '其他页面',
                link: 'javascript:void(0)',
                badge: 0,
                submenus: [
                    {
                        link: '#',
                        name: '收件箱'
                    },
                    {
                        link: '#',
                        name: '表格'
                    }
                ]
            },
            {
                color: '#456789',
                icon: 'tag',
                name: '更多页面',
                link: 'javascript:void(0)',
                badge: 5,
                submenus: [
                    {
                        link: '#',
                        name: '空白页面'
                    },
                    {
                        link: '#',
                        name: '登录页面'
                    },
                    {
                        link: '#',
                        name: '跳转页面'
                    },
                    {
                        link: '#',
                        name: '404页面'
                    }
                ]
            },
            {
                color: '#56789A',
                icon: 'list',
                name: '一级菜单',
                link: 'javascript:void(0)',
                badge: 0,
                submenus: [
                    {
                        link: '#',
                        name: '二级菜单-1'
                    },
                    {
                        link: '#',
                        name: '二级菜单-2'
                    }
                ]
            },
            {
                color: '#6789AB',
                icon: 'sign-out',
                name: '安全退出',
                link: '#',
                badge: 0,
                submenus: []
            }
        ];
    }

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
