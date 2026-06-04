import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from 'src/app/models/menu';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  userName = '';
  menuItems: Menu[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.getMenuItems();
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
      }
    ];
  }

  logout(): void {
    sessionStorage.clear();
    this.router.navigate(['']);
  }
}