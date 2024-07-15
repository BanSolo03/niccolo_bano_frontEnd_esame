import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  activeLink!: number;

  constructor(private readonly router: Router) {
    this.initialize();
  }

  initialize() {
    this.activeLink = 1;
    this.router.navigateByUrl('findAll');
  }

  activateLink(activeLink: number) {
    this.activeLink = activeLink;
  }

}
