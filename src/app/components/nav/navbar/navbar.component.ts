import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  isDrawerOpen = false;

  toggleDrawer = () => {
    this.isDrawerOpen = !this.isDrawerOpen;
  };
}
