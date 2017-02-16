/**
 * Created by DreamBoy on 2017/1/29.
 */
import { Component, HostListener, Input } from '@angular/core';

@Component({
    selector: 'wm-scroll-to-top',
    template: `
        <span class="u-scroll-to-top" [class.z-active]="scrollTop >= top" (click)="scrollToTop()"><i class="fa fa-chevron-up fa-lg"></i></span>
    `,
    styleUrls: [ './scroll-to-top.component.css' ]
})
export class ScrollToTopComponent {
    @Input() top: number = 200; // 滚动条滚动高度的阈值

    // 参考：http://brianflove.com/2016/10/10/angular-2-window-scroll-event-using-hostlistener/
    scrollTop: number = 0; // 当前滚动条滚动的高度
    @HostListener("window:scroll", [])
    onWindowScroll() {
        this.scrollTop = this.getScrollTop();
    }

    constructor() {
        this.scrollTop = this.getScrollTop();
    }

    private getScrollTop(): number {
        return document.documentElement.scrollTop || document.body.scrollTop;
    }

    // 回到顶部
    scrollToTop(): void {
        window.scrollTo(0,0);
    }
}
