import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;

    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
      if (this.menuOpen) {
        navLinks.classList.add('open');
      } else {
        navLinks.classList.remove('open');
      }
    }
  }
}
