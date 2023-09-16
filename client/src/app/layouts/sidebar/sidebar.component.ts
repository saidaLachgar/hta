import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import MetisMenu from 'metismenujs/dist/metismenujs';
import { AuthenticationService } from 'src/app/core/services/auth.service';
import { MENU } from '../../core/const/menu';
import { MenuItem } from '../../core/models';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

/**
 * Sidebar component
 */
export class SidebarComponent implements OnInit, AfterViewInit, OnChanges {
  @ViewChild('componentRef') scrollRef;
  @Input() isCondensed = false;
  menu: any;
  data: any;

  menuItems:any = [];

  @ViewChild('sideMenu') sideMenu: ElementRef;

  constructor(private router: Router, public auth: AuthenticationService) {
    router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        this._activateMenuDropdown();
        this._scrollElement();
      }
    });
  }

  ngOnInit() {
    this.initialize();
    this._scrollElement();
  }

  ngAfterViewInit() {
    this.menu = new MetisMenu(this.sideMenu.nativeElement);
    setTimeout(() => this._activateMenuDropdown());
  }

  toggleMenu(event) {
    event.currentTarget.nextElementSibling.classList.toggle('mm-show');
  }

  ngOnChanges() {
    if (!this.isCondensed && this.sideMenu || this.isCondensed) {
      setTimeout(() => {
        this.menu = new MetisMenu(this.sideMenu.nativeElement);
      });
    } else if (this.menu) {
      this.menu.dispose();
    }
  }
  _scrollElement() {
    setTimeout(() => {
      if (document.getElementsByClassName("mm-active").length > 0) {
        const currentPosition = document.getElementsByClassName("mm-active")[0]['offsetTop'];
        if (currentPosition > 500)
          if (this.scrollRef.SimpleBar !== null)
            this.scrollRef.SimpleBar.getScrollElement().scrollTop =
              currentPosition + 300;
      }
    }, 300);
  }

  /**
   * remove active and mm-active class
   */
  _removeAllClass(className) {
    const els = Array.from(document.getElementsByClassName(className));
    els.forEach(element => {
      element.classList.remove(className);
    });
  }

  /**
   * Activate the parent dropdown
   */
  _activateMenuDropdown() {
    setTimeout(() => {
      this._removeAllClass('mm-active');
      this._removeAllClass('mm-show');
      const activeLink = document.querySelector('.side-nav-link-ref.active');
      if (activeLink) {
        const parentEl = activeLink.closest("li");
        if (parentEl) {
          (parentEl as HTMLElement).classList.add('mm-active');
          const parentEl2 = parentEl.parentElement.closest("li");
          if(parentEl2) {
            (parentEl2 as HTMLElement).classList.add('mm-active');
            (parentEl as HTMLElement).closest(".sub-menu").classList.add('mm-show');
          }
        }
      }
    });
  }

  /**
   * Initialize
   */
  initialize(): void {
    this.menuItems = this.checkPermissions(MENU);
    // console.log(this.menuItems);
  }

  /**
   * Returns true or false if given menu item has child or not
   * @param item menuItem
   */
  hasItems(item: MenuItem) {
    return item.subItems !== undefined ? item.subItems.length > 0 : false;
  }

  /**
   * checks if menu items are authorized
   * @param menu Menu
   */
  checkPermissions(menu) {
    return menu.filter(item => {
      if (item.isTitle) {
        return true; // Ignore isTitle items
      }
      
      if (item.checkPermissions && this.auth.isAuthorized(item.checkPermissions + '_show')) {
        return true; // Remove items with false permissions
      }
  
      if ('subItems' in item && item.subItems) {
        item.subItems = this.checkPermissions(item.subItems); // Recursively filter subItems
        return item.subItems && item.subItems.length > 0; // Keep the parent item if subItems remain
      }
      
      return false;
    })
  }

}
