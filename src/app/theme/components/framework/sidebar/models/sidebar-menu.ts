/**
 * Created by DreamBoy on 2017/2/10.
 */
import {SidebarSubmenu} from "./sidebar-submenu";

/**
 * 一级菜单
 */
export class SidebarMenu {
  color: string = '#05afd1'; // 一级菜单处左边框的颜色
  icon: string; // 图标
  name: string; // 一级菜单名
  link: string; // 一级菜单链接
  badge: number = 0; // 徽章的数值
  submenus: Array<SidebarSubmenu> = [];
}
