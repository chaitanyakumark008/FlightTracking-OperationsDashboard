import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Menu } from 'src/app/models/menu';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  userName = 'Chaitanya';
  menuItems: Menu[] = [];

  isMobile = false;

  constructor(
    private router: Router,
    private breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit(): void {

    this.getMenuItems();

    this.breakpointObserver
      .observe('(max-width: 768px)')
      .subscribe(result => {
        this.isMobile = result.matches;
      });
  }

  getMenuItems(): void {
    this.menuItems = [
      {
        menuName: 'Dashboard',
        menuUrl: '/dashboard',
        menuIcon: 'dashboard',
        subMenu: []
      },
      {
        menuName: 'Flights',
        menuUrl: '/flights',
        menuIcon: 'flight',
        subMenu: []
      },
      {
        menuName: 'Routes',
        menuUrl: '/routes',
        menuIcon: 'alt_route',
        subMenu: []
      }
    ];
  }

  logout(): void {
    sessionStorage.clear();
    this.router.navigate(['']);
  }
}