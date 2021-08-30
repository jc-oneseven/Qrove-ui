import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MobileMenuService {
  private showMenu = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.setShowMenu(false);
    });
  }

  getShowMenu() {
    return this.showMenu.asObservable();
  }

  setShowMenu(showHide: boolean) {
    this.showMenu.next(showHide);
  }

  toggleMenuState() {
    this.showMenu.next(!this.showMenu);
  }

  isMenuOpen() {
    return this.showMenu.value;
  }
}
